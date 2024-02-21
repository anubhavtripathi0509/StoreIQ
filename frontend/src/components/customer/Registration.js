import React from "react";
import { useState } from "react";
import axios from "axios";

function Registration(props){
    const baseUrl = "http://127.0.0.1:8000/api";
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [registerFormData, setRegisterFormData] = useState({
        'first_name': '',
        'last_name': '',
        'username': '',
        'email': '',
        'mobile': '',
        'password': '',
    });

    const inputHandler = (e) => {
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]: e.target.value
        })
    };
    console.log(registerFormData);

    const submitHandler = (e) => {
        const formData = new FormData();
        formData.append("first_name", registerFormData.first_name);
        formData.append("last_name", registerFormData.last_name);
        formData.append("username", registerFormData.username);
        formData.append("email", registerFormData.email);
        formData.append("mobile", registerFormData.mobile);
        formData.append("password", registerFormData.password);

        // axios.post(`${baseUrl}/customer-login/`, formData.get("username", "password"))
        axios.post(`${baseUrl}/customer-register/`, formData)
        .then(res => {
            if(res.data.bool === false){
                setFormError(true);
                setErrorMsg(res.data.msg);
                alert("Registration Failed");
            }
            else{
                console.log(res.data);
                localStorage.setItem('customer_register', true);
                localStorage.setItem('customer_username', res.data.user);
                setRegisterFormData({
                    'first_name': '',
                    'last_name': '',
                    'username': '',
                    'email': '',
                    'mobile': '',
                    'password': '',
                });
                alert("Registration Successful");
                window.location.href = "/customer-login";
                setFormError(false);
                setErrorMsg("");
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    const buttonEnable =
        registerFormData.username !== '' &&
        registerFormData.password !== '' &&
        registerFormData.email !== '' &&
        registerFormData.mobile!== '' &&
        registerFormData.first_name !== '' &&
        registerFormData.last_name !== '';


    return(
        <div className="container mt-4">
            {/* <h3 className="mb-4">Register</h3> */}
            <div className="row">
                <div className="col-md-8 col-12">
                    <div className="card">
                        <h4 className="card-header">Register</h4>
                        <div className="card-body">
                            <p className="text-muted"><strong className="text-secondary">Note:</strong>*All fields are required</p>
                            {errorMsg && <p className="text-danger">{errorMsg}</p>}
                            <form>
                                <div className="mb-3">
                                    <label for="first-name" className="form-label">First Name</label>
                                    <input type="text" name="first_name" value={registerFormData.first_name} onChange={inputHandler} className="form-control" id="first-name"/>
                                </div>
                                <div className="mb-3">
                                    <label for="last-name" className="form-label">Last Name</label>
                                    <input type="text" name="last_name" value={registerFormData.last_name} onChange={inputHandler} className="form-control" id="last-name"/>
                                </div>
                                <div className="mb-3">
                                    <label for="username" className="form-label">Username</label>
                                    <input type="text" name="username" value={registerFormData.username} onChange={inputHandler} className="form-control" id="username"/>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" name="email" value={registerFormData.email} onChange={inputHandler} className="form-control" id="email" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="mobile" className="form-label">Mobile</label>
                                    <input type="mobile" name="mobile" value={registerFormData.mobile} onChange={inputHandler} className="form-control" id="mobile" aria-describedby="mobileHelp"/>
                                    <div id="mobileHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="pwd" className="form-label">Password</label>
                                    <input type="password" name="password" value={registerFormData.password} onChange={inputHandler} className="form-control" id="pwd"/>
                                </div>
                                <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;