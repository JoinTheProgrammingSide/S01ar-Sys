from django.db import models
from django.db.models.fields import CharField, IntegerField


class MeasurementConvertModel(models.Model):
    from_unit = CharField(max_length=20, unique=False)
    to_unit = CharField(max_length=20, unique=False)
    amount = CharField(max_length=100, unique=False)
