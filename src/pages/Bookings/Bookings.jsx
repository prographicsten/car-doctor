import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {


const bookingsBanner = {
    backgroundImage: 'url(https://i.ibb.co/PZDSf7K/6.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '300px',
};

  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  return (
    <div>
      <h2 className="text-5xl">Your Bookings: {bookings?.length}</h2>

    {/* bookings banner */}
    <div style={bookingsBanner} className="relative xl:rounded-xl" >
        <div className="absolute flex justify-center items-center md:justify-start md:px-10 lg:px-20 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%) h-full w-full xl:rounded-xl">
          <div>
          <h2 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl text-white">Cart Details</h2>
          <p className="text-red-500 pl-1"><small>Home - Product Details</small></p>
          </div>
        </div>
    </div>

    {/* bookings info */}
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                </label>
              </th>
              <th>Service Image</th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                bookings?.map((booking, index) => <BookingRow key={index} booking={booking}></BookingRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
