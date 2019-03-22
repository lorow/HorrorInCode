from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from Article.serializers import ArticleSerializer
from Article.serializers import CommentSerializer
from App.models import *


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class ArticleViewSet(viewsets.ModelViewSet):

    """
    retrieve:
    Returns the given article.

    list:
    Return list of all articles, not paginated.

    create:
    Only for logged in users with creator role, creates a new article.

    """

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

        headers = self.get_success_headers(request.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()
