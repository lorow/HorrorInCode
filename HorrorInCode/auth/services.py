from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError


def register_user(username: str, password: str, confirm_password: str, email: str) -> None:

    if password != confirm_password:
        raise ValidationError("passwords don't match")

    User.objects.create_user(username, email, password)
