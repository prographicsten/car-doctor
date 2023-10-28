import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Details from "../pages/Home/Services/Details";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        
        {
            path: '/about',
            element: <Home></Home>
        },
        
        {
            path: '/service',
            element: <Home></Home>
        },
        
        {
            path: '/blog',
            element: <Home></Home>
        },
        
        {
            path: '/contact',
            element: <Home></Home>
        },

        {
            path: '/details/:id',
            element: <Details></Details>,
            loader: () => fetch('http://localhost:5000/services')
        },

        {
            path: '/checkout/:id',
            element: <CheckOut></CheckOut>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },

        {
            path: '/bookings',
            element: <Bookings></Bookings>
        },

        {
            path: '/signup',
            element: <Signup></Signup>
        },

        {
            path: '/login',
            element: <Login></Login>
        }
        
      ]
    },
]);

export default router;