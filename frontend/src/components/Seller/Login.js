import React from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

function SellerLogin(props){
    return(
        <div className="container mt-4">
            {/* <h3 className="mb-4">Register</h3> */}
            <div className="row">
                <div className="col-md-8 col-12">
                    <div className="card">
                        <h4 className="card-header">Login</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username"/>
                                </div>
                                <div className="mb-3">
                                    <label for="pwd" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="pwd"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerLogin;