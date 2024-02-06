# models.py
from django.db import models

class Advertisement(models.Model):
    image = models.ImageField(upload_to='ads/')
    url = models.URLField()
    duration = models.IntegerField()
    
    def __str__(self):
        return self.image.name
