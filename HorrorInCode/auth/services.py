from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from rest_framework.request import Request
from auth.serializers import TokenSerializer
from rest_framework_jwt.settings import api_settings
from rest_framework.exceptions import ValidationError

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


def login_user(request: Request, username: str, password: str) -> str:

    user = authenticate(request, username=username, password=password)

    # if the authentication was successful login the user, generate the jwt token and return it
    if user is not None:
        login(request, user)
        serializer = TokenSerializer(
            data={
                'token': jwt_encode_handler(
                    jwt_payload_handler(user)
                )
            }
        )

        serializer.is_valid()
        return serializer.validated_data.get('token')

    else:
        raise ValidationError("this user does not exists, wrong credentials")


def register_user(username, password, confirm_password, email):

    if password != confirm_password:
        raise ValidationError("passwords don't match")

    User.objects.create_user(username, email, password)


def logout_user(request):
    """ Works by saving the expired token in the user instance."""
    pass
