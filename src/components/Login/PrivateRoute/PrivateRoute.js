import React from 'react';
import { Navigate , useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation()
    return (
        user?.email ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: "/login",
               
              }}
              state={{ from: location }}
            ></Navigate>
          )
      
    );
};

export default PrivateRoute;