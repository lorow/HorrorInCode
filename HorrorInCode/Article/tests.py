from django.test import TestCase
from .views import ArticleView
# Create your tests here.

class ArticleViewTest(TestCase):

    def testGetArticleId(self):
        articleView = ArticleView()
        request_dict_mock = {'id': '2'}

        self.assertEqual(articleView.get_article_id(request_dict_mock), 2)
