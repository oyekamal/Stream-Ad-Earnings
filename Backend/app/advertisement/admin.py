from django.contrib import admin

from .models import AdvertisementGroup, Advertisement


@admin.register(AdvertisementGroup)
class AdvertisementGroupAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "user",
        "pause_duration",
        "created_at",
        "updated_at",
    )
    list_filter = ("user", "created_at", "updated_at")
    search_fields = ("name",)
    date_hierarchy = "created_at"


@admin.register(Advertisement)
class AdvertisementAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "image",
        "url",
        "duration",
        "user",
        "group",
        "created_at",
        "updated_at",
    )
    list_filter = ("user", "group", "created_at", "updated_at")
    date_hierarchy = "created_at"
