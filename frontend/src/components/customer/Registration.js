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
        'password': '',
    });

    const inputHandler = (e) => {
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]: e.target.value
        })
    };

    const submitHandler = (e) => {
        const formData = new FormData();
        formData.append("first_name", registerFormData.first_name);
        formData.append("last_name", registerFormData.last_name);
        formData.append("username", registerFormData.username);
        formData.append("email", registerFormData.email);
        formData.append("password", registerFormData.password);

        // axios.post(`${baseUrl}/customer-login/`, formData.get("username", "password"))
        axios.post(`${baseUrl}/customer-register/`, formData)
        .then(res => {
            if(res.data.bool === false){
                setFormError(true);
                setErrorMsg(res.data.msg);
            }
            else{
                console.log(res.data);
                localStorage.setItem('customer_register', true);
                localStorage.setItem('customer_username', res.data.user);
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
                            <form>
                                <div className="mb-3">
                                    <label for="first-name" className="form-label">First Name</label>
                                    <input type="text" name="first_name" value={registerFormData.first_name} onChange={inputHandler} className="form-control" id="first-name"/>
                                </div>
                                <div className="mb-3">
                                    <label for="last-name" className="form-label">Last Name</label>
                                    <input type="text" onChange={inputHandler} value={registerFormData.last_name} className="form-control" id="last-name"/>
                                </div>
                                <div className="mb-3">
                                    <label for="username" className="form-label">Username</label>
                                    <input type="text" onChange={inputHandler} value={registerFormData.username} className="form-control" id="username"/>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" onChange={inputHandler} className="form-control" value={registerFormData.email} id="email" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="pwd" className="form-label">Password</label>
                                    <input type="password" onChange={inputHandler} value={registerFormData.password} className="form-control" id="pwd"/>
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