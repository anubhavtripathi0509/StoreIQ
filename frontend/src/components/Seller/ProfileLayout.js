import React from "react";
import SellerSidebar from "./Sidebar";

function ProfileLayout() {
    return (
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar/>
                <div className="col-md-9 col-12 mb-2">

                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;
