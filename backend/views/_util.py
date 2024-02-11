import json
import jwt
from ..models import User

def get_user_and_data(req):
    """
    Get data from the request. This returns user details and form fields.
    """
    data = json.loads(req.body)
    user, created = User.objects.get_or_create(email=data['email'])
    if created:
        user.name = data['name']
        user.email = data['email']
        user.save()
    return user, data

def get_user_and_data_by_id(req):
    """
    Get data from the request. This returns user details and form fields.
    """
    data = json.loads(req.body)
    user, created = User.objects.get_or_create(id=data['id'])
    if created:
        user.name = data['name']
        user.email = data['email']
        user.save()
    return user, data