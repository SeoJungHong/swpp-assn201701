from django.contrib import admin

from sns_rest.models import Timeline, Reply, ChatMessage, Profile

admin.site.register(Timeline)
admin.site.register(Reply)
admin.site.register(ChatMessage)
admin.site.register(Profile)
