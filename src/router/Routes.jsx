import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Details from "../pages/Home/Services/Details";

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
            loader: () => fetch('/services.json')
        }
        
      ]
    },
]);

export default router;