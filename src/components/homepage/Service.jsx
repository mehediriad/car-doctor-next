import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import { services } from '@/lib/services';
import ServiceCard from './ServiceCard';

const Service = () => {
    
    
    return (
        <div className='max-w-7xl mx-auto py-20'>
            <div className='w-1/3 mx-auto text-center'>
                <SectionTitle
                    heading={`Service`}
                    title={`Our Service Area`}
                    subTitle={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
                />
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    services.map(service =>(
                        <ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;