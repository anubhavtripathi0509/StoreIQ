import React, { Profiler } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Address(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <Sidebar />
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="col-12">
                            <Link to="" className="btn btn-outline-success mb-4 float-end">Add Address</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body text-muted">
                                    <p>
                                        <i className="fa fa-check-circle text-success me-2"></i>
                                        123, near Jain mandir, Maharashtra, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body text-muted">
                                    <p>
                                        <button className="btn btn-outline-dark btn-sm me-2">Make Default</button>
                                        123, near Jain mandir, Maharashtra, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body text-muted">
                                    <p>
                                        <button className="btn btn-outline-dark btn-sm me-2">Make Default</button>
                                        123, near Jain mandir, Maharashtra, India
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;