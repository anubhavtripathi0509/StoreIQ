from django.db import models
from django.contrib.auth.models import User


# Vendor Models
class Vendor(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    address=models.TextField(null=True)

    def __str__(self):
        return self.user.username


# Product Category Models
class ProductCategory(models.Model):
    title=models.CharField(max_length=200)
    details=models.TextField(null=True)

    def __str__(self):
        return self.title
    
# Products
class Product(models.Model):
    category=models.ForeignKey(ProductCategory,on_delete=models.SET_NULL,null=True,related_name='category_products')
    vendor = models.ForeignKey(Vendor,on_delete=models.SET_NULL,null=True)
    title=models.CharField(max_length=200)
    slug=models.CharField(max_length=200, unique=True, null=True)
    details=models.TextField(null=True)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    usd_price=models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    tags=models.TextField(null=True)
    image=models.ImageField(upload_to='product_images', null=True)
    demo_url=models.URLField(null=True, blank=True)
    # product_file=models.FileField(upload_to='product_files/', null=True, blank=True)
    status=models.BooleanField(default=True)

    def __str__(self):
        return self.title
    
    def tag_list(self):
        if self.tags:
            taglist = self.tags.split(',')
            return taglist
        else:
            return []
    

# Customer Model
class Customer(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    mobile=models.PositiveBigIntegerField(unique=True)

    def __str__(self):
        return self.user.username


# Order Model
class Order(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE)
    # product=models.ForeignKey(Product,on_delete=models.CASCADE,on_delete=models.SET_NULL,null=True)
    order_time=models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return self.product.title
    

class OrderItems(models.Model):
    order=models.ForeignKey(Order,on_delete=models.CASCADE,related_name='order_items')
    product=models.ForeignKey(Product,on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title
    
# Customer Address Model
class CustomerAddress(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='customer_address')
    address=models.TextField()
    default_address=models.BooleanField(default=False)

    def __str__(self):
        return self.address
    

# Product Rating and Review Model
class ProductRating(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE,related_name='product_ratings')
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='customer_ratings')
    rating=models.IntegerField()
    reviews=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'
    


# Product Images Model
class ProductImages(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE,related_name='product_images')
    image=models.ImageField(upload_to='product_images', null=True)

    def __str__(self):
        return self.image.url