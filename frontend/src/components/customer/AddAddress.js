import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function AddAddress(props){
    return(
        <div className="container mt-4">
            <div className="row">
                <Sidebar/>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <h4 className="card-header">Add Address</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="addaddress" className="form-label">Address</label>
                                    <textarea className="form-control" id="addaddress" />
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

export default AddAddress;