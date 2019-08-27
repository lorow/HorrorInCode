from django.urls import path, include
from .views import ArticleViewSet
from rest_framework_nested import routers

router = routers.DefaultRouter()
router.register(r'articles', ArticleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
