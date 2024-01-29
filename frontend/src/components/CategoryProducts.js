import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SingleProduct from './SingleProduct';

function CategoryProducts() {
  return (
    <div className="container mt-4">
      {/* Latest Products */}
      <h3 className="mb-4"><span className='text-success'>Python </span>Products <Link to="/products" className='float-end btn btn-dark'>View All Products <i className="fa-solid fa-arrow-right-long"></i></Link> </h3>
            <div className="row mb-4">
              <SingleProduct title="Django"/>
              <SingleProduct title="Django"/>
              <SingleProduct title="Django"/>
              <SingleProduct title="Django"/>
              <SingleProduct title="Django"/>
              <SingleProduct title="Django"/>
              <SingleProduct title="Django"/>
              <SingleProduct title="Django"/>
            </div>

            {/* Pagination */}
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                    <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
    </div>
  );
}

export default CategoryProducts;