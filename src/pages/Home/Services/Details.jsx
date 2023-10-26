import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import OhDetails from "./OhDetails";

const Details = () => {

    const [productDetails, setProductDetails] = useState();

    const {id} = useParams();

    const information = useLoaderData();

    useEffect(() => {
        const findDetails = information?.find(info => info._id === id);
        setProductDetails(findDetails);
    }, [id, information]);

    return (
        <div>
            <OhDetails productDetails={productDetails}></OhDetails>
        </div>
    );
};

export default Details;