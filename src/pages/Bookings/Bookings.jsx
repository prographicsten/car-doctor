import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import toast from "react-hot-toast";

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


  const handleDelete = id => {
    const proceed = confirm("Are you sure you want to delete");
    if(proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                toast.success('Deleted successfully');
                const remaining = bookings?.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
        })
    }
};

const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({status: 'confirm'}),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            // update state
            const remaining = bookings?.filter(booking => booking._id !== id);
            const updated = bookings?.find(booking => booking._id === id);
            updated.status = 'confirm'
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
        }
    })
};

return (
    <div>
        {/* <h2 className="text-5xl">Your Bookings: {bookings?.length}</h2> */}

    {/* bookings banner */}
    <div style={bookingsBanner} className="relative xl:rounded-xl my-5" >
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
                bookings?.map((booking, index) => <BookingRow 
                key={index} 
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
                ></BookingRow>)
            }
            </tbody>
        </table>
        </div>
    </div>
);
};

export default Bookings;
