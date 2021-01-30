from django.urls import path
from .views import *

urlpatterns = [
    path('measurement-convert', MeasurementConvert.as_view()),
    path('note-pad', NotePad.as_view()),
]