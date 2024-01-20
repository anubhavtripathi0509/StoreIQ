import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
