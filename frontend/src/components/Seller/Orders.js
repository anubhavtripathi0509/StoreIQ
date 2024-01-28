import React from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./Sidebar";
import logo from '../../logo.svg';

function SellerOrders(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar />
                <div className="col-md-7 col-12 mb-2">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src={logo} alt="Product" width="50" height="50" />
                                            <Link to="/products/1/django">Django</Link>
                                        </td>
                                        <td>500</td>
                                        <td><span className="text-success"><i className="fa fa-check-circle me-1"></i>Delivered</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Approve</a></li>
                                                    <li><a className="dropdown-item" href="#">Delivered</a></li>
                                                    <li><a className="dropdown-item" href="#">Cancelled</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerOrders;