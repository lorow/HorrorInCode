def get_user_secret_code(user):
    from App.models import UserProfile

    profile = UserProfile.objects.get(id=user.id)
    return profile.user_secret
