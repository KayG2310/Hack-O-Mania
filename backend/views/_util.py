import json
import jwt
from ..models import User

def get_user_and_data(req):
    """
    Get data from the request. This returns user details and form fields.
    """
    data = json.loads(req.body)
    user_data = jwt.decode(
        data['credential'],
        options={"verify_signature": False},
        algorithms=['RS256']
    )
    del data['credential']
    user, created = User.objects.get_or_create(email=user_data['email'])
    if created:
        user.name = user_data['name']
        user.username = user_data['email'].split('@')[0]
        user.save()
    return user, data