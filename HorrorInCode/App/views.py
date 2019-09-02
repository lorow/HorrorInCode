from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserProfileSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework import viewsets
from App.services import send_email
from rest_framework import status
from .models import UserProfile


class UserProfileView(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class SendEmailAPI(APIView):
    permission_classes = (AllowAny,)

    class InputSerializer(serializers.Serializer):
        name = serializers.CharField()
        email = serializers.EmailField()
        subject = serializers.CharField()
        message = serializers.CharField()

    def get_serializer(self):
        return self.InputSerializer()

    def post(self, request, **kwargs):
        serializer = self.InputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        send_email(**serializer.validated_data)
        return Response(data={"status": "message send"},status=status.HTTP_200_OK)
