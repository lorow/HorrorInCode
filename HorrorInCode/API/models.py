from django.db import models
from datetime import datetime
# Create your models here.


class Tag(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
    


class Project(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    cover = models.ImageField(blank=True, null=True)
    tech_stack = models.ManyToManyField(Tag, related_name="tech_stack", blank=True)
    description = models.TextField(blank=True, null=True)
    def __str__(self):
        return self.name
    

class Article(models.Model):
    published_date = models.DateField(default=datetime.now)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    tags = models.ManyToManyField(Tag, related_name="tags", blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-published_date']
