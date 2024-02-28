# views.py
from django.shortcuts import render
from django.http import JsonResponse
from .models import Advertisement
from django.conf import settings
from datetime import datetime


def display_ads(request):
    current_time = datetime.now().time()
    ads = Advertisement.objects.all()  # Filter active ads based on current minute
    context = {"ads": ads}
    return render(request, "advertisment/new_ads.html", context)
