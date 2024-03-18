from django.db import models
from django.conf import settings


class AdvertisementGroup(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )  # Link to User model
    pause_duration = models.IntegerField(default=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["created_at"]  # or any other field you prefer

    def __str__(self):
        return self.name


class Advertisement(models.Model):
    image = models.ImageField(upload_to="ads/")
    url = models.URLField()
    duration = models.IntegerField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True
    )  # Link to User model
    group = models.ForeignKey(
        AdvertisementGroup,
        on_delete=models.CASCADE,
        related_name="ads",
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.image.name
