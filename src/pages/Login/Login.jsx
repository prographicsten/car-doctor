import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../index.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const handleLogin = e => {
        e.preventDefault();

        const form  = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const loginInfo = {email, password};
        // console.log(loginInfo);

        // sign in with email and password
        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email};
            // navigate(location?.state ? location?.state : '/');

            // get access token 
            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state ? location?.state : '/');
                }
            })
        })
        .catch(error => console.log(error))
    };

    return (
        <div className=" min-h-screen bg-base-200 flex items-center justify-center py-10">
            <div className="hero-content w-full flex-col-reverse md:flex-row">
                <div className="text-center mb-2 mt-10 md:mt-0">
                <img src="login.svg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body"  data-aos="flip-left">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white">Login</button>
                        </div>

                        <p className="text-center mt-4"><small>Do not Have an account <Link to="/signup" className="text-blue-600 font-bold">Signup</Link></small></p>

                        <div>
                            <h2 className="text-2xl font-semibold text-center">Login with</h2>
                            <div className="flex justify-between items-center mt-5 gap-3">
                                <button className="google flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-google' ></i><span className="text-black font-bold">G</span>oogle</button>
                                <button className="github flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-github' ></i><span className="text-black font-bold">G</span>ithub</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;