from App.models import UserProfile


def get_user_profile_by_id(profile_id: int) -> UserProfile:
    return UserProfile.objects.get(id=profile_id)
