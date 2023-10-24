
const PrimaryInfo = () => {
    return (
        <div className="bg-[#151515] grid grid-cols-1 md:grid-cols-3 py-24 px-5 lg:px-16 space-y-10 xl:rounded-xl md:space-y-0 lg:space-y-0">
            <div className="flex items-center gap-5 ">
                <div className="flex w-10 h-10 bg-[#FF3811] justify-center items-center rounded-full">
                <i className=' text-white text-2xl bx bxs-calendar'></i>
                </div>
                <div className="text-white">
                    <p><small>We are open monday-friday</small></p>
                    <h2>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            
            <div className="flex items-center gap-5 ">
                <div className="flex w-10 h-10 bg-[#FF3811] justify-center items-center rounded-full">
                <i className=' text-white text-2xl bx bxs-phone-call' ></i>
                </div>
                <div className="text-white">
                    <p><small>Have a question?</small></p>
                    <h2>+2546 251 2658</h2>
                </div>
            </div>
            <div className="flex items-center gap-5 ">
                <div className="flex w-10 h-10 bg-[#FF3811] justify-center items-center rounded-full">
                <i className=' text-white text-2xl bx bxs-edit-location' ></i>
                </div>
                <div className="text-white">
                    <p><small>Need a repair? our address</small></p>
                    <h2>Liza Street, New York</h2>
                </div>
            </div>

        </div>
    );
};

export default PrimaryInfo;