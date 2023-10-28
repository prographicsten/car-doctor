import PropTypes from "prop-types";
// import toast from "react-hot-toast";

const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {

    // console.log(booking);
    const {_id, name, email, date, service, img, amount, status} = booking || {};

    // const handleDelete = id => {
    //     const proceed = confirm("Are you sure you want to delete");
    //     if(proceed) {
    //         fetch(`http://localhost:5000/bookings/${id}`, {
    //             method: 'DELETE',
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if(data.deletedCount > 0) {
    //                 toast.success('Deleted successfully');
    //             }
    //         })
    //     }
    // };

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle bg-black hover:bg-[#FF3811]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 font-bold text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask rounded-lg w-24 h-20">
                        {
                            img && <img
                            src={img}
                            alt="Avatar Tailwind CSS Component"
                            />
                        }
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>
                {service}
            </td>
            <td>
                {amount}
            </td>
            <td>{email}</td>
            <td>{date}</td>
            <th>
            {
                status === 'confirm' ? 
                <button className="btn btn-ghost btn-xs text-green-500">Confirmed</button> 
                : 
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
            }
            </th>
        </tr>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.any,
    handleDelete: PropTypes.any,
    handleBookingConfirm: PropTypes.any
};

export default BookingRow;