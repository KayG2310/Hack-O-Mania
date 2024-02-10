from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from ..models import Crop
from ._util import get_user_and_data

@csrf_exempt
def create_crop(req):
    """
    Create a new crop
    """
    user, data = get_user_and_data(req)
    if user is None:
        return JsonResponse({'message':"User Unauthorized"}, status=403)
    crop = Crop.objects.create(
        name = data['name'],
        #More to be added (Depends on frontend form)
    )
    crop.owner.set([user])
    crop.save()

    user.owned_crops.add(crop)
    user.save()

    return JsonResponse({'message': "Crop added succesfully"})