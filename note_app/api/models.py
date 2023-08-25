from django.db import models

# Create your models here.

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    # when auto_now is set to true it will take a time stamp of when we have saved a note
    updated = models.DateTimeField(auto_now=True)
    # auto now add will take the time stamp of the creation not saving 
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.body[0:50]
