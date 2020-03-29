from django.contrib import admin
from django.urls import path
from graphene_django.views import GraphQLView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graph/', csrf_exempt(GraphQLView.as_view(graphiql=True)))
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT)


urlpatterns += staticfiles_urlpatterns()
