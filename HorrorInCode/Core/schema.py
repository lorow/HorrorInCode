import graphene
from API import schema, mutations

class Query(schema.ProjectQuery, schema.ArticleQuery, graphene.ObjectType):
    pass

class Mutation(graphene.ObjectType):
    send_email = mutations.EmailMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
