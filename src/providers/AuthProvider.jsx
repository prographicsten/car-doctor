import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signup with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // on auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            setUser(currentUser);
            console.log('current user is', currentUser);
            setLoading(false);

            // if user is existing then issue a token
            if(currentUser){
                axios.post('https://car-doctor-server-a0t1mri0s-shakil-ahmeds-projects-043baff6.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token response', res.data);
                })
            }else{
                axios.post('https://car-doctor-server-a0t1mri0s-shakil-ahmeds-projects-043baff6.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [user?.email])

    // all providers
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

export default AuthProvider;