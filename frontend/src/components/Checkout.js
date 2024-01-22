import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';

function Checkout(props){
    return(
        <div className="container mt-4">
            <h3 className="mb-4">All Items</h3>
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
                </table> 
            </div>
        </div>
    );
}

export default Checkout;