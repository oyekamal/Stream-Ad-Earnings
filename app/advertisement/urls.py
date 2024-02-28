# urls.py

from django.urls import path
from . import views

app_name = "advertisment"


urlpatterns = [
    path("", views.display_ads, name="display_ads"),
]
