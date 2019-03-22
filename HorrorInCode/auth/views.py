from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from rest_framework import permissions, status, mixins
from App.models import UserProfile
from auth.serializers import TokenSerializer, LoginSerialier
import secrets
# Get the JWT settings, add these lines after the import/from lines
from App.serializers import UserSerializer


jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class LogoutView(viewsets.ModelViewSet):
    """
    POST auth/logout
    """

    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = TokenSerializer
    queryset = User.objects.all()

    def noreason(self, request, *args, **kwargs):

        profile = UserProfile.objects.get(id=request.user.id)
        profile.user_secret = secrets.token_urlsafe()
        profile.save()

        return Response('{"detail": "Logged out successfully"}',
                        status=status.HTTP_200_OK
                        )


class LoginView(mixins.CreateModelMixin ,viewsets.GenericViewSet):
    """
    create:
    Tries login the user with data packed as {"username":"user", "password":"pass"}.
    If the login action was successful an valid JWT token is returned, otherwise status 401 is returned

    """

    permission_classes = (permissions.AllowAny,)
    serializer_class = LoginSerialier
    queryset = User.objects.all()

    def create(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        password = request.data.get("password", "")

        user = authenticate(request, username=username, password=password)

        # successful auth
        if user is not None:
            # login him, and save the token
            login(request, user)
            serializer = TokenSerializer(
                data={
                    'token': jwt_encode_handler(
                        jwt_payload_handler(user)
                    )
                }
            )
            serializer.is_valid()
            return Response(serializer.data)
        return Response(
            status=status.HTTP_401_UNAUTHORIZED
        )


class RegisterView(mixins.CreateModelMixin ,viewsets.GenericViewSet):
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
