from rest_framework import generics,permissions,pagination,viewsets
from rest_framework.pagination import PageNumberPagination
from django.shortcuts import render
from .serializers import *
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User



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

@csrf_exempt
def VendorLogin(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(request, username=username, password=password)
    if user:
        vendor=Vendor.objects.get(user=user)
        msg = {
            'bool':True,
            'user':user.username,
            'id':vendor.id
        }
    else:
        msg={
            'bool':False,
            'msg':'Invalid username or password'
        }
    return JsonResponse(msg)

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        category_id = self.request.GET.get('category', None)

        if category_id is not None:
            try:
                category = ProductCategory.objects.get(id=category_id)
                qs = qs.filter(category=category)
            except ProductCategory.DoesNotExist:
                # Handle the case where the category with the given ID does not exist
                pass

        return qs
    
class ProductImagesList(generics.ListCreateAPIView):
    queryset = ProductImages.objects.all()
    serializer_class = ProductImageSerializer


class TagProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        tag = self.kwargs['tag']
        qs = qs.filter(tags__name=tag)
        return qs
    
class RelatedProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    page_size = 10

    def get_queryset(self):
        qs = super().get_queryset()
        product_id = self.kwargs['pk']
        product = Product.objects.get(id=product_id)
        category = product.category
        qs = qs.filter(category=category).exclude(id=product_id)
        return qs


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


@csrf_exempt
def CustomerLogin(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(request, username=username, password=password)
    if user:
        msg = {
            'bool':True,
            'user':user.username
        }
    else:
        msg={
            'bool':False,
            'msg':'Invalid username or password'
        }
    return JsonResponse(msg)

@csrf_exempt
def CustomerRegister(request):
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    username = request.POST.get('username')
    email = request.POST.get('email')
    mobile = request.POST.get('mobile')
    password = request.POST.get('password')
    # user = authenticate(request, username=username, password=password)
    user = User.objects.create(
        first_name=first_name,
        last_name=last_name,
        email=email,
        # mobile=mobile,
        username=username,
        password=password,
    )
    if user:
        # create customer
        customer=Customer.objects.create(
            user=user,
            mobile=mobile
        )
        msg = {
            'bool':True,
            'user':user.id,
            'customer':customer.id
        }
    else:
        msg={
            'bool':False,
            'msg':'Something went wrong'
        }
    return JsonResponse(msg)

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