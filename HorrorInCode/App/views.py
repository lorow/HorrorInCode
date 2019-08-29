from rest_framework import viewsets
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileView(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
