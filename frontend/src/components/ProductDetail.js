import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import SingleProduct from "./SingleProduct";

function ProductDetail(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div id="relatedThumbnailSliders" className="carousel carousel-dark slide mt-4" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={logo} className="img-thumbnail mb-5" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h3>{props.title}</h3>
                    <h5 className="text-muted">Price: Rs.500</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.</p>
                    <div className="d-flex">
                        <Link title="Demo" target="blank" className="btn btn-dark ms-2"><i className="fa-solid fa-cart-plus fa-1x me-2"></i>Demo</Link>
                        <button title="Add to Cart" className="btn btn-primary ms-2"><i className="fa-solid fa-cart-plus fa-1x me-2"></i>Add to Cart</button>
                        <button title="Buy Now" className="btn btn-success ms-2"><i className="fa-solid fa-bag-shopping me-2"></i>Buy Now</button>
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

            {/* Related Products */}
            <h3 className="mt-5 mb-3">Related Products</h3>
            <div id="relatedThumbnailSliders" className="carousel carousel-dark slide mt-4" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img src={logo} className="d-block w-100" alt="..."/> */}
                        <div className="row mb-5">
                            <SingleProduct title="Django"/>
                            <SingleProduct title="Django"/>
                            <SingleProduct title="Django"/>
                            <SingleProduct title="Django"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={logo} className="d-block w-100" alt="..."/> */}
                        <div className="row mb-5">
                            <SingleProduct title="Django"/>
                            <SingleProduct title="Django"/>
                            <SingleProduct title="Django"/>
                            <SingleProduct title="Django"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={logo} className="d-block w-100" alt="..."/> */}
                        <div className="row mb-5">
                            <SingleProduct title="Django"/>
                            <SingleProduct title="Django"/>
                            <SingleProduct title="Django"/>
                            <SingleProduct title="Django"/>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
            {/* End Related Products */}
        </div>
    );
}

export default ProductDetail;