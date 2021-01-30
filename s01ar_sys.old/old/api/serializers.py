from rest_framework import serializers
from .models import *


class MeasurementConvertSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeasurementConvertModel
        fields = ['from_unit', 'to_unit', 'amount']


class NotePadSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotePadModel
        fields = ['type', 'title', 'message']
