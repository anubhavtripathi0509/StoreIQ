import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

function Checkout(props){
    return(
        <div className="container mt-4">
            <h3 className="mb-4">All Items (1)</h3>
            <div className="row">
                <div className="col-md-8 col-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Link to=""><img src={logo} className="img-thumbnail mb-5" width='80' alt="..."/></Link>
                                        <Link><p>Django</p></Link>
                                    </td>
                                    <td>1</td>
                                    <td>500</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    {/* <th></th> */}
                                    <th colSpan="3" className="text-right">Total</th>
                                    <th>500</th>
                                </tr>
                                <tr>
                                <td></td>
                                    <td colSpan="3" align="right">
                                        <Link to="/categories"><button className="btn btn-secondary float-right">Continue Shopping</button></Link>
                                        <Link to="/"><button className="btn btn-success float-right ms-1">Proceed To Payment</button></Link>
                                    </td>
                                    
                                </tr>
                            </tfoot>
                        </table> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;