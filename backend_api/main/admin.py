from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Vendor)
admin.site.register(ProductCategory)
# admin.site.register(Product)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItems)
admin.site.register(CustomerAddress)
admin.site.register(ProductRating)
admin.site.register(ProductImages)

class ProductImagesInline(admin.StackedInline):
    model = ProductImages

class ProductAdmin(admin.ModelAdmin):
    # prepopulated_fields = {'slug': ('title',)}
    inlines = [ProductImagesInline,]

admin.site.register(Product, ProductAdmin)