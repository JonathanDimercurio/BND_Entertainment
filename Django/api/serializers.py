from rest_framework import serializers
from .models import *

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Map
        fields = ['id', 'session', 'image', 'x_size', 'y_size', 'name']
        
class SpriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sprite
        fields = ['id', 'image', 'name']

class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ['id', 'session', 'current_map', 'sprite', 'x_pos', 'y_pos', 'name']
        
class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ['id', 'name']