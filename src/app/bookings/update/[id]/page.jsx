"use client"
import PageBanner from '@/components/shared/PageBanner';
import { useRouter } from 'next/navigation';

import React, { use, useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

const UpdateBooking = ({ params }) => {
    const [booking, setBooking] = useState({})
    const router = useRouter()
    // const session = useSession();
    const messageRef = useRef();
    // const { data } = session;

    // Unwrap the `params` Promise using `use()`
    const unwrappedParams = use(params);

    // Access the `id` property
    const { id } = unwrappedParams;


    const loadData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/booking/update/${id}`)
        const bookingData = await res.json()

        setBooking(bookingData.data)
    }

    useEffect(() => {
        loadData()
        
    }, [params])

    const handleUpdateBooking = async (e) => {
        e.preventDefault()

       
        const phone = e.target.phone.value;
        const date = e.target.serviceDate.value;
        const message = messageRef.current.value || "";

        const updateData = {
            phone,
            date,
            message
        }

        // console.log(updateData);
        

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/booking/update/${id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateData)
        })
        const resData = await res.json()

        if(resData?.data?.modifiedCount>0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: resData?.message,
                showConfirmButton: false,
                timer: 1500
              });
            router.push("/bookings")
        }

        console.log(resData);
        
        
    }
    return (
        <div className='max-w-7xl mx-auto text-black'>
            <PageBanner title="Update Booking" breadcrumb="Home/booking/update" />
            <div className="my-24">
                <div className="card w-full shrink-0 shadow-2xl">
                    <div className="px-20 py-10">

                        <form onSubmit={handleUpdateBooking} className="card-body">


                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Name</span>
                                    </label>
                                    <input name="name" defaultValue={booking.userName} readOnly type="text" placeholder="name" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Service Date</span>
                                    </label>
                                    <input name="serviceDate" defaultValue={booking.date} type="date" placeholder="Service Date" className="input input-bordered bg-white" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Your Phone</span>
                                    </label>
                                    <input name="phone" type="text" defaultValue={booking.phone} placeholder="phone" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input name="email" readOnly defaultValue={booking.email} type="email" placeholder="email" className="input input-bordered bg-white" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Service Name</span>
                                    </label>
                                    <input name="serviceName" readOnly defaultValue={booking.title} type="text" placeholder="service" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Price</span>
                                    </label>
                                    <input name="price" readOnly defaultValue={booking.price} type="text" placeholder="price" className="input input-bordered bg-white" required />
                                </div>
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Message</span>
                                </label>
                                <textarea defaultValue={booking.message? booking.message: ""} ref={messageRef} className="input input-bordered bg-white" placeholder="Message" rows="10" name="" id=""></textarea>


                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#FF3811] text-white">Update Booking</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateBooking;