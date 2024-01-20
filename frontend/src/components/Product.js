import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

function Product(props){
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
                        <button className="btn btn-success btn-lg">Add to Cart</button>
                        <button className="btn btn-danger btn-lg ms-2">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;