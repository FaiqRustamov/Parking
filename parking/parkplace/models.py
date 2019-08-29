from django.db import models

class Place(models.Model):
    number = models.CharField(max_length = 10)
    device_id = models.CharField(max_length = 100)
    status = models.CharField(max_length = 10 , default = 'free')
    bronetime = models.CharField(max_length = 100)

    def __str__(self):
        return f'Parking place {self.number}'
