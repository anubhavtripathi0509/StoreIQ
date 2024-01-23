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
import Registration from './components/customer/Registration';
import Login from './components/customer/Login';
import Dashboard from './components/customer/Dashboard';
import Orders from './components/customer/Orders';
import OrderSuccess from './components/customer/OrderSucces';
import Wishlist from './components/customer/Wishlist';
import Profile from './components/customer/Profile';
import ChangePassword from './components/customer/ChangePassword';
import Address from './components/customer/Address';
import AddAddress from './components/customer/AddAddress';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
          <Route path='/products/:product_slug/:product_id' element={<ProductDetail title="Django"/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/customer-register' element={<Registration/>}/>
          <Route path='/customer-login' element={<Login/>}/>
          <Route path='/customer-dashboard' element={<Dashboard/>}/>
          <Route path='/customer-orders' element={<Orders/>}/>
          <Route path='/order/success' element={<OrderSuccess/>}/>
          <Route path='/customer-wishlist' element={<Wishlist/>}/>
          <Route path='/customer-profile' element={<Profile/>}/>
          <Route path='/customer-change-password' element={<ChangePassword/>}/>
          <Route path='/customer-address' element={<Address/>}/>
          <Route path='/customer-add-address' element={<AddAddress/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
