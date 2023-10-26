import PropTypes from "prop-types";

const OhDetails = ({productDetails}) => {
    const { img, title, price, facility, description } = productDetails || {};

    return (
        <div className=" px-4 lg:px-5 xl:px-0 py-10">
            <img className="w-full xl:rounded-xl" src={img} alt="" />
            <div className="py-10 space-y-4">
                <h2 className="text-base md:text-lg lg:text-2xl font-bold">{title}</h2>
                <p className="font-semibold">Price : <span className="text-orange-500">${price}</span></p>
                <div>
                <h2 className="text-base md:text-lg lg:text-2xl font-bold mb-3">Facility :</h2>
                    <p className=" text-green-400 font-bold"><small>{facility?.[0]?.name}</small></p>
                    <p className=" text-green-400 font-bold"><small>{facility?.[1]?.name}</small></p>
                    <p className=" text-green-400 font-bold"><small>{facility?.[2]?.name}</small></p>
                    <p className=" text-green-400 font-bold"><small>{facility?.[3]?.name}</small></p>
                </div>
                <p className="text-gray-400"><small>{description}</small></p>
            </div>
        </div>
    );
};

OhDetails.propTypes = {
    productDetails: PropTypes.any.isRequired,
};

export default OhDetails;