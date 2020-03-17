from django.db import models
from datetime import datetime
# Create your models here.


class Project(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    cover = models.ImageField(blank=True, null=True)


class Tag(models.Model):
    name = models.CharField(max_length=30)


class Article(models.Model):
    published_date = models.DateField(default=datetime.now)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    tags = models.ManyToManyField(Tag)
