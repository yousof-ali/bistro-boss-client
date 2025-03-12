import React, {useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation()
    if (user){
        return children;
    };
    if(loader){
        return <div className='text-center pt-32 pb-16'>
            <span className="loading loading-dots loading-xl"></span>
        </div>;
    }
    return <Navigate to={'/login'} state={{from:location}}></Navigate>;
};

export default PrivateRoute;