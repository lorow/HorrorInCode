from rest_framework import serializers


class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)


class LoginSerialier(serializers.Serializer):
    # kind of a hacky way to improve the documentation. It does literally nothing else
    username = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=255)
