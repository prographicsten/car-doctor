import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading) {
        return <div className="h-screen flex justify-center items-center text-center">
            <progress className="progress w-56"></progress>
        </div>;
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location?.pathname} to={'/login'} replace></Navigate>;
    // return <Navigate state={{ from: location }} to={'/login'} replace></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.any,
};

export default PrivateRoute;