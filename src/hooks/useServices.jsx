import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-a0t1mri0s-shakil-ahmeds-projects-043baff6.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return services;
};

export default useServices;