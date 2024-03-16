# urls.py

from django.urls import path
from . import views

app_name = "advertisment"

from django.urls import path, include
from .views import (
    AdvertisementViewSet, AdvertisementGroupViewSet
)
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("ads", AdvertisementViewSet)
router.register("ads_group", AdvertisementGroupViewSet)

urlpatterns = [
    # path("", views.display_ads, name="display_ads"),
    path("", include(router.urls)),

]
