import Image from 'next/image';
import React from 'react';
import person from "@/assets/images/about_us/person.jpg"
import parts from "@/assets/images/about_us/parts.jpg"
import SectionTitle from '../shared/SectionTitle';

const AboutUs = () => {
    return (
        <div className='flex justify-between max-w-7xl mx-auto py-20'>
            <div className='relative w-4/12'>
                <div className='rounded-lg'>
                    <Image src={person} alt='person' className='rounded-lg' />
                </div>
                <div className='absolute top-1/3 -right-1/4 left-1/2 border-8 rounded-xl'>
                    <Image src={parts} alt='parts' className='rounded-lg'/>
                </div>
            </div>
            <div className='w-6/12 space-y-7'>
                <SectionTitle 
                heading={`About Us`}
                title={`We are qualified & of experience in this field`}
                subTitle={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
                />
                <button className='btn btn-primary'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;