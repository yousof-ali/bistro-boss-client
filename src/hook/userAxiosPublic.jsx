import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL:'http://localhost:5000'
})
const userAxiosPublic = () => {
    return axiosPublic;
};

export default userAxiosPublic;