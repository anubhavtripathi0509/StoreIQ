import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SellerLogin(props){
    const baseUrl = "http://127.0.0.1:8000//api/";
    const [loginFormData, setLoginFormData] = useState({
        'username': "",
        'password': ""
    });
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const inputHandler = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = async () => {
        const formData = new FormData();
        formData.append("username", loginFormData.username);
        formData.append("password", loginFormData.password);
        try{
            const response = await axios.post(`${baseUrl}vendor-login/`, formData);
            console.log(response);
            if(response.data.bool === false){
                setSuccessMsg(false);
                setErrorMsg(response.data.message);
            }else{
                console.log(response.data);
                localStorage.setItem('seller_id', response.data.id);
                localStorage.setItem('seller_login', true);
                localStorage.setItem('seller_username', response.data.username);
                setSuccessMsg(response.data.message);
                setErrorMsg('');
            }
        }catch(error){
            console.log(error);
        }
    }

    const checkSeller = localStorage.getItem('seller_login');
    if(checkSeller){
        window.location.href = "/seller-dashboard";
    }

    const buttonEnable = loginFormData.username !== "" && loginFormData.password !== "";


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
                                    <input type="text" onChange={inputHandler} name="username" value={loginFormData.username} className="form-control" id="username"/>
                                </div>
                                <div className="mb-3">
                                    <label for="pwd" className="form-label">Password</label>
                                    <input type="password" onChange={inputHandler} name="password" value={loginFormData.password} className="form-control" id="pwd"/>
                                </div>
                                <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary">Submit</button>
                                {errorMsg &&
                                    <p className="text-danger mt-2">{errorMsg}</p>
                                }

                                {
                                    successMsg &&
                                    <p className="text-success mt-2">{successMsg}</p>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerLogin;