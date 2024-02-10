import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import ProductDetail from './components/ProductDetail';
import AllProducts from './components/AllProducts';
import Checkout from './components/Checkout';
import TagProducts from './components/TagProducts';

// Customer Panel
import Registration from './components/Customer/Registration';
import Login from './components/Customer/Login';
import Dashboard from './components/Customer/Dashboard';
import Orders from './components/Customer/Orders';
import OrderSuccess from './components/Customer/OrderSucces';
import Wishlist from './components/Customer/Wishlist';
import Profile from './components/Customer/Profile';
import ChangePassword from './components/Customer/ChangePassword';
import Address from './components/Customer/Address';
import AddAddress from './components/Customer/AddAddress';
import Logout from './components/Customer/Logout';

// Seller Panel
import SellerRegistration from './components/Seller/Registration';
import SellerLogin from './components/Seller/Login';
import SellerDashboard from './components/Seller/Dashboard';
import SellerProducts from './components/Seller/SellerProducts';
import AddProduct from './components/Seller/AddProduct';
import SellerOrders from './components/Seller/Orders';
import Customers from './components/Seller/Customers';
import SellerReports from './components/Seller/Reports';
import SellerProfile from './components/Seller/Profile';
import SellerChangePassword from './components/Seller/ChangePassword';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
          <Route path='/category/:tag' element={<TagProducts/>}/>
          <Route path='/products/:product_slug/:product_id' element={<ProductDetail/>}/>
          <Route path='/checkout' element={<Checkout/>}/>

          {/* Customer Panel */}
          <Route path='/customer-register' element={<Registration/>}/>
          <Route path='/customer-login' element={<Login/>}/>
          <Route path='/customer-logout' element={<Logout/>}/>
          <Route path='/customer-dashboard' element={<Dashboard/>}/>
          <Route path='/customer-orders' element={<Orders/>}/>
          <Route path='/order/success' element={<OrderSuccess/>}/>
          <Route path='/customer-wishlist' element={<Wishlist/>}/>
          <Route path='/customer-profile' element={<Profile/>}/>
          <Route path='/customer-change-password' element={<ChangePassword/>}/>
          <Route path='/customer-address' element={<Address/>}/>
          <Route path='/customer-add-address' element={<AddAddress/>}/>

          {/* Seller Panel */}
          <Route path='/seller-register' element={<SellerRegistration/>}/>
          <Route path='/seller-login' element={<SellerLogin/>}/>
          <Route path='/seller-dashboard' element={<SellerDashboard/>}/>
          <Route path='/seller/totalproducts' element={<SellerProducts/>}/>
          <Route path='/seller/addproducts' element={<AddProduct/>}/>
          <Route path='/seller-orders' element={<SellerOrders/>}/>
          <Route path='/seller/totalcustomers' element={<Customers/>}/>
          <Route path='/seller-reports' element={<SellerReports/>}/>
          <Route path='/seller-profile' element={<SellerProfile/>}/>
          <Route path='/seller-change-password' element={<SellerChangePassword/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
