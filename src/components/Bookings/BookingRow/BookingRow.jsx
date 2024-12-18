import { IoIosCloseCircle } from "react-icons/io";
import React from 'react';
import Image from "next/image";
import Link from "next/link";

const BookingRow = ({ booking, handleUpdate,handleBookingDelete }) => {
    const { _id, img, title, price, date, email, status } = booking;
    return (
        <tr className="text-black">
            <th>
                <button onClick={()=>handleBookingDelete(_id)} className="text-4xl"><IoIosCloseCircle /></button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded h-24 w-24">
                            <Image
                                src={img}
                                alt="img"
                                width={100}
                                height={100} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">Quick Service</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{email}</td>
            <td>{date}</td>
            <th>
                <Link href={`/bookings/update/${_id}`}>
                <button type="submit" className="btn btn-sm bg-[#FF3811] text-white rounded-l-none">Update</button>
                </Link>
            </th>
        </tr>
    );
};

export default BookingRow;