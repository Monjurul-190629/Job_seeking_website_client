import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Category = () => {
    return (
        <div className='my-10'>
            <div className='text-2xl font-semibold text-center my-10'>
                Top Companies Hiring Now
            </div>
            <section>
                <Swiper
                    spaceBetween={3}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                    }}
                    className="lg:mx-20 mb-10 "
                >
                    <SwiperSlide>
                        <img src="https://i.ytimg.com/vi/I7qYj0HqewA/hqdefault.jpg" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="http://www.mytotalretail.com/wp-content/uploads/sites/14/2016/01/amazon.com_.jpg" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://media.glassdoor.com/sqll/249109/vxi-global-solutions-squareLogo-1659023728972.png" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://besticoforyou.com/wp-content/uploads/2018/09/How-To-Use-HITBTC.jpg" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://companies.naukri.com/accolite-jobs/wp-content/uploads/sites/35763/2021/06/accolite-OG-TAG-LOGO.png" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ytimg.com/vi/I7qYj0HqewA/hqdefault.jpg" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="http://www.mytotalretail.com/wp-content/uploads/sites/14/2016/01/amazon.com_.jpg" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 7" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://media.glassdoor.com/sqll/249109/vxi-global-solutions-squareLogo-1659023728972.png" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 8" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://besticoforyou.com/wp-content/uploads/2018/09/How-To-Use-HITBTC.jpg" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 9" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://companies.naukri.com/accolite-jobs/wp-content/uploads/sites/35763/2021/06/accolite-OG-TAG-LOGO.png" className="  md:h-52  md:w-52 w-96 h-64 rounded-2xl " alt="Company 10" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;
