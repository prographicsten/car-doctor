import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster
            position="top-left"
            reverseOrder={false}
            />
            <Footer></Footer>
        </div>
    );
};

export default Main;