import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import LoginInputRow from './LoginInputRow';
import '../css/Form.css';

const Login = () => 
{
    const [loginData, setLoginData] = useState(
    {
        username: "",
        password: ""
    });
    
    const [loginStatus, setLoginStatus] = useState(null);
    
    const handleChange = (e) =>
    {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        
        Axios.post("/api/loginUser", loginData)
        .then((response) =>
        {
            const feedbackMessage = (response.data.message) ? 
                // Login attempt returns TRUE (Valid credentials):
                <h6 className="successMessage container text-center mt-3 py-1"><strong><i className="fa fa-check-circle pe-1"></i>Login successful!</strong></h6>
                : 
                // Login attempt returns FALSE (Invalid credentials):
                <h6 className="errorMessage container text-center mt-3 py-1"><strong><i className="fa fa-exclamation-triangle pe-1"></i>Invalid username or password! Please try again.</strong></h6>

            // Set loginStatus state variable to the value of feedbackMessage:  
            setLoginStatus(feedbackMessage);
        })
    };

    const inputsArr = 
    [
        {id: 1, name: "username", icon: "fa fa-user fa-lg", type: "text", placeholder: "Username", required: true, maxLength: 64, value: loginData.username, onChangeHandler: handleChange},
        {id: 2, name: "password", icon: "fa fa-lock fa-lg", type: "password", placeholder: "Password", required: true, maxLength: null, value: loginData.password, onChangeHandler: handleChange},
    ];

    const loginFormInputs = inputsArr.map((input) =>
        <LoginInputRow
            key = {input.id}
            name = {input.name}
            icon = {input.icon}
            type = {input.type}
            placeholder = {input.placeholder}
            required = {input.required}
            maxLength = {input.maxLength}
            value = {input.value}
            onChangeHandler = {input.onChangeHandler}
        />
    )

    return (
        <main>
            <section className="spad">
                <div className="pageContainer container">
                    <div className="container pt-2 pb-4">
                        <h2 className="pageHeading text-start text-black">Login</h2>
                    </div>
                    <div className="container">
                        <form id="loginForm" className="customForm px-4 py-2" onSubmit={handleSubmit}>
                            {loginFormInputs}
                        </form>
                        <div className="row text-center py-2">
                            <div className="col-12 py-1">
                                <button type="submit" form="loginForm" className="btn btn-submit w-100">Sign-In</button>
                            </div>
                        </div>
                    </div>                    
                </div>
                {loginStatus}
                <h6 className="text-center text-black mt-2 py-1">Don't have an account? <Link to="/Register" className="themeLink fw-semibold">Register here!</Link></h6>
            </section>
        </main>
    )
}

export default Login;