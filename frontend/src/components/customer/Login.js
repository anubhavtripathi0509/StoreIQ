import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login(props){
    const baseUrl = "http://127.0.0.1:8000/api";
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [loginFormData, setLoginFormData] = useState({
        'username': '',
        'password': ''
    });

    const inputHandler = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        })
    };

    const submitHandler = (e) => {
        const formData = new FormData();
        formData.append("username", loginFormData.username);
        formData.append("password", loginFormData.password);

        // axios.post(`${baseUrl}/customer-login/`, formData.get("username", "password"))
        axios.post(`${baseUrl}/customer-login/`, formData)
        .then(res => {
            if(res.data.bool === false){
                setFormError(true);
                setErrorMsg(res.data.msg);
            }
            else{
                console.log(res.data);
                localStorage.setItem('customer_login', true);
                localStorage.setItem('customer_username', res.data.user);
                setFormError(false);
                setErrorMsg("");
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    var checkCustomer = localStorage.getItem('customer_login');
    if(checkCustomer){
        window.location.href = "/customer-dashboard";
    }

    const buttonEnable = loginFormData.username !== "" && loginFormData.password !== "";
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
                                <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary">Submit</button>
                                {formError &&
                                    <p className="text-danger mt-2">{errorMsg}</p>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;