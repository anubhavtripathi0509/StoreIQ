import React from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./Sidebar";

function SellerProducts(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar/>
                <div className="col-md-9 col-12 mb-2">
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
                                        <Link>View</Link>
                                        <Link>Edit</Link>
                                        <Link>Delete</Link>
                                    </td>
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