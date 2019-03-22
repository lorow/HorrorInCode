from django.urls import path, include
from rest_framework_nested import routers

from App.views import *

router = routers.DefaultRouter()
router.register(r'profile', UserProfileView)
router.register(r'user', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
