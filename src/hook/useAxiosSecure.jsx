import axios from 'axios';
import React from 'react';

export const axiosSecure = axios.create({
    baseURL:''
})
const useAxiosSecure = () => {
    return axiosSecure 
};

export default useAxiosSecure;