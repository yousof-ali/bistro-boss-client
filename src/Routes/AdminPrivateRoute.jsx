import React from 'react';
import useAdmin from '../hook/useAdmin';
import useAuth from '../hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminPrivateRoute = ({children}) => {

    const [isAdmin, isAdminLoading] = useAdmin()
    const {user, loader} = useAuth()
    const location = useLocation()
    if (user && isAdmin) {
        return children;
    };
    if (loader||isAdminLoading) {
        return <div className='text-center pt-32 pb-16'>
            <span className="loading loading-dots loading-xl"></span>
        </div>;
    }
    return <Navigate to={'/'} state={{ from: location }}></Navigate>;
};

export default AdminPrivateRoute;