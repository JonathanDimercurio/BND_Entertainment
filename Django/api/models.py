from django.db import models

# Create your models here.

class Session(models.Model):
    name = models.CharField(max_length=100)  
    
    def __str__(self):
        return self.name
    
class Map(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='maps/')
    x_size = models.PositiveIntegerField()
    y_size = models.PositiveIntegerField()
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
    
class Sprite(models.Model):
    image = models.ImageField(upload_to='sprites/')
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
        
class Token(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    current_map = models.ForeignKey(Map, on_delete=models.CASCADE)
    sprite = models.ForeignKey(Sprite, on_delete=models.CASCADE)
    x_pos = models.PositiveIntegerField()
    y_pos = models.PositiveIntegerField()
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name