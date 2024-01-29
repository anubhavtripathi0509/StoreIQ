import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import SingleProduct from './SingleProduct';
import {useState, useEffect} from 'react';

function AllProducts() {
  const baseUrl= 'http://127.0.0.1:8000/api';
  const [products, setProducts] = useState([]);
  const [totalResult, setTotalResults] = useState(0);
  // const [baseurl, setbaseurl] = useState('http://127.0.0.1:8000/api/products/');

  useEffect(() => {
    fetchData(baseUrl+'/products/');
  },[]);

  async function fetchData(baseurl) {
    try {
      const response = await fetch(baseurl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.results);
      setTotalResults(data.count);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function changeUrl(baseurl1){
    fetchData(baseurl1);
  }


  var links=[];
  var limit=1;
  var totalLinks = totalResult/limit;
  for(let i=1; i<=totalLinks; i++){
    links.push(<li className='page-item'><Link onClick={()=>changeUrl(baseUrl+`/products/?page=${i}`)} to={`/products/?page=${i}`} className='page-link'>{i}</Link></li>)
  }


  return (
    <div className="container mt-4">
      {/* Latest Products */}
      <h3 className="mb-4"><span className='text-success'>All </span>Products</h3>
            <div className="row mb-4">
              {
                products.map((product)=> <SingleProduct product={product}/>)
              }
              
            </div>

            {/* Pagination */}
            <nav aria-label="...">
                <ul className="pagination">
                    {links}
                </ul>
            </nav>
    </div>
  );
}

export default AllProducts;