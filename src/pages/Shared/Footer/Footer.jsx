import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" mb-10">
            <div className="bg-[#151515] text-white px-4 md:px-5 lg:px-10 xl:px-20 grid grid-cols-2 md:grid-cols-4 py-10 gap-5">
                <div className="mb-5 md:mb-0 col-span-2 md:col-span-1">
                    <div>
                        <Link to={'/'}>
                            <img src="https://i.ibb.co/bbn727J/Group-1.png" alt="" />
                            <p className="text-sm font-bold text-white pl-2"><small>Car Doctor</small></p>
                        </Link>
                        <p className="py-5 "><small>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</small></p>
                    </div>
                    <div className="flex gap-2">
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#4C4C4C] flex w-7 h-7 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-google'></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#4C4C4C] flex w-7 h-7 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-twitter' ></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#4C4C4C] flex w-7 h-7 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-instagram' ></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#4C4C4C] flex w-7 h-7 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-linkedin' ></i>
                        </Link>
                    </div>
                </div>

                <div  className="mb-5 md:mb-0">
                    <h2 className="text-base font-semibold mb-5 ">About</h2>
                    <div>
                    <Link  className="block hover:text-blue-500 mb-2 text-base md:text-sm" to={'/'}><small>Home</small></Link>
                    <Link  className="block hover:text-blue-500 mb-2 text-base md:text-sm" to={'/service'}><small>Service</small></Link>
                    <Link  className="block hover:text-blue-500 mb-2 text-base md:text-sm" to={'/contact'}><small>Contact</small></Link>
                    </div>
                </div>

                <div  className="mb-5 md:mb-0">
                    <h2 className="text-base font-semibold mb-5 ">Company</h2>
                    <div>
                    <Link  className="block hover:text-blue-500 mb-2 text-base md:text-sm" to={'/carDoctor'}><small>Why Car Doctor</small></Link>
                    <Link  className="block hover:text-blue-500 mb-2 text-base md:text-sm" to={'/about'}><small>About</small></Link>
                    </div>
                </div>

                <div  className="mb-5 md:mb-0">
                    <h2 className="text-base font-semibold mb-5 ">Support</h2>
                    <div>
                    <Link  className="block hover:text-blue-500 mb-2 text-base md:text-sm" to={'/carDoctor'}><small>Support Center</small></Link>
                    <Link  className="block hover:text-blue-500 mb-2 text-base md:text-sm" to={'/feedback'}><small>Feedback</small></Link>
                    <Link  className="block hover:text-blue-500 mb-2 text-base md:text-sm" to={'/accesbility'}><small>Accesbility</small></Link>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-5 lg:px-10 xl:px-20 bg-[#181818] py-8 md:py-5">
                <p className="text-gray-400 hover:text-white text-center"><small>Copyright &copy; 2023 Car Doctor. All Rights Reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;