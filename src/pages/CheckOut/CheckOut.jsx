import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service || {};

  const checkout = {
    backgroundImage: 'url(https://i.ibb.co/9TQvfjs/2.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '300px',
  };

  return (
    <div style={checkout} className="relative" >
      <div className="absolute flex md:px-10 lg:px-20 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%) h-full w-full">
        <h2 className="text-center font-bold text-5xl text-white">Check Out</h2>
      </div>
    </div>
  );
};

export default CheckOut;
