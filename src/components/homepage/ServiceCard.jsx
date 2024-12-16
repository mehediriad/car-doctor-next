import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({service}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                   <Image src={service?.img} alt={service.title} width={420} height={300}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                   
                    <div className="card-actions justify-between mt-6">
                        <h4 className='text-lg font-semibold text-primary'>Price : ${service.price}</h4>
                        <button className="text-2xl text-primary">
                        <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;