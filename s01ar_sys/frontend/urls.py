from django.urls import path
from .views import *

urlpatterns = [
    path('', index.as_view()),
    path('pwd', pwd_manager.as_view(), name="pwd_manager"),
]
