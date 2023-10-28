import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service || {};
  // console.log(service);

  const checkout = {
    backgroundImage: 'url(https://i.ibb.co/9TQvfjs/2.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '300px',
  };

  return (
    <div>
      <div style={checkout} className="relative xl:rounded-xl" >
        <div className="absolute flex md:px-10 lg:px-20 gap-5 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%) h-full w-full xl:rounded-xl">
          <h2 className="text-center font-bold text-5xl text-white">Check Out :</h2>
          <h2 className="text-center font-bold text-5xl text-[#FF3811]">{title}</h2>
        </div>
      </div>

      <div className="py-32 lg:my-32 bg-[#F3F3F3] px-4 md:px-0">
        <form className="md:w-10/12 mx-auto space-y-6">
          <div className="md:flex md:justify-between gap-6 space-y-6 md:space-y-0">
            <input className="w-full py-2 rounded-md px-4 focus:outline-none" type="text" name="firstName" id="" placeholder="First Name" />
            <input className="w-full py-2 rounded-md px-4 focus:outline-none" type="text" name="lastName" id="" placeholder="Last Name" />
          </div>
          <div className="md:flex md:justify-between gap-6 space-y-6 md:space-y-0">
            <input className="w-full py-2 rounded-md px-4 focus:outline-none" type="text" name="phone" id="" placeholder="Your Phone" />
            <input className="w-full py-2 rounded-md px-4 focus:outline-none" type="email" name="email" id="" placeholder="Your Email" />
          </div>
          <div>
            <textarea className="w-full py-2 rounded-md px-4 focus:outline-none" name="message" id="" cols="30" rows="6"></textarea>
          </div>
          <button className="w-full bg-[#FF3811] rounded-md py-3 text-white hover:bg-black font-bold">Order Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
