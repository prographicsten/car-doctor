import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-a0t1mri0s-shakil-ahmeds-projects-043baff6.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {

    const {logOut} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            // error is a arrow function
            console.log('error tracked in the interceptor', error.response);
            if(error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user');
                logOut()
                .then(() => {
                    navigate('/login');
                })
                .catch(error => console.log(error));
            }
        });
    }, [logOut, navigate]);
    
    return axiosSecure;
};

export default useAxiosSecure;