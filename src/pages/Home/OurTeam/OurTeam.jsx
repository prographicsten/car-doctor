
import { Link } from "react-router-dom";

const OurTeam = () => {

    return (


        <div className="mt-20 px-4 xl:px-0">
            <section>
                <div className="text-center space-y-4">
                    <h2 className=" text-base md:text-xl text-[#FF3811] font-bold">Popular Products</h2>
                    <h1 className=" text-2xl md:text-5xl text-[#151515] font-bold">Browse Our Products</h1>
                    <p className="text-sm md:text-base capitalize md:pr-10 md:w-[720px] mx-auto">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100 text-center">
                    <img className="rounded-xl  w-full" src="https://i.ibb.co/fC5wDLM/2.jpg" alt="" />
                    
                    <h3 className="text-[#444] text-lg lg:text-2xl font-bold">Car Engine Plug</h3>
                    <h2 className=" text-lg md:text-base lg:text-xl text-[#737373] font-semibold">Engine Expert</h2>
                    
                    <div className="flex gap-4 justify-center">
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#395185] flex w-8 h-8 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-facebook'></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#55ACEE] flex w-8 h-8 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-twitter' ></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#0A66C2] flex w-8 h-8 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-linkedin' ></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#4C4C4C] flex w-8 h-8 justify-center items-center rounded-[50%] ">
                            <i className=' text-white bx bxl-instagram' ></i>
                        </Link>
                    </div>
                </div>

                <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100 text-center">
                    <img className="rounded-xl  w-full" src="https://i.ibb.co/fC5wDLM/2.jpg" alt="" />
                    
                    <h3 className="text-[#444] text-lg lg:text-2xl font-bold">Car Engine Plug</h3>
                    <h2 className=" text-lg md:text-base lg:text-xl text-[#737373] font-semibold">Engine Expert</h2>
                    
                    <div className="flex gap-4 justify-center">
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#395185] flex w-8 h-8 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-facebook'></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#55ACEE] flex w-8 h-8 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-twitter' ></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#0A66C2] flex w-8 h-8 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-linkedin' ></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#4C4C4C] flex w-8 h-8 justify-center items-center rounded-[50%] ">
                            <i className=' text-white bx bxl-instagram' ></i>
                        </Link>
                    </div>
                </div>
                
                <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100 text-center">
                    <img className="rounded-xl  w-full" src="https://i.ibb.co/fC5wDLM/2.jpg" alt="" />
                    
                    <h3 className="text-[#444] text-lg lg:text-2xl font-bold">Car Engine Plug</h3>
                    <h2 className=" text-lg md:text-base lg:text-xl text-[#737373] font-semibold">Engine Expert</h2>
                    
                    <div className="flex gap-4 justify-center">
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#395185] flex w-8 h-8 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-facebook'></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#55ACEE] flex w-8 h-8 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-twitter' ></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#0A66C2] flex w-8 h-8 justify-center items-center rounded-[50%]">
                            <i className=' text-white bx bxl-linkedin' ></i>
                        </Link>
                        <Link to={'/'} className="cursor-pointer  hover:bg-[#FF3811] bg-[#4C4C4C] flex w-8 h-8 justify-center items-center rounded-[50%] ">
                            <i className=' text-white bx bxl-instagram' ></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>

    
    );
};

export default OurTeam;