# views.py
from django.shortcuts import render
from .models import Advertisement

def show_ads(request):
    ads = Advertisement.objects.all()
    return render(request, 'advertisment/ads.html', {'ads': ads})
