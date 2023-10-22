import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="mt-20 mb-10">
            <div className="text-center space-y-4">
                <h2 className=" text-base md:text-xl text-[#FF3811] font-bold">Service</h2>
                <h1 className=" text-2xl md:text-5xl text-[#151515] font-bold">Our Service Area</h1>
                <p className="text-sm md:text-base capitalize md:pr-10 md:w-[720px] mx-auto">
                the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
                </p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 xl:px-0 gap-5 py-10">

                <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100">
                    <img className="rounded-xl h-[210px] w-full" src="https://i.ibb.co/9TQvfjs/2.jpg" alt="" />
                    <h3 className="text-[#444] text-lg lg:text-2xl font-bold">Electrical System</h3>
                    <div className="flex justify-between items-center">
                        <h2 className=" text-lg md:text-base lg:text-xl text-[#FF3811] font-semibold">Price : $20.00</h2>
                        <Link to={'/'}>
                        <i className=' text-lg lg:text-xl text-[#FF3811] font-semibold rotate-180 bx bx-arrow-back'></i>
                        </Link>
                    </div>
                </div>

                <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100">
                    <img className="rounded-xl h-[210px] w-full" src="https://i.ibb.co/rFgsPXP/4.jpg" alt="" />
                    <h3 className="text-[#444] text-lg lg:text-2xl font-bold">Engine Diagnostics</h3>
                    <div className="flex justify-between items-center">
                        <h2 className=" text-lg md:text-base lg:text-xl text-[#FF3811] font-semibold">Price : $20.00</h2>
                        <Link to={'/'}>
                        <i className=' text-lg lg:text-xl text-[#FF3811] font-semibold rotate-180 bx bx-arrow-back'></i>
                        </Link>
                    </div>
                </div>

                <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100">
                    <img className="rounded-xl h-[210px] w-full" src="https://i.ibb.co/PZDSf7K/6.jpg" alt="" />
                    <h3 className="text-[#444] text-lg lg:text-2xl font-bold">Auto Car Repair</h3>
                    <div className="flex justify-between items-center">
                        <h2 className=" text-lg md:text-base lg:text-xl text-[#FF3811] font-semibold">Price : $20.00</h2>
                        <Link to={'/'}>
                        <i className=' text-lg lg:text-xl text-[#FF3811] font-semibold rotate-180 bx bx-arrow-back'></i>
                        </Link>
                    </div>
                </div>

                <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100">
                    <img className="rounded-xl h-[210px] w-full" src="https://i.ibb.co/nQJLKBk/3.jpg" alt="" />
                    <h3 className="text-[#444] text-lg lg:text-2xl font-bold">Electrical System</h3>
                    <div className="flex justify-between items-center">
                        <h2 className=" text-lg md:text-base lg:text-xl text-[#FF3811] font-semibold">Price : $20.00</h2>
                        <Link to={'/'}>
                        <i className=' text-lg lg:text-xl text-[#FF3811] font-semibold rotate-180 bx bx-arrow-back'></i>
                        </Link>
                    </div>
                </div>

                <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100">
                    <img className="rounded-xl h-[210px] w-full" src="https://i.ibb.co/d572MsC/1.jpg" alt="" />
                    <h3 className="text-[#444] text-lg lg:text-2xl font-bold">Engine Diagnostics</h3>
                    <div className="flex justify-between items-center">
                        <h2 className=" text-lg md:text-base lg:text-xl text-[#FF3811] font-semibold">Price : $20.00</h2>
                        <Link to={'/'}>
                        <i className=' text-lg lg:text-xl text-[#FF3811] font-semibold rotate-180 bx bx-arrow-back'></i>
                        </Link>
                    </div>
                </div>

                <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100">
                    <img className="rounded-xl h-[210px] w-full" src="https://i.ibb.co/7r0dbg8/5.jpg" alt="" />
                    <h3 className="text-[#444] text-lg lg:text-2xl font-bold">Auto Car Repair</h3>
                    <div className="flex justify-between items-center">
                        <h2 className=" text-lg md:text-base lg:text-xl text-[#FF3811] font-semibold">Price : $20.00</h2>
                        <Link to={'/'}>
                        <i className=' text-lg lg:text-xl text-[#FF3811] font-semibold rotate-180 bx bx-arrow-back'></i>
                        </Link>
                    </div>
                </div>

            </section>
            
            <div className="flex justify-center items-center">
                <button className="bg-transparent border px-5 rounded-lg text-[#FF3811] border-[#FF3811] hover:bg-black hover:text-white hover:border-black btn capitalize">More Services</button>
            </div>
        
        </div>
    );
};

export default Services;