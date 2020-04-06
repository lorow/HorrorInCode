from django.contrib import admin
from django.urls import path
from graphene_django.views import GraphQLView
from django.conf.urls import handler404
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.decorators.csrf import csrf_exempt
from Core.views import RootView


urlpatterns = [
    path('', RootView.as_view()),
    path('admin/', admin.site.urls),
    path('graph/', csrf_exempt(GraphQLView.as_view(graphiql=True)))
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT)

handler404 = RootView.as_view()

urlpatterns += staticfiles_urlpatterns()
