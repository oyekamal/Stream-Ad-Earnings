# views.py
from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from datetime import datetime
from rest_framework import generics, mixins

from .models import (
   Advertisement, AdvertisementGroup
)
from .serializers import (
    AdvertisementSerializer, AdvertisementGroupSerializer
)
from rest_framework import filters
from django_filters import rest_framework as drf_filters
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters

class PageNumberPaginationCustom(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 1000


class LimitOffsetPaginationCustom(LimitOffsetPagination):
    default_limit = 10
    limit_query_param = "limit"
    offset_query_param = "offset"
    max_limit = 1000


class AdvertisementViewSet(ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Advertisement.objects.all()
    serializer_class = AdvertisementSerializer
    filter_backends = [filters.SearchFilter, drf_filters.DjangoFilterBackend]
    filterset_fields = ["group", "user"]
    search_fields = ["group", "user"]


class AdvertisementGroupViewSet(ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = AdvertisementGroup.objects.all()
    pagination_class = PageNumberPaginationCustom
    serializer_class = AdvertisementGroupSerializer
    filter_backends = [filters.SearchFilter, drf_filters.DjangoFilterBackend]
    filterset_fields = ["name", "user"]
    search_fields = ["name", "user"]

def display_ads(request):
    current_time = datetime.now().time()
    ads = Advertisement.objects.all()  # Filter active ads based on current minute
    context = {"ads": ads}
    return render(request, "advertisment/new_ads.html", context)
