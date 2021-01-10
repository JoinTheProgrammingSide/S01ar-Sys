from django.shortcuts import render
from rest_framework import generics, status
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .measurement_conversion.convert import convert


class MeasurementConvert(APIView):
    serializer_class = MeasurementConvertSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            from_unit = serializer.data.get('from_unit')
            to_unit = serializer.data.get('to_unit')
            amount = serializer.data.get('amount')

            print(from_unit, to_unit, amount)
            data = convert(from_unit, to_unit, amount)

            if data["Not Found"].exists():
                return Response({"Bad Request": "Invalid unit."}, status=status.HTTP_400_BAD_REQUEST)
            return Response(data, status=status.HTTP_200_OK)

        return Response({'Bad Request': 'Invalid data.'}, status=status.HTTP_400_BAD_REQUEST)
