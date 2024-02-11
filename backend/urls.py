from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),

    #profile
    path('profile/get_current', views.get_profile, name='get_profile'),
    path('profile/update', views.update_profile, name='update_profile'),
]
