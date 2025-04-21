import React from 'react';
import useAuth from './useAuth';
import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';


const useAdmin = () => {
    const{user,loader} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:isAdmin,isPending:isAdminLoading} =  useQuery({
        queryKey:[user?.email,'isAdmin'],
        enabled:!loader,
        queryFn:async() => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            return res.data?.admin
        }
    }) 
    return[isAdmin,isAdminLoading]
};

export default useAdmin;