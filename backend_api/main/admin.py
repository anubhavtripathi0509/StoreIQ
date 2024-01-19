from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Vendor)
admin.site.register(ProductCategory)
admin.site.register(Product)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItems)
