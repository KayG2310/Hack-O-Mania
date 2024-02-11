from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from ..models import Crop
from ._util import get_user_and_data, get_user_and_data_by_id

@csrf_exempt
def get_profile(req):
    """
    Get user profile
    """
    user, data = get_user_and_data_by_id(req)
    return JsonResponse({'message': 'Success', 'data': {
        'name': user.name,
        'age': user.age,
        'phone': user.phone,
        'district': user.district,
        'state': user.state,
        'area': user.area
    }})

@csrf_exempt
def update_profile(req):
    """
    Update user profile
    """
    user, data = get_user_and_data(req)
    user.name = data.get('name', user.name)
    user.age = data.get('age', user.age)
    user.phone = data.get('phone', user.phone)
    user.district = data.get('district', user.district)
    user.state = data.get('state', user.state)
    user.area = data.get('area', user.area)
    user.save()
    return JsonResponse({'message': 'Success', 'data': {'id': user.id}})