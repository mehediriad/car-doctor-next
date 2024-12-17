"use client"
import BookingRow from '@/components/Bookings/BookingRow/BookingRow';
import PageBanner from '@/components/shared/PageBanner';
import { useSession } from 'next-auth/react';
import React, { useState,useEffect } from 'react';

const Bookings = () => {
    const [bookings,setBookings] = useState([])
    const session = useSession()

    console.log(bookings);
    

    const loadData = async () =>{
        const res  = await fetch(`http://localhost:3000/api/booking/get-booking/${session?.data?.user?.email}`)
        const bookingData = await res.json()
        setBookings(bookingData?.data)
    }

    useEffect(()=>{
        loadData()
    },[session])

    const handleUpdate = () =>{}
    const handleBookingDelete = () =>{}

    return (
        <div className='max-w-7xl mx-auto'>
             <PageBanner title="Bookings" breadcrumb="Home/bookings"></PageBanner>
             <div className="my-20 lg:px-20">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              
                              bookings.map(booking => <BookingRow key={booking._id} handleUpdate={handleUpdate} handleBookingDelete={handleBookingDelete} booking={booking} ></BookingRow>)
                                
                            }
                            
                           
                           
                           
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;