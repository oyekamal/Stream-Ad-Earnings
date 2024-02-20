# views.py
from django.shortcuts import render
from django.http import JsonResponse
from .models import Advertisement
from django.conf import settings

def show_ads(request):
    ads = list(Advertisement.objects.values())
    return render(request, 'advertisment/ads.html', {'ads': ads})


def data_ads(request):
    ads = list(Advertisement.objects.values())
    for ad in ads:
        ad["full_image_url"] = request.build_absolute_uri(settings.MEDIA_URL + ad['image'])
    return JsonResponse(ads, safe=False)
