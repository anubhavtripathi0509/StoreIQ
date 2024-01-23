import React from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./Sidebar";

function SellerDashboard(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar/>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        {/* Total Orders */}
                        <div className="col-md-4 mb-2">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Total Orders</h4>
                                    <p className="card-text">0</p>
                                    <Link to="/seller-orders" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>

                        {/* Total Wishlist */}
                        <div className="col-md-4 mb-2">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Total Customers</h4>
                                    <p className="card-text">0</p>
                                    <Link to="/seller/totalcustomers" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>

                        {/* Total Address */}
                        <div className="col-md-4 mb-2">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Total Products</h4>
                                    <p className="card-text">0</p>
                                    <Link to="/seller/totalproducts" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerDashboard;