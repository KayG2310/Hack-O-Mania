from django.db import models

class User(models.Model):
    """
    A user of the Farmcom platform.
    """
    username = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    owned_crops = models.ManyToManyField('Crop', related_name='ownership')
    #More to be added (Depends on frontend form)

class Crop(models.Model):
    """
    A user's crop
    """
    name = models.CharField(max_length=100)
    owner = models.ManyToManyField('User', related_name='ownership')
    #More to be added (Depends on frontend form)