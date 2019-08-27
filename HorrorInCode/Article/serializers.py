from rest_framework.relations import StringRelatedField
from rest_framework import serializers
from App.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    creator = StringRelatedField(many=False)

    def create(self, validated_data):
        return Article.objects.create(**validated_data)

    class Meta:
        model = Article
        fields = ('article_id', 'title', 'description', 'views_amount', 'tags', 'pub_date',
                  'reading_time', 'author_id', 'image', 'creator')
