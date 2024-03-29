from django.contrib import admin
from django.urls import path,include
from . import views
from rest_framework import routers

router=routers.DefaultRouter()
router.register('customeraddress',views.CustomerAddressViewSet)
router.register('productrating',views.ProductRatingViewSet)

urlpatterns = [
    # vendors
    path('vendors/', views.VendorList.as_view(), name='vendor_list'),
    path('vendor/<int:pk>/', views.VendorDetail.as_view(), name='vendor'),
    path('vendor-login/', views.VendorLogin, name='vendor-login'),
    # products
    path('products/', views.ProductList.as_view(), name='product_list'),
    path('products/<str:tag>', views.TagProductList.as_view(), name='tag_product_list'),
    path('product/<int:pk>/', views.ProductDetail.as_view(), name='product'),
    path('related-products/<int:pk>/', views.RelatedProductList.as_view(), name='related-products'),
    path('product-images/', views.ProductImagesList.as_view(), name='product-images'),
    # product categories
    path('categories/', views.CategoryList.as_view(), name='categories_list'),
    path('category/<int:pk>/', views.CategoryDetail.as_view(), name='category'),
    # customers
    path('customers/', views.CustomerList.as_view(), name='customer_list'),
    path('customer/<int:pk>/', views.CustomerDetail.as_view(), name='customer'),
    path('customer-login/', views.CustomerLogin, name='customer-login'),
    path('customer-register/', views.CustomerRegister, name='customer-register'),
    # orders
    path('orders/', views.OrderList.as_view(), name='order_list'),
    path('order/<int:pk>/', views.OrderDetail.as_view(), name='order'),
    
    
]

urlpatterns += router.urls