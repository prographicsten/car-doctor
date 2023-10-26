import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service || {};

  return (
    <div className="p-5 border rounded-xl space-y-4 border-gray-100 hover:bg-gray-100 hover:border-gray-100">
      <img className="rounded-xl h-[210px] w-full" src={img} alt="" />
      <h3 className="text-[#444] text-lg lg:text-2xl font-bold">{title}</h3>
      <div className="flex justify-between items-center">
        <h2 className=" text-lg md:text-base lg:text-xl text-[#FF3811] font-semibold">
          Price : ${price}
        </h2>
        <Link to={`/details/${_id}`}>
          <i className=" text-lg lg:text-xl text-[#FF3811] font-semibold rotate-180 bx bx-arrow-back"></i>
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
