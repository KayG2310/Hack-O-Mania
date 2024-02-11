from django.db import models

class User(models.Model):
    """
    A user of the Farmcom platform.
    """
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.BigIntegerField(null=True)
    age = models.IntegerField(null=True)
    district = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    area = models.CharField(max_length=100)
    owned_crops = models.ManyToManyField('Crop', related_name='ownership')

class Crop(models.Model):
    """
    A user's crop
    """
    name = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    cycle = models.CharField(max_length=100)
    owner = models.ManyToManyField('User', related_name='ownership')