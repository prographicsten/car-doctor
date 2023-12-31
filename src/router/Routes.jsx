import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Details from "../pages/Home/Services/Details";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
            loader: () => fetch('https://car-doctor-server-a0t1mri0s-shakil-ahmeds-projects-043baff6.vercel.app/services')
        },

        {
            path: '/checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`https://car-doctor-server-a0t1mri0s-shakil-ahmeds-projects-043baff6.vercel.app/services/${params.id}`)
        },

        {
            path: '/bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
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