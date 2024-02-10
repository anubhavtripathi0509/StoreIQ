import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login(props){
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: ""
    });

    const inputHandler = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        })
    };

    const submitHandler = (e) => {
        // e.preventDefault();
        const formData = new FormData();
        formData.append("username", loginFormData.username);
        formData.append("password", loginFormData.password);
        console.log(formData);
    };

    // console.log(loginFormData);

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
                                    <input type="text" name="username" value={loginFormData.username} onChange={inputHandler} className="form-control" id="username"/>
                                </div>
                                <div className="mb-3">
                                    <label for="pwd" className="form-label">Password</label>
                                    <input type="password" name="password" value={loginFormData.password} onChange={inputHandler} className="form-control" id="pwd"/>
                                </div>
                                <button type="button" onClick={submitHandler} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;