from rest_framework import serializers
from .models import Advertisement, AdvertisementGroup

# Serializer for the Advertisement model
class AdvertisementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advertisement  # Specifies the model to serialize
        fields = "__all__"  # Includes all fields from the Advertisement model in the serialization

# Serializer for the AdvertisementGroup model
class AdvertisementGroupSerializer(serializers.ModelSerializer):
    # Custom field to include related advertisements
    advertisement = serializers.SerializerMethodField()

    # Method to get advertisements related to a specific AdvertisementGroup instance
    def get_advertisement(self, obj):
        ads = Advertisement.objects.filter(group=obj)  # Query to get all advertisements belonging to the group
        serializer = AdvertisementSerializer(ads, many=True)  # Serialize the list of advertisements
        return serializer.data  # Return the serialized data

    class Meta:
        model = AdvertisementGroup  # Specifies the model to serialize
        fields = "__all__"  # Includes all fields from the AdvertisementGroup model in the serialization