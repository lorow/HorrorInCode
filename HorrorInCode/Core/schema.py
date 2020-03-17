import graphene
from API import schema


class Query(schema.ProjectQuery, schema.ArticleQuery, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
