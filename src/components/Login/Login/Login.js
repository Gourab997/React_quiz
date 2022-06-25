import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import "./Login.css"
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const history = useNavigate();
    const location = useLocation();
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLogin = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };
    return (
        <div>


            <form onSubmit={handleLogin}>
                <h3>Login Here</h3>

                <label for="email">Email</label>
                <input label='Email'
                    type='email'
                    name='email'
                    onChange={handleOnChange} placeholder="Email" id="email" />

                <label for="password">Password</label>
                <input    label='Password'
              type='password'
    
              name='password'
              onChange={handleOnChange} id="password" />

                <button type='submit'>Log In</button>
                <div class="social">
                    <Link to="/registration">Registration </Link>
                </div>
            </form>
            {user?.email && (
            <h1 className='my-3' >
              Login successfully.
            </h1>
          )}
          {authError && (
            <h2 className='my-3' >
              {authError}
            </h2>
          )}
        </div>
    );
};

export default Login;