import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hook/useCart";


const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const[cart] = useCart();

  const link = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/menu'}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={'/order/salad'}>Order</NavLink>
      </li>
      {
        user ? <>
          <li>
            <NavLink to={'/private'}>PrivateRoute</NavLink>
          </li>
        </> : <>
          <li>
            <NavLink to={'/login'}>Login</NavLink>
          </li>
          <li>
            <NavLink to={'/sign-up'}>Sign Up</NavLink>
          </li>
        </>

      }

      <li className="mr-4">
        <NavLink to={'/'}><button className="btn gap-4 text-2xl">
        <FaShoppingCart /> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
        </button></NavLink>
      </li>

    </>
  );

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out now!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!"
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(_ => {
            Swal.fire({
              title: "Log out",
              text: "log out successully.",
              icon: "success"
            });
          })
        navigate('/')

      }
    });
  }

  return (

    <div className="navbar fixed max-w-screen-xl w-full z-20 bg-black/30 text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btnbtn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black/30 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu items-center menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">

        {
          !user ? <Link to={'/login'}><button className="btn">Login</button></Link> : <button onClick={handleLogOut} className="btn">Log Out</button>
        }
      </div>
    </div>
  );
};

export default Navbar;
