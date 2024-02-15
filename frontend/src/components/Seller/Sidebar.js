import React from "react";
import { Link } from "react-router-dom";

function SellerSidebar(props){
    return(
        <div className="col-md-3 col-12 mb-2">
            <div className="list-group">
                <Link to="/seller-dashboard" className="list-group-item list-group-item-action" aria-current="true">Dashboard</Link>
                <Link to="/seller-orders" className="list-group-item list-group-item-action">Orders</Link>
                <Link to="/seller/totalcustomers" className="list-group-item list-group-item-action">Customers</Link>
                <Link to="/seller/totalproducts" className="list-group-item list-group-item-action">Products</Link>
                <Link to="/seller/addproducts" className="list-group-item list-group-item-action">Add Products</Link>
                <Link to="/seller-reports" className="list-group-item list-group-item-action">Reports</Link>
                <Link to="/seller-profile" className="list-group-item list-group-item-action">Profile</Link>
                <Link to="/seller-change-password" className="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/seller-logout" className="list-group-item list-group-item-action text-danger">Logout</Link>
                {/* <Link className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</Link> */}
            </div>
        </div>
    );
}

export default SellerSidebar;