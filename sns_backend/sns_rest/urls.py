from django.conf.urls import url, include
from sns_rest import views

urlpatterns = [
    # User registration
    url(r'^users/login', views.Login.as_view(), name='users-login'),
    url(r'^users/signup', views.Signup.as_view(), name='users-signup'),
    url(r'^users/follow', views.Follow.as_view(), name='users-follow'),
    url(r'^users/mypage', views.Mypage.as_view(), name='users-mypage'),
    url(r'^users/(?P<pk>[0-9]+)', views.UsersDetail.as_view(), name='users-detail'),
    url(r'^users', views.UsersList.as_view(), name='users-list'),

    # Timeline
    url(r'^timelines/(?P<pk>[0-9]+)/reply', views.TimelineReply.as_view(), name='timeline-reply'),
    url(r'^timelines/(?P<pk>[0-9]+)/like', views.TimelineLike.as_view(), name='timeline-like'),
    url(r'^timelines/(?P<pk>[0-9]+)/click', views.TimelineClick.as_view(), name='timeline-click'),
    url(r'^timelines/(?P<pk>[0-9]+)/$', views.TimelineDetail.as_view(), name='timeline-detail'),
    url(r'^timelines', views.TimelineList.as_view(), name='timeline-list'),

    # Chat
    url(r'^chats/(?P<pk>[0-9]+)/submit', views.ChatSubmit.as_view(), name='chat-submit'),
    url(r'^chats/(?P<pk>[0-9]+)', views.ChatMessageList.as_view(), name='chatmessage-list'),
    url(r'^chats/', views.ChatList.as_view(), name='chat-list'),

    url(r'^api-auth', include('rest_framework.urls', namespace='rest_framework')),
]
