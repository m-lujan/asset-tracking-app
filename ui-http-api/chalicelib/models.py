from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, NumberAttribute
import os

class UserModel(Model):
    class Meta:
        table_name = os.environ.get('DYNAMODB_TABLE')
        region = os.environ.get('AWS_REGION')
    userId = UnicodeAttribute(hash_key=True)
    email = UnicodeAttribute()
    role = UnicodeAttribute()
    createdAt = NumberAttribute()
    updatedAt = NumberAttribute()