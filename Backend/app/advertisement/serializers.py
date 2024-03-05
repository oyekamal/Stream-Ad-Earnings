from rest_framework import serializers
from .models import (
   Advertisement, AdvertisementGroup
)

class AdvertisementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Advertisement
        fields = "__all__"


class AdvertisementGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = AdvertisementGroup
        fields = "__all__"
