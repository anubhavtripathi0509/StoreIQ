import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from '../../logo.svg';

function Wishlist(props) {
    return (
        <div className="container mt-4">
            <div className="row">
                <Sidebar />
                <div className="col-md-7 col-12 mb-2">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Products</th>
                                        <th>Price</th>
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
                                        <td><button className="btn btn-danger btn-sm">Remove</button></td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <img src={logo} alt="Product" width="50" height="50" />
                                            <Link to="/products/1/django">Django</Link>
                                        </td>
                                        <td>500</td>
                                        <td><button className="btn btn-danger btn-sm">Remove</button></td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <img src={logo} alt="Product" width="50" height="50" />
                                            <Link to="/products/1/django">Django</Link>
                                        </td>
                                        <td>500</td>
                                        <td><button className="btn btn-danger btn-sm">Remove</button></td>
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

export default Wishlist;