from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class Timeline(models.Model):
    writer = models.ForeignKey(User, related_name='writer', on_delete=models.CASCADE)
    title = models.CharField(max_length=256, blank=True)
    price = models.PositiveIntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True, db_index=True)
    category = models.CharField(max_length=1000, blank=True)
    private = models.CharField(max_length=1000, blank=True, default="all")  
    # Only shown in detail page
    text = models.TextField(blank=True)
    files = models.TextField(blank=True)
    likes = models.ManyToManyField(User, blank=True)
    clicks = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return 'Timeline {0} by {1}'.format(self.id, self.writer.username)


class Reply(models.Model):
    timeline = models.ForeignKey(Timeline, related_name='replies', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True, db_index=True)


class ChatMessage(models.Model):
    fromUser = models.ForeignKey(User, related_name='fromUser', null=True, db_index=True, on_delete=models.CASCADE)
    toUser = models.ForeignKey(User, related_name='toUser', null=True, db_index=True, on_delete=models.CASCADE)
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True, db_index=True)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    following = models.ManyToManyField('self', related_name='followers', symmetrical=False)
    point = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username + ' Profile'

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()
