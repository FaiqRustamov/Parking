from rest_framework import serializers
from .models import *

class placeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'
