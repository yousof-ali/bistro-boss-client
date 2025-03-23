import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ForPrivate from "../Pages/forPrivate/ForPrivate";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Allusers from "../Pages/Dashboard/Cart/Admin/Allusers";
import AddItems from "../Pages/Dashboard/Cart/Admin/AddItems";
import AdminPrivateRoute from "./AdminPrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/sign-up',
          element:<SignUp></SignUp>
        },
        {
          path:'/private',
          element:<PrivateRoute><ForPrivate></ForPrivate></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        // admin routes 
        {
          path:'add-items',
          element:<AdminPrivateRoute><AddItems></AddItems></AdminPrivateRoute>
        },
        {
          path:'all-user',
          element:<Allusers></Allusers>
        }
      ]
    }
  ]);

export default router;  