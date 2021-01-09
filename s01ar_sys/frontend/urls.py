from django.urls import path
from .views import *

urlpatterns = [
    path('', index.as_view()),
    path('pwd', pwd_manager.as_view(), name="pwd_manager"),
    path('measurement', measurement_converter.as_view(),
         name="measurement_conversion")
]
