from rest_framework.relations import StringRelatedField
from rest_framework import serializers
from App.models import Article
from App.models import Comment


class CommentSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        return Comment.objects.create(**validated_data)

    class Meta:
        model = Comment
        depth = 1
        fields = ('__all__')


class ArticleSerializer(serializers.ModelSerializer):

    comments = CommentSerializer(many=True, required=False)
    creator = StringRelatedField(many=False)

    def create(self, validated_data):
        return Article.objects.create(**validated_data)

    class Meta:
        model = Article
        fields = ('article_id', 'title', 'description', 'views_amount', 'tags', 'pub_date',
                  'reading_time', 'author_id', 'image', 'comments', 'creator')
