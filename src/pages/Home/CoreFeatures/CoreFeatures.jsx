
import './CoreFeatures.css';

const CoreFeatures = () => {
    return (
        <div className='my-20'>
            <div className="text-center space-y-4">
                <h2 className=" text-base md:text-xl text-[#FF3811] font-bold">Core Features</h2>
                <h1 className=" text-2xl md:text-5xl text-[#151515] font-bold">Why Choose Us</h1>
                <p className="text-sm md:text-base capitalize md:pr-10 md:w-[720px] mx-auto">
                the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 lg:px-5 xl:px-0 my-10">
                <div className=" core_info text-center space-y-3 hover:bg-[#FF3811] hover:text-white px-4 py-8 md:px-4 md:py-14 lg:px-4 lg:py-10 rounded-lg border border-gray-100 hover:border-[#FF3811]">
                    <div className=" core_i flex justify-center items-centermx-auto rounded-full">
                        <i className=' text-[#FF3811] text-4xl bx bxs-user-detail' ></i>
                    </div>
                    <h3 className="text-[#444] font-bold text-base lg:text-lg">Exper Team</h3>
                </div>

                <div className=" core_info text-center space-y-3 hover:bg-[#FF3811] hover:text-white px-4 py-8 md:px-4 md:py-14 lg:px-4 lg:py-10 rounded-lg border border-gray-100 hover:border-[#FF3811]">
                    <div className=" core_i flex justify-center items-centermx-auto rounded-full">
                        <i className=' text-[#FF3811] text-4xl bx bxs-stopwatch' ></i>
                    </div>
                    <h3 className="text-[#444] font-bold text-base lg:text-lg">Timely Delivery</h3>
                </div>

                <div className=" core_info text-center space-y-3 hover:bg-[#FF3811] hover:text-white px-4 py-8 md:px-4 md:py-14 lg:px-4 lg:py-10 rounded-lg border border-gray-100 hover:border-[#FF3811]">
                    <div className=" core_i flex justify-center items-centermx-auto rounded-full">
                        <i className=' text-[#FF3811] text-4xl bx bxs-leaf' ></i>
                    </div>
                    <h3 className="text-[#444] font-bold text-base lg:text-lg">24/7 Support</h3>
                </div>

                <div className=" core_info text-center space-y-3 hover:bg-[#FF3811] hover:text-white px-4 py-8 md:px-4 md:py-14 lg:px-4 lg:py-10 rounded-lg border border-gray-100 hover:border-[#FF3811]">
                    <div className=" core_i flex justify-center items-centermx-auto rounded-full">
                        <i className=' text-[#FF3811] text-4xl bx bxs-paint' ></i>
                    </div>
                    <h3 className="text-[#444] font-bold text-base lg:text-lg">Best Equipment</h3>
                </div>

                <div className=" core_info text-center space-y-3 hover:bg-[#FF3811] hover:text-white px-4 py-8 md:px-4 md:py-14 lg:px-4 lg:py-10 rounded-lg border border-gray-100 hover:border-[#FF3811]">
                    <div className=" core_i flex justify-center items-centermx-auto rounded-full">
                        <i className=' text-[#FF3811] text-4xl bx bxs-check-shield' ></i>
                    </div>
                    <h3 className="text-[#444] font-bold text-base lg:text-lg">100% Guranty</h3>
                </div>

                <div className=" core_info text-center space-y-3 hover:bg-[#FF3811] hover:text-white px-4 py-8 md:px-4 md:py-14 lg:px-4 lg:py-10 rounded-lg border border-gray-100 hover:border-[#FF3811]">
                    <div className=" core_i flex justify-center items-centermx-auto rounded-full">
                        <i className=' text-[#FF3811] text-4xl bx bxs-car-wash' ></i>
                    </div>
                    <h3 className="text-[#444] font-bold text-base lg:text-lg">Timely Delivery</h3>
                </div>
            </div>
        </div>
    );
};

export default CoreFeatures;