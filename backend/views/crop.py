from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from ..models import Crop
from ._util import get_user_and_data
from collections import Counter

@csrf_exempt
def create_crop(req):
    """
    Create a new crop
    """
    user, data = get_user_and_data(req)
    if user is None:
        return JsonResponse({'message':"User Unauthorized"}, status=403)
    
    month = ['January','February','March','April','May','June','July','August','September','October','November','December'][int(data['cycle'].split('-')[1])]

    crop = Crop.objects.create(
        name = data['name'].strip().lower(),
        district = data['district'].strip().lower(),
        state = data['state'].strip().lower(),
        cycle = month
    )
    crop.owner.set([user])
    crop.save()

    user.owned_crops.add(crop)
    user.save()

    return JsonResponse({'message': "Crop added succesfully"})

@csrf_exempt
def get_crops(req):
    """
    Get Crops filter
    """
    # {'Crop Name': ['Rice'], 'State': [], 'Month Planted': ['January', 'February']}

    data = json.loads(req.body)
    crops = Crop.objects.all().values()

    cropnames = [x.lower() for x in data['Crop Name']]
    states = [x.lower() for x in data['State']]
    months = data['Month Planted']
    print(cropnames, states, months)

    x = []
    for crop in crops:
        print(crop)
        if crop['name'] in cropnames and crop['cycle'] in months and crop['state'] in states:
            x.append(crop['name']+','+crop['state']+','+crop['cycle'])
    c = Counter(x).items()
    
    toSend = []
    sno = 1
    for data,count in c:
        d = data.split(',')
        x = {'S. No.': sno, 'crop': d[0], 'state': d[1], 'cycle': d[2], 'count': str(count)}
        toSend.append(x)
        sno += 1
        
    return JsonResponse({'message': 'Success', 'data': toSend})