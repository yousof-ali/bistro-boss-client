import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';


const Root = () => {
    const location = useLocation();
    const isexistHeaderFooter = location.pathname.includes('login');
    return (
        <div>
            {isexistHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isexistHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;