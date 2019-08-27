from django.urls import path, include
from rest_framework_nested import routers
from App.views import *
from Article.views import *
from auth.views import *

router = routers.DefaultRouter()

router.register(r'profile', UserProfileView)
router.register(r'user', UserViewSet)
router.register(r'articles', ArticleViewSet)

router.register(r'register', RegisterView)
router.register(r'login', LoginView)
router.register(r'logout', LogoutView)

urlpatterns = [
    path('', include(router.urls)),
]