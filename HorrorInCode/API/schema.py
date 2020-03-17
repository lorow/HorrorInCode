from graphene_django import DjangoObjectType
from API.models import Project, Tag, Article
import graphene


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project


class ProjectQuery(object):

    projects = graphene.List(ProjectType)
    project = graphene.Field(
        ProjectType,
        id=graphene.Int()
    )

    def resolve_projects(self, info, **kwargs):
        return Project.objects.all()

    def resolve_project(self, info, **kwargs):
        id = kwargs.get('id')

        if id is None:
            return None

        return Project.objects.get(pk=id)


class TagType(DjangoObjectType):
    class Meta:
        model = Tag


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article


class ArticleQuery(object):

    tags = graphene.List(TagType)
    articles = graphene.List(ArticleType)
    article = graphene.Field(
        ArticleType,
        id=graphene.Int(),
    )

    def resolve_articles(self, info, **kwargs):
        return Article.objects.all()

    def resolve_tags(self, info, **kwargs):
        return Tag.objects.all()

    def resolve_article(self, info, **kwargs):
        id = kwargs.get('id')
        if id is None:
            return None

        return Article.objects.get(pk=id)
