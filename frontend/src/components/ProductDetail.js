import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

function ProductDetail(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={logo} className="img-fluid" alt="..." />
                </div>
                <div className="col-12 col-md-6">
                    <h3>{props.title}</h3>
                    <h5 className="text-muted">Price: Rs.500</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.</p>
                    <div className="d-flex">
                        <Link title="Demo" target="blank" className="btn btn-dark ms-2"><i className="fa-solid fa-cart-plus fa-1x me-2"></i>Demo</Link>
                        <button title="Add to Cart" className="btn btn-primary ms-2"><i className="fa-solid fa-cart-plus fa-1x me-2"></i>Add to Cart</button>
                        <button title="Buy Now" className="btn btn-success ms-2"><i className="fa-solid fa-cart-plus fa-1x  me-2"></i>Buy Now</button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-2"><i className="fa fa-heart fa-1x  me-2"></i>Add to Wishlist</button>
                    </div>
                    <hr />
                    <div className="mt-4">
                    <p className="mt-3">
                    <h5 className="text-muted">Tags:</h5>
                        <Link to="/products" className="badge bg-secondary text-white me-1">Back to Products </Link>
                        <Link to="/products" className="badge bg-secondary text-white me-1">Back to Products </Link>
                        <Link to="/products" className="badge bg-secondary text-white me-1">Back to Products </Link>
                        <Link to="/products" className="badge bg-secondary text-white me-1">Back to Products </Link>
                        <Link to="/products" className="badge bg-secondary text-white me-1">Back to Products </Link>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;