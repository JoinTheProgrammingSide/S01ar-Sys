from django.db import models
from django.db.models.fields import CharField, IntegerField


class MeasurementConvertModel(models.Model):
    from_unit = CharField(max_length=20, unique=False)
    to_unit = CharField(max_length=20, unique=False)
    amount = IntegerField(null=False)


class NotePadModel(models.Model):
    type = CharField(max_length=10, unique=False, null=False)
    title = CharField(max_length=20, unique=False, null=True)
    message = CharField(max_length=100, unique=False, null=True)
