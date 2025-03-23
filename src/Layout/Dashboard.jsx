import React from 'react';
import { FaAd, FaCalendar, FaCreditCard, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import useAdmin from '../hook/useAdmin';



const Dashboard = () => {
    const [isAdimn] = useAdmin()
    return (
        <div className='flex'>
            <div className='w-64 p-4 min-h-screen bg-[#D1A054]'>
                <h1 className='text-2xl text-center font-bold text-white'>BISTRO BOSS</h1>
                <h3 className='mb-16 text-center tracking-[0.30em] text-white'>RESTAURANT</h3>
                <ul className='space-y-2'>
                    {
                        isAdimn ? <><li>
                            <NavLink
                                to={'/dashboard/admin-home'}
                                className={({ isActive }) =>
                                    `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                }
                            >
                                <FaHome />
                                ADMIN HOME
                            </NavLink>
                        </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/add-items'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                   <FaPlusCircle />
                                    ADD ITEMS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/manage-items'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                    <MdManageHistory />
                                    MANAGE ITEMS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/manage-bookings'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                    <MdManageSearch />
                                    MANAGE BOOKINGS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/all-user'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                    <MdManageAccounts />

                                    ALL USERS
                                </NavLink>
                            </li>
                            </> : <> <li>
                                <NavLink
                                    to={'/dashboard/user-home'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                    <FaHome />
                                    USER HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/reservation'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                    <FaCalendar />
                                    RESERVATION
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/pyment-history'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                    <FaCreditCard />
                                    PAYMENT HISTORY
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/cart'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                    <FaShoppingCart />
                                    MY CART
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/review'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                    <FaAd />
                                    ADD REVIEW
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dashboard/booking'}
                                    className={({ isActive }) =>
                                        `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                                    }
                                >
                                    <FaList />
                                    MY BOOKINGS
                                </NavLink>
                            </li></>
                    }

                </ul>
                <div className='w-full border-t border-white my-8 '></div>
                <ul className='space-y-2'>
                    <li>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                            }
                        >
                            <FaHome />
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/menu'}
                            className={({ isActive }) =>
                                `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                            }
                        >
                            <TiThMenu />
                            MENU
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/order/salad'}
                            className={({ isActive }) =>
                                `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                            }
                        >
                            <FaShoppingBag />
                            SHOP
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/contact'}
                            className={({ isActive }) =>
                                `flex p-2 items-center gap-2 rounded-md ${isActive ? 'bg-amber-700 text-white' : 'hover:bg-amber-700'}`
                            }
                        >
                            <IoMdMail />

                            CONTACT
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className='flex-1 bg-base-100'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
