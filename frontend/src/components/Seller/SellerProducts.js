import React from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./Sidebar";

function SellerProducts(props){
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
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Product Title</td>
                                    <td>500</td>
                                    <td>Published</td>
                                    <td>
                                        <Link className="btn btn-info mb-2">View</Link>
                                        <Link className="btn btn-primary ms-2 mb-2">Edit</Link>
                                        <Link className="btn btn-danger ms-2 mb-2">Delete</Link>
                                    </td>
                                    {/* <td></td> */}
                                </tr>
                            </tbody>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerProducts;