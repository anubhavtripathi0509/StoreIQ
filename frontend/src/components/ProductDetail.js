import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import SingleProduct from "./SingleProduct";
import SingleRelatedProduct from "./SingleRelatedProduct";
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

function ProductDetail(props){
    const {product_slug,product_id} = useParams();
    const baseUrl= 'http://127.0.0.1:8000/api';
    const [productData, setProductData] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const [productTags, setProductTags] = useState([]);
    const [relatedProduct, setRelatedProductData] = useState([]);

  useEffect(() => {
    fetchData(`${baseUrl}/product/${product_id}/`);
    fetchRelatedData(`${baseUrl}/related-products/${product_id}/`);
  },[]);

  async function fetchData(baseurl) {
    try {
      const response = await fetch(baseurl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setProductData(data);
      setProductImages(data.product_images);
      setProductTags(data.tag_list);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function fetchRelatedData(baseurl) {
    try {
      const response = await fetch(baseurl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setRelatedProductData(data.results);
    //   setProductImages(data.product_images);
    //   setProductTags(data.tag_list);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const tagsLinks = [];
  for (let i = 0; i < productTags.length; i++) {
    let tag = productTags[i].trim();
    // console.log(tag);
    tagsLinks.push(<Link to={`/products/${tag}`} className="badge bg-secondary text-white me-1"></Link>);
    }
    console.log(tagsLinks);
  



    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div id="relatedThumbnailSliders" className="carousel carousel-dark slide mt-4" data-bs-ride="true">
                        <div className="carousel-indicators">
                            {productImages.map((img, index)=> {
                                if(index === 0){
                                    return <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index+1}`}></button>
                                }else{
                                    return <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to={index} aria-label={`Slide ${index+1}`}></button>
                                }
                            })}
                            {/* <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#relatedThumbnailSliders" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                        </div>
                        <div className="carousel-inner">
                            {productImages.map((img, index)=> {
                                if(index === 0){
                                    return <div className="carousel-item active"> <img src={img.image} className="img-thumbnail mb-5" alt={index}/> </div>
                                }else{
                                    return <div className="carousel-item"> <img src={img.image} className="img-thumbnail mb-5" alt={index}/> </div>
                                }
                            })}
                            {/* <div className="carousel-item active">
                                <img src={logo} className="img-thumbnail mb-5" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="..."/>
                            </div> */}
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
                    <h3>{productData.title}</h3>
                    <h5 className="text-muted">Price: {productData.price}</h5>
                    <p>{productData.details}</p>
                    <div className="d-flex">
                        <a title="Demo" href={productData.demo_url} target="blank" className="btn btn-dark ms-2"><i className="fa-solid fa-cart-plus fa-1x me-2"></i>Demo</a>
                        <button title="Add to Cart" className="btn btn-primary ms-2"><i className="fa-solid fa-cart-plus fa-1x me-2"></i>Add to Cart</button>
                        <button title="Buy Now" className="btn btn-success ms-2"><i className="fa-solid fa-bag-shopping me-2"></i>Buy Now</button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-2"><i className="fa fa-heart fa-1x  me-2"></i>Add to Wishlist</button>
                    </div>
                    <hr />
                    <div className="mt-4">
                    <p className="mt-3">
                    <h5 className="text-muted">Tags:</h5>
                        <Link to="/products" className="badge bg-secondary text-white me-1">{tagsLinks}</Link>
                        {tagsLinks}
                    </p>
                    </div>
                </div>
            </div>


            {/* Related Products */}
                {relatedProduct.length > 0 && (
                    <>
                        <h3 className="mt-5 mb-3 text-center">Related Products</h3>
                        <div id="relatedProductsSliders" className="carousel carousel-dark slide mt-4" data-bs-ride="true">
                            <div className="carousel-indicators">
                                {relatedProduct.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        data-bs-target="#relatedProductsSliders"
                                        data-bs-slide-to={index}
                                        className={index === 0 ? "active" : ""}
                                        aria-current={index === 0 ? "true" : "false"}
                                        aria-label={`Slide ${index + 1}`}
                                    ></button>
                                ))}
                            </div>
                            <div className="carousel-inner">
                                {relatedProduct.map((product, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <div className="row mb-5">
                                            <SingleRelatedProduct product={product} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            {/* End Related Products */}
        </div>
    );
}

export default ProductDetail;