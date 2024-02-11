from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),

    #crops
    path('crop/create', views.create_crop, name='create_crop'),
    path('crop/get', views.get_crops, name='get_crops'),

    #profile
    path('profile/get_current', views.get_profile, name='get_profile'),
    path('profile/update', views.update_profile, name='update_profile'),
]
