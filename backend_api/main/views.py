from rest_framework import generics,permissions,pagination,viewsets
from django.shortcuts import render
from .serializers import *
from .models import *


# Create your views here.
class VendorList(generics.ListCreateAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    # permission_classes = [permissions.IsAuthenticated]

class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]
    
    # def get_object(self):
    #     return self.request.user.vendor

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = pagination.LimitOffsetPagination

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [permissions.IsAuthenticated]

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductCategory.objects.all()
    serializer_class = CategoryDetailSerializer


class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    # permission_classes = [permissions.IsAuthenticated]

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerDetailSerializer

class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetail(generics.ListAPIView):
    # queryset = Order.objects.all()
    serializer_class = OrderDetailSerializer
    def get_queryset(self):
        order_id=self.kwargs['pk']
        order=Order.objects.get(id=order_id)
        order_items=OrderItems.objects.filter(order=order)
        return order_items

class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerAddressSerializer
    queryset=CustomerAddress.objects.all()
    # def get_queryset(self):
    #     customer_id=self.kwargs['pk']
    #     customer=Order.objects.get(id=order_id)
    #     order_items=OrderItems.objects.filter(order=order)
    #     return order_items

class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class = ProductRatingSerializer
    queryset=ProductRating.objects.all()