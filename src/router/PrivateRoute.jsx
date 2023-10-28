import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <div className="h-screen flex justify-center items-center text-center">
            <progress className="progress w-56"></progress>
        </div>;
    }

    if(user?.email){
        return children;
    }

    return <Navigate to={'/login'}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.any,
};

export default PrivateRoute;