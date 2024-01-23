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
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
