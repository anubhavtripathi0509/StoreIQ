import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from '../../logo.svg';

function Orders(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <Sidebar/>
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
                                            <img src={logo} alt="Product" width="50" height="50"/>
                                            <Link to="/products/1/django">Django</Link>
                                        </td>
                                        <td>500</td>
                                        <td><span className="text-success"><i className="fa fa-check-circle me-1"></i>Completed</span></td>
                                        <td><button className="btn btn-primary btn-sm">Download</button></td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <img src={logo} alt="Product" width="50" height="50"/>
                                            <Link to="/products/1/django">Django</Link>
                                        </td>
                                        <td>500</td>
                                        <td><span className="text-secondary"><i className="fa fa-spin fa-spinner me-1"></i>Processing</span></td>
                                        <td><button className="btn btn-primary btn-sm">Download</button></td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <img src={logo} alt="Product" width="50" height="50"/>
                                            <Link to="/products/1/django">Django</Link>
                                        </td>
                                        <td>500</td>
                                        <td><span className="text-danger"><i className="fa fa-times-circle me-1"></i>Cancelled</span></td>
                                        <td><button className="btn btn-primary btn-sm">Download</button></td>
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

export default Orders;