from rest_framework import serializers
from .models import (
   Advertisement, AdvertisementGroup
)

class AdvertisementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Advertisement
        fields = "__all__"


class AdvertisementGroupSerializer(serializers.ModelSerializer):
    advertisement = serializers.SerializerMethodField()
    
    def get_advertisement(self, obj):
        ads = Advertisement.objects.filter(group=obj)
        serializer = AdvertisementSerializer(ads, many=True)
        return serializer.data

    class Meta:
        model = AdvertisementGroup
        fields = "__all__"
