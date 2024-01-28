import React from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./Sidebar";
import logo from '../../logo.svg';

function Customers(props) {
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
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img src={logo} alt="Product" width="50" height="50" />
                                            <Link to="/products/1/django">John</Link>
                                        </td>
                                        <td>john@gmail.com</td>
                                        <td><span>9123456789</span></td>
                                        <td>
                                            <button className="btn btn-danger btn-sm ms-2 mb-2">Delete</button>
                                            <button className="btn btn-primary btn-sm ms-2 mb-2">Edit</button>
                                            <button className="btn btn-success btn-sm ms-2 mb-2">View</button>
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

export default Customers;