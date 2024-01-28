import React, { Profiler } from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./Sidebar";

function SellerProfile(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar />
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <div className="card-header">
                            <h4>Update Profile</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row mb-2">
                                    <div className="col-md-6">
                                        <label htmlFor="first_name" className="form-label">First Name</label>
                                        <input type="text" className="form-control mb-3" id="first_name" name="first_name" />
                                        <label htmlFor="last_name" className="form-label">Last Name</label>
                                        <input type="text" className="form-control mb-3" id="last_name" name="last_name" />
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control mb-3" id="username" name="username" />
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control mb-3" id="email" name="email" />
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerProfile;