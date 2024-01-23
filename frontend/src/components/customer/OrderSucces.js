import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess(props){
    return(
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Order ID</th>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th>Amount</th>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>Transaction ID</th>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th>Products</th>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td><span className="text-success"><i className="fa fa-check-circle me-1"></i>Completed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;