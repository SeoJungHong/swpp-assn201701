from django.http import Http404
from rest_framework import generics, renderers
from rest_framework import status
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.views import APIView

from sns_backend.utils import get_or_none
from sns_rest.serializers import UserSerializer, TimelineSerializer, ChatMessageSerializer, ReplySerializer, \
    TimelineDetailSerializer
from sns_rest.models import Timeline, ChatMessage
from sns_rest.permissions import IsWriterOrAdminOnly
from rest_framework.response import Response
from django.contrib.auth.models import User
import json, re



class Login(APIView):
    renderer_classes = (renderers.JSONRenderer,)

    def post(self, request, *args, **kwargs):
        print("data : ",request.data)
        token_param = request.data.get('token')
        if token_param:  # Token validation
            user = User.objects.get(username=request.data['username'])
            token, _ = Token.objects.get_or_create(user=user)
            if token_param != token.key:
                return Response(
                    data={"success": False, "message": "Invalid Token"},
                    status=status.HTTP_400_BAD_REQUEST
                )
        else:  # Login
            serializer = AuthTokenSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.validated_data['user']
            token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user': UserSerializer(user).data})


class Signup(APIView):
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        if get_or_none(User, username=request.data['username']):
            # 중복된 유저이름
            print('duplicated username')
            return Response(
                data={"success": False, "message": "Duplicated username"},
                status=status.HTTP_400_BAD_REQUEST
            )
#        serializer = self.serializer_class(data=request.data)
#        serializer.is_valid(raise_exception=True)
#        user = serializer.save()
        user=User(username=request.data['username'], email=request.data['email'])
        user.set_password(request.data['password'])
        user.save()
        serializer = self.serializer_class(user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_201_CREATED)


class UsersList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)


class UsersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)


class Mypage(APIView):
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(request.user)
        user = serializer.update(request.user, request.data)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_200_OK)


class Follow(APIView):
    def get_object(self, username):
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise Http404

    def post(self, request):
        followee = self.get_object(request.data['username'])
        request.user.profile.following.add(followee.profile)
        return Response(status=status.HTTP_200_OK)

    def delete(self, request):
        followee = self.get_object(request.data['username'])
        request.user.profile.following.remove(followee.profile)
        return Response(status=status.HTTP_200_OK)


class TimelineList(generics.ListCreateAPIView):
    queryset = Timeline.objects.all()
    serializer_class = TimelineSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        category = []
        privacy = "all"
        regex = re.compile('category,')
        for key, value in self.request.data.items():
            if(regex.match(key) and value is True):
                str = key.split(',')
                category.append(str[1])
                category.sort()
            if ((key == "privacy") and value is True):
                privacy = "private"
        if 'base64' in self.request.data:
            serializer.save(writer=self.request.user, files=self.request.data['base64'], text=self.request.data['text'], category=json.dumps(category), private=privacy)
        else:
            serializer.save(writer=self.request.user, text=self.request.data['text'], category=json.dumps(category), private=privacy)

    def filter_queryset(self, queryset):
        filtered = []
        for query in queryset:
          if query.private == "private":
            
            for following in self.request.user.profile.following.all():
              if query.writer.username == following.user.username:
                filtered.append(query)
                break
            if query.writer.username == self.request.user.username:
              filtered.append(query)
          else:
            filtered.append(query)
        return filtered

class TimelineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Timeline.objects.all()
    serializer_class = TimelineDetailSerializer
    permission_classes = (permissions.IsAuthenticated,)


class TimelineClick(generics.UpdateAPIView):
    queryset = Timeline.objects.all()
    serializer_class = TimelineDetailSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        instance.clicks += 1
        instance.save()
        return Response(serializer.data)


class TimelineLike(generics.RetrieveUpdateDestroyAPIView):
    queryset = Timeline.objects.all()
    serializer_class = TimelineSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def perform_update(self, serializer):
        cancel = (self.request.data['cancel']=='True')
        instance = self.get_object()
        if cancel :
            instance.likes.remove(self.request.user)
        else :
            instance.likes.add(self.request.user)


class TimelineReply(generics.CreateAPIView):
    serializer_class = ReplySerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        pk = self.kwargs[self.lookup_field]
        timeline = Timeline.objects.get(pk=pk)
        serializer.save(user=self.request.user, timeline=timeline)
        headers = self.get_success_headers(serializer.data)
        return Response(TimelineSerializer(timeline).data, status=status.HTTP_201_CREATED, headers=headers)


class ChatList(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return User.objects.exclude(pk=self.request.user.id)


class ChatMessageList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = ChatMessageSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        fromUser = self.request.user
        toUser = User.objects.get(pk=self.kwargs[self.lookup_field])
        return ChatMessage.objects.filter(
            fromUser__in=[fromUser, toUser],
            toUser__in=[fromUser, toUser]
        ).order_by('created')


class ChatSubmit(generics.CreateAPIView):
    serializer_class = ChatMessageSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        toUser = User.objects.get(pk=self.kwargs[self.lookup_field])
        serializer.save(fromUser=self.request.user, toUser=toUser)
