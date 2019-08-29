from auth.serializers import TokenSerializer
from rest_framework import permissions, status, mixins
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework import viewsets
from App.models import UserProfile
import secrets

from auth.services import login_user
from App.serializers import UserSerializer


class LogoutView(viewsets.GenericViewSet, mixins.CreateModelMixin):
    """
    POST auth/logout
    """

    permission_classes = (permissions.AllowAny, )
    serializer_class = TokenSerializer
    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):

        profile = UserProfile.objects.get(id=request.user.id)
        profile.user_secret = secrets.token_urlsafe()
        profile.save()

        return Response('{"detail": "Logged out successfully"}',
                        status=status.HTTP_200_OK
                        )


class LoginView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    create:
    Tries login the user with data packed as {"username":"user", "password":"pass"}.
    If the login action was successful an valid JWT token is returned, otherwise status 401 is returned

    """

    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()

    class InputSerializer(serializers.Serializer):
        username = serializers.CharField(max_length=255)
        password = serializers.CharField(max_length=255)

    def get_serializer(self, *args, **kwargs):
        return self.InputSerializer()

    def create(self, request, *args, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid()
        token = login_user(request, **serializer.validated_data)
        return Response(data={'token': token,}, status=status.HTTP_200_OK)


class RegisterView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    """

    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        password = request.data.get("password", "")
        email = request.data.get("email", "")
        user_secret = secrets.token_urlsafe()

        if not username and not password and not email:
            return Response(
                data={
                    "message": "username, password and email is required to register a user",
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        User.objects.create_user(
            username=username, password=password, email=email, user_secret=user_secret
        )

        return Response(status=status.HTTP_201_CREATED)
