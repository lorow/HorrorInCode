import secrets
from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
# Create your models here.
import django.utils.timezone as date


class Categories(models.Model):
    category = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=30)

    def __str__(self):
        return self.category_name

    class Meta:
        managed = True


class UserProfile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user")
    bio = models.TextField(max_length=500, blank=True, null=True)
    birth_date = models.DateField(null=True, blank=True)
    profile_image = models.ImageField(default='furry.jpg')
    profession = models.TextField(default='user')
    user_secret = models.TextField(default=secrets.token_urlsafe())

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
        permissions = (("can_write_post", "Can deliver pizzas"),)


class Article(models.Model):
    article_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    views_amount = models.IntegerField(default=0)
    tags = models.TextField()
    pub_date = models.DateField(default=date.now)
    reading_time = models.IntegerField(default=0)

    author_id = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default=0)

    image = models.ImageField()

    def __str__(self):
        return self.title

    class Meta:
        managed = True
        ordering = ['-article_id', ]


class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    article_id = models.ForeignKey(Article, related_name="comments", on_delete=models.CASCADE, default=0)
    user_id = models.ForeignKey(UserProfile, related_name="creator", on_delete=models.CASCADE, default=0)
    pub_date = models.DateField(default=date.now())
    description = models.TextField()

    def __str__(self):
        return self.description[:10]

    class Meta:
        managed = True
        ordering = ['-comment_id', ]
