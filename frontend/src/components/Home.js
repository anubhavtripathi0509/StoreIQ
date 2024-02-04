import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';
import SingleCategory from './SingleCategory';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

function Home() {
  const {product_slug,product_id} = useParams();
  const baseUrl= 'http://127.0.0.1:8000/api';
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchData(baseUrl+'/products/'+product_id);
  },[]);

  async function fetchData(baseurl) {
    fetch(baseurl)
    .then(response => response.json())
    .then(data => setProductData(data));
  }

  const products = [
    {title: 'Django', price: 200},
    {title: 'Django', price: 200},
    {title: 'Django', price: 200},
    {title: 'Django', price: 200},
  ];
    return (
        <main>
        <div className="mt-4">
          <div className="container">
            {/* Latest Products */}
            <h3 className="mb-4">Latest Products <Link to="/products" className='float-end btn btn-dark'>View All Products <i className="fa-solid fa-arrow-right-long"></i></Link> </h3>
            <div className="row mb-4">
              {
                products.map((product)=> <SingleProduct product={product}/>)
              }
            </div>
            {/* End Latest Products */}

            {/* Popular Categories */}
            <h3 className="mb-4">Popular Categories <a href="#" className='float-end btn btn-dark'>View All Categories <i className="fa-solid fa-arrow-right-long"></i></a> </h3>
            <div className="row mb-4">
              {/* <SingleCategory title="Python"/>
              <SingleCategory title="Python"/>
              <SingleCategory title="Python"/>
              <SingleCategory title="Python"/> */}
            </div>
            {/* End Popular Categories */}

            {/* Popular Products */}
            <h3 className="mb-4">Popular Products <a href="#" className='float-end btn btn-dark'>View All Products <i className="fa-solid fa-arrow-right-long"></i></a> </h3>
            <div className="row mb-4">
              {
                products.map((product)=> <SingleProduct product={product}/>)
              }
            </div>
            {/* End Popular Products */}
            
            {/* Popular Seller */}
            <h3 className="mb-4">Popular Sellers <a href="#" className='float-end btn btn-dark'>View All Sellers <i className="fa-solid fa-arrow-right-long"></i></a> </h3>
            <div className="row mb-4">
              {/* Seller Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Seller title</h4>
                  </div>

                  <div className="card-footer">
                    Categories: <a href="#" className="badge bg-success">Category 1</a> <a href="#" className="badge bg-success">Category 2</a>
                  </div>
                </div>
              </div>
              {/* Seller Box End */}

              {/* Seller Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Seller title</h4>
                  </div>

                  <div className="card-footer">
                    Categories: <a href="#" className="badge bg-success">Category 1</a> <a href="#" className="badge bg-success">Category 2</a>
                  </div>
                </div>
              </div>
              {/* Seller Box End */}

              {/* Seller Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Seller title</h4>
                  </div>

                  <div className="card-footer">
                    Categories: <a href="#" className="badge bg-success">Category 1</a> <a href="#" className="badge bg-success">Category 2</a>
                  </div>
                </div>
              </div>
              {/* Seller Box End */}

              {/* Seller Box */}
              <div className="col-12 col-md-3 mb-4">
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">Seller title</h4>
                  </div>

                  <div className="card-footer">
                    Categories: <a href="#" className="badge bg-success">Category 1</a> <a href="#" className="badge bg-success">Category 2</a>
                  </div>
                </div>
              </div>
              {/* Seller Box End */}
            </div>
            {/* End Popular Sellers */}
            
            {/* Rating and Reviews */}
              <div id="carouselExample" className="carousel slide my-4 border bg-dark text-white p-5">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <cite title="Source Title">Customer Name</cite>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="carousel-item">
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <cite title="Source Title">Customer Name</cite>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="carousel-item">
                    <figure className="text-center">
                      <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                      </blockquote>
                      <figcaption className="blockquote-footer">
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <cite title="Source Title">Customer Name</cite>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            {/* End Rating and Reviews */}
          </div>
        </div>
      </main>
    );
}
    
export default Home;