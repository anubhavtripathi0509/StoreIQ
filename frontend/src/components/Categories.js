import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SingleCategory from './SingleCategory';

function Categories() {
  const baseUrl= 'http://127.0.0.1:8000/api';
  const [categories, setCategories] = useState([]);
  const [totalResult, setTotalResults] = useState(0);
  // const [baseurl, setbaseurl] = useState('http://127.0.0.1:8000/api/products/');

  useEffect(() => {
    fetchData(baseUrl+'/categories/');
  },[]);

  async function fetchData(baseurl) {
    try {
      const response = await fetch(baseurl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data.results);
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
    links.push(<li className='page-item'><Link onClick={()=>changeUrl(baseUrl+`/categories/?page=${i}`)} to={`/categories/?page=${i}`} className='page-link'>{i}</Link></li>)
  }

    return (
      /* Popular Categories */
      <div className="row m-4">
        <h3 className="mb-4">All Categories</h3>
        <div className="row mb-4">
              {
                categories.map((category)=> <SingleCategory category={category}/>)
              }
        </div>

            {/* Pagination */}
            <nav aria-label="...">
                <ul class="pagination">
                  {links}
                </ul>
            </nav>
      </div>
      
      /* End Popular Categories */
    );
  }
  
  export default Categories;
  