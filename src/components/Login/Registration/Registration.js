import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';


const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, authError, isLoading } = useAuth();
    const history = useNavigate();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    };
    const handleRegistration = (e) => {
        registerUser(
            loginData.email,
            loginData.password,
            loginData.name,
            loginData.image,
            history
        );
        e.preventDefault();
    };
    return (
        <div>
           
            <form onSubmit={handleRegistration} class="row g-3">
            <div class="col-12">
                    <label for="username" class="form-label">UserName</label>
                    <input type="text"  name='name'
                onBlur={handleOnBlur} class="form-control" id="inputAddress2" placeholder="Type username.." />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email"   name='email'
                onBlur={handleOnBlur} class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password"  name='password'
                onBlur={handleOnBlur} class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Retype-Password</label>
                    <input type="text"  name='password2'
                onBlur={handleOnBlur} class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
            
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Image Url</label>
                    <input type="url"   name='image'
                onBlur={handleOnBlur} class="form-control" id="inputCity" />
                </div>
             
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </form>

        </div>
    );
};

export default Registration;