from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

   
router = DefaultRouter()
router.register('map', MapViewSet, basename='map')
router.register('sprite', SpriteViewSet, basename='sprite')
router.register('token', TokenViewSet, basename='token')
router.register('session', SessionViewSet, basename='session')
    
    
urlpatterns = [
 
    path('', include(router.urls)),
    #path('articles/', ArticleList.as_view()),
    #path('articles/<int:id>/', ArticleDetails.as_view())
    
]