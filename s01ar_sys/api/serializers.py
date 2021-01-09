from rest_framework import serializers
from .models import MeasurementConvertModel


class MeasurementConvertSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeasurementConvertModel
        fields = ['from_unit', 'to_unit', 'amount']
