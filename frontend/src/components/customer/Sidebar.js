import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props){
    return(
        <div className="col-md-3 col-12 mb-2">
            <div className="list-group">
                <Link to="/customer-dashboard" className="list-group-item list-group-item-action" aria-current="true">Dashboard</Link>
                <Link to="/customer-orders" className="list-group-item list-group-item-action">Orders</Link>
                <Link to="/customer-wishlist" className="list-group-item list-group-item-action">Wishlist</Link>
                <Link to="/customer-address" className="list-group-item list-group-item-action">Address</Link>
                <Link to="/customer-change-password" className="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/customer-profile" className="list-group-item list-group-item-action">Profile</Link>
                <Link to="#" className="list-group-item list-group-item-action text-danger">Logout</Link>
                {/* <Link className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</Link> */}
            </div>
        </div>
    );
}

export default Sidebar;