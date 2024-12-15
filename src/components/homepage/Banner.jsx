import React from 'react';

import slide1 from "@/assets/images/banner/1.jpg"
import slide2 from "@/assets/images/banner/2.jpg"
import slide3 from "@/assets/images/banner/3.jpg"
import slide4 from "@/assets/images/banner/4.jpg"
import slide5 from "@/assets/images/banner/5.jpg"
import slide6 from "@/assets/images/banner/6.jpg"
import Image from 'next/image';


const Banner = () => {
    





    const bannerSlides = [
    {
        title: "Affordable Price For Car Servicing",
        details: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        image: "https://i.ibb.co.com/HzhvZ4G/1.jpg",
        slideId: "slide1",
        prev: "#slide6",
        next: "slide2"
    },
    {
        title: "Affordable Price For Car Servicing",
        details: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        image: "https://i.ibb.co.com/0M0VhSV/2.jpg",
        slideId: "slide2",
        prev: "#slide1",
        next: "slide3"
    },
    {
        title: "Affordable Price For Car Servicing",
        details: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        image: "https://i.ibb.co.com/z51dpKK/3.jpg",
        slideId: "slide3",
        prev: "#slide2",
        next: "slide4"
    },
    {
        title: "Affordable Price For Car Servicing",
        details: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        image: "https://i.ibb.co.com/9wxFTgJ/4.jpg",
        slideId: "slide4",
        prev: "#slide3",
        next: "slide5"
    },
    {
        title: "Affordable Price For Car Servicing",
        details: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        image: "https://i.ibb.co.com/P9MDBqP/5.jpg",
        slideId: "slide5",
        prev: "#slide4",
        next: "slide6"
    },
    {
        title: "Affordable Price For Car Servicing",
        details: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        image: "https://i.ibb.co.com/bgT0r3M/6.jpg",
        slideId: "slide6",
        prev: "#slide5",
        next: "slide1"
    },
]
   
    
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="carousel w-full">
                 
               
                {
                    bannerSlides.map((slide, idx) => (
                        <div key={idx} id={slide.slideId} className="carousel-item relative w-full h-[90vh]"
                        style={{backgroundImage:`linear-gradient(45deg, rgba(21,21,21,1),rgba(21,21,21,0.1)),url(${slide.image})`}}
                        >
                            <div className='p-20 w-1/2 space-y-4 text-white'>
                                <h2 className='text-6xl font-bold'>{slide.title}</h2>
                                <p>{slide.details}</p>
                                <div className='space-x-6'>
                                    <button className='btn btn-primary'>Discover More</button>
                                    <button className='btn btn-outline border-white text-white'>Leatest Project</button>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href={`#${slide.prev}`} className="btn btn-circle">❮</a>
                                <a href={`#${slide.next}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Banner;



