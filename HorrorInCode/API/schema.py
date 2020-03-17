from graphene_django import DjangoObjectType
from API.models import Project, Tag, Article
import graphene


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project


class ProjectQuery(object):

    projects = graphene.List(ProjectType)

    def resolve_projects(self, info, **kwargs):
        return Project.objects.all()


class TagType(DjangoObjectType):
    class Meta:
        model = Tag


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article


class ArticleQuery(object):

    tags = graphene.List(TagType)
    articles = graphene.List(ArticleType)

    def resolve_articles(self, info, **kwargs):
        return Article.objects.all()

    def resolve_tags(self, info, **kwargs):
        Tag.objects.all()
