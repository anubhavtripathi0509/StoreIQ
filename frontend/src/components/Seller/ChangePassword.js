import React, { Profiler } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function SellerChangePassword(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <Sidebar />
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <div className="card-header">
                            <h4>Change Password</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row mb-2">
                                    <div className="col-md-6">
                                        <label htmlFor="pwd" className="form-label">New Password</label>
                                        <input type="text" className="form-control mb-3" id="pwd" name="pwd" />
                                        <label htmlFor="confirmpwd" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control mb-3" id="confirmpwd" name="confirmpwd" />
                                        <button type="submit" className="btn btn-primary">Submit</button>
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

export default SellerChangePassword;