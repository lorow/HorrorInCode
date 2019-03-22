from django.urls import path, include
from .views import ArticleViewSet, CommentViewSet
from rest_framework_nested import routers

router = routers.DefaultRouter()
router.register(r'articles', ArticleViewSet)

comments_router = routers.NestedDefaultRouter(router, r'articles', lookup="comments")
comments_router.register(r'comments', CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', include(comments_router.urls)),
]
