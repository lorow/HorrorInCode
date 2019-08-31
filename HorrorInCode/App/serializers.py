from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        depth = 1
        fields = ('id', 'username', 'first_name', 'last_name', 'email',
                  'is_superuser', 'is_staff')


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    id = serializers.IntegerField(source='pk', read_only=True)

    class Meta:
        model = UserProfile
        depth = 1
        fields = ('id', 'user',)

    def get_full_name(self, obj):
        request = self.context['request']
        return request.user.get_full_name()

    def update(self, instance, validated_data):
        # setup user
        user_data = validated_data.pop('user', None)
        for attr, value in user_data.items():
            setattr(instance.user, attr, value)

        # setup profile
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.user.save()
        instance.save()
        return instance
