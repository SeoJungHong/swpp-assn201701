from rest_framework import serializers
from django.contrib.auth.models import User
from sns_backend import settings
from sns_rest.models import Timeline, ChatMessage, Reply


class UserSerializer(serializers.ModelSerializer):
    following = serializers.SerializerMethodField()
    followers = serializers.SerializerMethodField()
    point = serializers.IntegerField(source='profile.point', read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'following', 'followers', 'point',)
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def get_following(self, user):
        return [followee_profile.user.username for followee_profile in user.profile.following.all()]

    def get_followers(self, user):
        return [follower_profile.user.username for follower_profile in user.profile.followers.all()]


class ReplySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    created = serializers.DateTimeField(read_only=True, format=settings.DATETIME_FORMAT)

    class Meta:
        model = Reply
        fields = ('user', 'message', 'created')


class TimelineSerializer(serializers.ModelSerializer):
    writer = serializers.SlugRelatedField(queryset=User.objects.all(), required=False, slug_field='username')
    created = serializers.DateTimeField(read_only=True, format=settings.DATETIME_FORMAT)

    class Meta:
        model = Timeline
        fields = ('id', 'writer', 'title', 'price', 'created', 'category', 'private', 'clicks')


class TimelineDetailSerializer(serializers.ModelSerializer):
    writer = serializers.SlugRelatedField(queryset=User.objects.all(), required=False, slug_field='username')
    replies = ReplySerializer(many=True, read_only=True, allow_null=True)
    likes = UserSerializer(many=True, read_only=True, allow_null=True)
    created = serializers.DateTimeField(read_only=True, format=settings.DATETIME_FORMAT)

    class Meta:
        model = Timeline
        fields = '__all__'


class ChatMessageSerializer(serializers.ModelSerializer):
    fromUser = UserSerializer(read_only=True)
    toUser = UserSerializer(read_only=True)
    created = serializers.DateTimeField(read_only=True, format=settings.DATETIME_FORMAT)

    class Meta:
        model = ChatMessage
        fields = ('fromUser', 'toUser', 'message', 'created')
