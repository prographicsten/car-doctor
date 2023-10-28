import PropTypes from "prop-types";

const BookingRow = ({booking}) => {

    // console.log(booking);
    const {name, email, date, service, img, amount} = booking || {};

    return (
        <tr>
            <th>
                <button className="btn btn-sm btn-circle bg-black hover:bg-[#FF3811]">
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
            <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.any
};

export default BookingRow;