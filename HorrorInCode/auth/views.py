from rest_framework import permissions, status, mixins
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework import viewsets
from auth.services import  register_user


class RegisterView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)

    class InputSerializer(serializers.Serializer):
        username = serializers.CharField(max_length=255)
        password = serializers.CharField(max_length=255)
        confirm_password = serializers.CharField(max_length=255)
        email = serializers.EmailField()

    def get_serializer(self, *args, **kwargs):
        return self.InputSerializer()

    def create(self, request, *args, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        register_user(**serializer.validated_data)

        return Response(data={'status': 'Your account has been successfully created'}, status=status.HTTP_200_OK)
