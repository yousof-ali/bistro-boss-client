import React from 'react';
import { FaAd, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='p-4 text-white  space-y-2'>
                    <li className='hover:bg-amber-700'><NavLink  to={'/dashboard/home'}>
                    <span className='flex p-2 items-center gap-2 justify-center'><FaHome></FaHome>
                    Home</span></NavLink></li>
                    <li className='hover:bg-amber-700'><NavLink  to={'/dashboard/cart'}>
                    <span className='flex p-2 items-center gap-2 justify-center'><FaShoppingCart></FaShoppingCart>
                    My Cart</span></NavLink></li>

                    <li className='hover:bg-amber-700'><NavLink  to={'/dashboard/review'}>
                    <span className='flex p-2 items-center gap-2 justify-center'><FaAd></FaAd>
                    Review</span></NavLink></li>
                    <li className='hover:bg-amber-700'><NavLink  to={'/dashboard/booking'}>
                    <span className='flex p-2 items-center gap-2 justify-center'><FaList></FaList>
                    My Bookings</span></NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;