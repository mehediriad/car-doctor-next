"use client"
import PageBanner from '@/components/shared/PageBanner';
import { getServiceDetails } from '@/lib/getServices';
import { useSession } from 'next-auth/react';
import React, { use, useEffect, useRef, useState } from 'react';

const CheckOut = ({ params }) => {
    const [service, setService] = useState({})
    const session = useSession();
    const messageRef = useRef();
    const { data } = session;

    // Unwrap the `params` Promise using `use()`
    const unwrappedParams = use(params);

    // Access the `id` property
    const { id } = unwrappedParams;


    const loadData = async () => {
        const serviceData = await getServiceDetails(id)

        setService(serviceData)
    }

    useEffect(() => {
        loadData()

    }, [params])

    const handleCheckOut = async (e) => {
        e.preventDefault()

        const userName = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const title = service.title;
        const img = service.img;
        const date = e.target.serviceDate.value;
        const price = service.price;
        const message = messageRef.current.value || "";

        const bookingData = {
            userName,
            email,
            phone,
            title,
            img,
            date,
            price,
            message,
            serviceId : service._id
        }

        const res = await fetch("http://localhost:3000/api/booking/create-new",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(bookingData)
        })
        const resData = await res.json()

        console.log(resData);
        
        
    }
    return (
        <div className='max-w-7xl mx-auto text-black'>
            <PageBanner title="CheckOut" breadcrumb="Home/CheckOut" />
            <div className="my-24">
                <div className="card w-full shrink-0 shadow-2xl">
                    <div className="px-20 py-10">

                        <form onSubmit={handleCheckOut} className="card-body">


                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Name</span>
                                    </label>
                                    <input name="name" defaultValue={data?.user?.name} type="text" placeholder="name" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Service Date</span>
                                    </label>
                                    <input name="serviceDate" defaultValue={new Date().getDate()} type="date" placeholder="Service Date" className="input input-bordered bg-white" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Your Phone</span>
                                    </label>
                                    <input name="phone" type="text" placeholder="phone" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input name="email" readOnly defaultValue={data?.user?.email} type="email" placeholder="email" className="input input-bordered bg-white" required />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Service Name</span>
                                    </label>
                                    <input name="serviceName" readOnly defaultValue={service.title} type="text" placeholder="service" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-black">Price</span>
                                    </label>
                                    <input name="price" readOnly defaultValue={service.price} type="text" placeholder="price" className="input input-bordered bg-white" required />
                                </div>
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Message</span>
                                </label>
                                <textarea ref={messageRef} className="input input-bordered bg-white" placeholder="Message" rows="10" name="" id=""></textarea>


                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#FF3811] text-white">Order Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;