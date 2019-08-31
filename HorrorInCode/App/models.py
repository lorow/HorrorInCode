import secrets
from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
import django.utils.timezone as date


class UserProfile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user")
    objects = models.Manager()

    @receiver(post_save, sender=User, dispatch_uid='save_new_user_profile')
    def save_profile(sender, instance, created, **kwargs):
        user = instance
        if created:
            profile = UserProfile(user=user)
            profile.save()

    def __str__(self):
        return self.user.username

    class Meta:
        managed = True


class Article(models.Model):
    article_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    views_amount = models.IntegerField(default=0)
    tags = models.TextField()
    objects = models.Manager()
    pub_date = models.DateField(default=date.now)
    reading_time = models.IntegerField(default=0)

    author_id = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default=0)

    image = models.ImageField()

    def __str__(self):
        return self.title

    class Meta:
        managed = True
        ordering = ['-article_id', ]
