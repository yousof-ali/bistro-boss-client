import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL:'https://bistro-boss-server-iota-bay.vercel.app'
})
const userAxiosPublic = () => {
    return axiosPublic;
};

export default userAxiosPublic;