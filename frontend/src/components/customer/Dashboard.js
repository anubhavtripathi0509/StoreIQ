import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <Sidebar/>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        {/* Total Orders */}
                        <div className="col-md-4 mb-2">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Total Orders</h4>
                                    <p className="card-text">0</p>
                                    <Link to="/customer-orders" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>

                        {/* Total Wishlist */}
                        <div className="col-md-4 mb-2">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Total Wishlist</h4>
                                    <p className="card-text">0</p>
                                    <Link to="/customer-wishlist" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>

                        {/* Total Address */}
                        <div className="col-md-4 mb-2">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Total Address</h4>
                                    <p className="card-text">0</p>
                                    <Link to="/customer-address" className="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;