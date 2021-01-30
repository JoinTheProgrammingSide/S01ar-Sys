from rest_framework import status
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .measurement_conversion.convert import convert
from .notepad.get import get_notes


class MeasurementConvert(APIView):
    serializer_class = MeasurementConvertSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            from_unit = serializer.data.get('from_unit')
            to_unit = serializer.data.get('to_unit')
            amount = serializer.data.get('amount')

            data = convert(from_unit, to_unit, amount)

            try:
                data["Not Found"].exists()
                return Response({"Bad Request": "Invalid unit '{from_unit}-{to_unit}'."}, status=status.HTTP_400_BAD_REQUEST)

            except KeyError:
                return Response(data, status=status.HTTP_200_OK)

        return Response({'Bad Request': 'Invalid data.'}, status=status.HTTP_400_BAD_REQUEST)


class NotePad(APIView):
    serializer_class = NotePadSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            type = serializer.data.get('type')
            title = serializer.data.get('title')
            message = serializer.data.get('messager')

            if type == "get":
                notes = get_notes()
                return Response(notes, status=status.HTTP_200_OK)

            elif type == "save":
                pass
            else:
                return Response({'Bad Request': 'Invalid Type'}, status=status.HTTP_400_BAD_REQUEST)
