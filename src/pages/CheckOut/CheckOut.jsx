import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const CheckOut = () => {

  const {user} = useContext(AuthContext);
  // console.log(user);

  const service = useLoaderData();
  // console.log(service);
  const { _id, title, price, img } = service || {};

  const checkout = {
    backgroundImage: 'url(https://i.ibb.co/9TQvfjs/2.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '300px',
  };

  const handleBookService = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value;
    const date = form.date?.value;
    const email = form.email?.value;
    const amount = form.amount?.value;
    const message = form.message?.value;

    const order = {name, date, email, amount, message, img, service: title, service_id: _id};
    console.log(order);

    // post order
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId) {
        toast.success('Service book Successfully completed!')
      }
    })
  };

  return (
    <div>
      <div style={checkout} className="relative xl:rounded-xl" >
        <div className="absolute flex justify-center items-center md:justify-start md:px-10 lg:px-20 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%) h-full w-full xl:rounded-xl">
          <h2 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl text-white">Check Out</h2>
        </div>
      </div>

      <h2 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl text-[#FF3811] my-10">Book : {title}</h2>
      <div className="py-32 lg:mb-32 bg-[#F3F3F3] px-4 md:px-0">
        

        <form onSubmit={handleBookService} className="md:w-10/12 mx-auto space-y-6">
          <div className="md:flex md:justify-between gap-6 space-y-6 md:space-y-0">
            <input className="w-full py-2 rounded-md px-4 focus:outline-none" type="text" name="name" id="" defaultValue={user?.displayName} placeholder="Your Name" />
            <input className="w-full py-2 rounded-md px-4 focus:outline-none" type="date" name="date" id="" placeholder="" />
          </div>
          <div className="md:flex md:justify-between gap-6 space-y-6 md:space-y-0">
            <input className="w-full py-2 rounded-md px-4 focus:outline-none" type="email" name="email" id="" defaultValue={user?.email} placeholder="Your Email" />
            <input className="w-full py-2 rounded-md px-4 focus:outline-none" type="text" name="amount" id="" defaultValue={`$ ${price}`} placeholder="Due Amount" />
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
