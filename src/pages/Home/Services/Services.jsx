// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const services = useServices();

    // now comment and use my Hooks
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-doctor-server-a0t1mri0s-shakil-ahmeds-projects-043baff6.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data  => setServices(data))
    // }, []);

    return (
        <div className="mt-20 mb-10">
            <div className="text-center space-y-4">
                <h2 className=" text-base md:text-xl text-[#FF3811] font-bold">Service</h2>
                <h1 className=" text-2xl md:text-5xl text-[#151515] font-bold">Our Service Area</h1>
                <p className="text-sm md:text-base capitalize md:pr-10 md:w-[720px] mx-auto">
                the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 xl:px-0 gap-6 py-10">
                {
                    services?.map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>

            <div className="flex justify-center items-center">
                <button className="bg-transparent border px-5 rounded-lg text-[#FF3811] border-[#FF3811] hover:bg-black hover:text-white hover:border-black btn capitalize">More Services</button>
            </div>

        
        </div>
    );
};

export default Services;