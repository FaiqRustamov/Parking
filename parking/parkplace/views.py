from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import placeSerializer

class Get_place_List(APIView):
    def get(self, request):
        place = Place.objects.all()
        serialized = placeSerializer(place, many=True)
        return Response(serialized.data)

def index(request):
    return render (request, 'index.html',{'list':list})

def brone(request):
    return render (request, 'brone.html')

def full(request):
    return render (request, 'full.html')

