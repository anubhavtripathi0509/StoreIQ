import React from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./Sidebar";
import { useEffect, useState } from "react";

function SellerProducts(props){
    const baseURL = "http://127.0.0.1:8000/api";
    const seller_id = localStorage.getItem('seller_username');
    const [Productdata, setProductdata] = useState([]);

    useEffect(() => {
        fetchData(baseURL + '/products/');
    }, []);

    function fetchData(baseurl){
        fetch(baseurl)
        .then(response => response.json())
        .then(data => {
            setProductdata(data.results);
        });
    }
    console.log(Productdata);

    return(
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar/>
                <div className="col-md-8 col-12 mb-2">
                    <Link to='/seller/addproducts' className="btn btn-primary mb-2"><i className="fa fa-plus-circle me-1"></i>Add Product</Link>
                    <div className="table-responsive">
                        <div className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>USD Price</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    Productdata.map((product, index) => 
                                        <tr>
                                            <td>{product.id}</td>
                                            <td><Link to={`/seller/updateproducts/${product.id}`}>{product.title}</Link></td>
                                            <td>&#8377;{product.price}</td>
                                            <td>${product.usd_price}</td>
                                            <td>
                                                {
                                                    !product.status && 'Pending'
                                                }
                                                {
                                                    product.status && <span className="text-success">Published</span>
                                                }
                                            </td>
                                            <td>
                                                <Link className="btn btn-info mb-2">View</Link>
                                                <Link className="btn btn-primary ms-2 mb-2">Edit</Link>
                                                <Link className="btn btn-danger ms-2 mb-2">Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerProducts;