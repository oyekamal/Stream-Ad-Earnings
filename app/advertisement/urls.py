# urls.py

from django.urls import path
from . import views

app_name = "advertisment"


urlpatterns = [
    path(
        "ads/", views.show_ads, name="show_ads"
    ),  # Add other URL patterns for your app if needed
    path("data_ads/", views.data_ads, name="data_ads"),
]
