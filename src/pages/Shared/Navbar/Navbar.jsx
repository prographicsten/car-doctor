// import { useContext } from "react";
import {Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    // const {user} = useContext(AuthContext);

    const navlinks = <>

            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7   rounded-full  hover:rounded-tr-none hover:bg-black  " : " "
            }
            >
            Home
            </NavLink>

            <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7   rounded-full  hover:rounded-tr-none hover:bg-black  " : " "
            }
            >
            About
            </NavLink>
            
            <NavLink
            to="/service"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7   rounded-full  hover:rounded-tr-none hover:bg-black  " : " "
            }
            >
            Services
            </NavLink>

            <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7  rounded-full  hover:rounded-tr-none hover:bg-black  " : " "
            }
            >
            Blog
            </NavLink>

            <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7  rounded-full  hover:rounded-tr-none hover:bg-black  " : " "
            }
            >
            Contact
            </NavLink>

            {/* {
                user ? '' : 
                <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7  rounded-full  hover:rounded-tr-none hover:bg-black  " : " "
                }
                >
                Login
                </NavLink>
            } */}

            <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#FF444A] text-white py-1 px-7  rounded-full  hover:rounded-tr-none hover:bg-black  " : " "
            }
            >
            Login
            </NavLink>
            
        </>


    return (

        <div className="navbar bg-base-100  py-4 flex justify-between z-50">
            <div className=" z-50">
                <div className="dropdown  z-50">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        {navlinks}
                    </li>
                </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link to={'/'}>
                    <img className=" w-16 lg:w-20" src="https://i.ibb.co/7Xp6MpT/Group-1-1.png" alt="" />
                    <p className="text-sm font-bold text-black pl-[3px] lg:pl-3"><small>Car Doctor</small></p>
                </Link>
            </div>
            <div className="hidden lg:flex  z-50">
                <ul className="">
                <li className="flex justify-between items-center gap-5">
                    {navlinks}
                </li>
                </ul>
            </div>
            <div className="flex items-center  z-50">
            <div className="flex justify-between items-center gap-3">
                <button className="bg-[#FF444A] text-white py-3 font-semibold hover:bg-black hover:text-white px-8 rounded-full">Appointment</button>
            </div>
            </div>
        </div>
    );
};

export default Navbar;