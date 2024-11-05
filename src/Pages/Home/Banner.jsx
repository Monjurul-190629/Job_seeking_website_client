import React, { useEffect, useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css'

const Banner = () => {
    const [swiper, setSwiper] = useState(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiper !== null) {
            const interval = setInterval(() => {
                if (swiper.isEnd) {
                    swiper.slideTo(0); // If it's the last slide, go back to the first one
                } else {
                    swiper.slideNext(); // Go to the next slide
                }
            }, 3000);

            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
        }
    }, [swiper]);
    return (
        <div>
            <Swiper
                ref={swiperRef}
                onSwiper={setSwiper}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false // To ensure autoplay continues after user interaction
                }}
            >
                <SwiperSlide className='banner-slide'><img src="https://i.ibb.co/3FwFn6W/job-posting-website-900x500.jpg" className='w-screen h-[600px] banner-image ' />
                    <div className="banner-content">
                        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5'>Welcome to Our Job-Website</h1>
                        <p className='text-white font-bold md:text-xl text-justify'>Find your dream job today! Browse thousands of job listings, explore various industries, and apply online effortlessly. Whether you're a seasoned professional or just starting your career journey, our platform offers opportunities for everyone. Join us today and take the next step towards your future success!</p>
                    </div>
                    <div className="banner-overlay"></div>
                </SwiperSlide>

                <SwiperSlide className='banner-slide'><img src="https://pod-people.co.uk/wp-content/uploads/2016/05/commercial-jobs-industry.jpg" className='w-screen h-[600px] banner-image ' />
                    <div className="banner-content">
                        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5'>Welcome to Our Job-Website</h1>
                        <p className='text-white font-bold  md:text-xl text-justify'>Find your dream job today! Browse thousands of job listings, explore various industries, and apply online effortlessly. Whether you're a seasoned professional or just starting your career journey, our platform offers opportunities for everyone. Join us today and take the next step towards your future success!</p>
                    </div>
                    <div className="banner-overlay"></div>
                </SwiperSlide>

                <SwiperSlide className='banner-slide'><img src="https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2017/08/07073632/bigstock-part-time-job-D-rendering-t-174023476.jpg" className='w-screen h-[600px] banner-image ' />
                    <div className="banner-content">
                        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5'>Welcome to Our Job-Website</h1>
                        <p className='text-white font-bold  md:text-xl text-justify'>Find your dream job today! Browse thousands of job listings, explore various industries, and apply online effortlessly. Whether you're a seasoned professional or just starting your career journey, our platform offers opportunities for everyone. Join us today and take the next step towards your future success!</p>
                    </div>
                    <div className="banner-overlay"></div>
                </SwiperSlide>

                <SwiperSlide className='banner-slide'><img src="https://i.pinimg.com/originals/ab/f9/86/abf98643d2b2ec0f43a1ca926312ed13.jpg" className='w-screen h-[600px] banner-image ' />
                    <div className="banner-content">
                        <h1 className='text-white font-bold text-2xl md:text-4xl mb-5'>Welcome to Our Job-Website</h1>
                        <p className='text-white font-bold md:text-xl text-justify'>Find your dream job today! Browse thousands of job listings, explore various industries, and apply online effortlessly. Whether you're a seasoned professional or just starting your career journey, our platform offers opportunities for everyone. Join us today and take the next step towards your future success!</p>
                    </div>
                    <div className="banner-overlay"></div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;