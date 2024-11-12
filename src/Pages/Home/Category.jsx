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
                Top Companies Hiring now
            </div>
            <section>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000, // Delay between slides in milliseconds
                        disableOnInteraction: false, // Continue autoplay after user interactions
                    }}
                    modules={[Pagination, Autoplay]}
                    className="lg:mx-20 mb-10"
                >
                    <SwiperSlide>
                        <img src="https://i.ytimg.com/vi/I7qYj0HqewA/hqdefault.jpg " className="h-52 w-52 rounded-2xl" />
                    </SwiperSlide>
                    <SwiperSlide><img src="http://www.mytotalretail.com/wp-content/uploads/sites/14/2016/01/amazon.com_.jpg" className="h-52 w-52 rounded-2xl" /></SwiperSlide>
                    <SwiperSlide><img src="https://media.glassdoor.com/sqll/249109/vxi-global-solutions-squareLogo-1659023728972.png" className="h-52 w-52 rounded-2xl" /></SwiperSlide>
                    <SwiperSlide><img src="https://besticoforyou.com/wp-content/uploads/2018/09/How-To-Use-HITBTC.jpg" className="h-52 w-52 rounded-2xl" /></SwiperSlide>
                    <SwiperSlide><img src="https://companies.naukri.com/accolite-jobs/wp-content/uploads/sites/35763/2021/06/accolite-OG-TAG-LOGO.png" className="h-52 w-52 rounded-2xl" /></SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ytimg.com/vi/I7qYj0HqewA/hqdefault.jpg " className="h-52 w-52 rounded-2xl" />
                    </SwiperSlide>
                    <SwiperSlide><img src="http://www.mytotalretail.com/wp-content/uploads/sites/14/2016/01/amazon.com_.jpg" className="h-52 w-52 rounded-2xl" /></SwiperSlide>
                    <SwiperSlide><img src="https://media.glassdoor.com/sqll/249109/vxi-global-solutions-squareLogo-1659023728972.png" className="h-52 w-52 rounded-2xl" /></SwiperSlide>
                    <SwiperSlide><img src="https://besticoforyou.com/wp-content/uploads/2018/09/How-To-Use-HITBTC.jpg" className="h-52 w-52 rounded-2xl" /></SwiperSlide>
                    <SwiperSlide><img src="https://companies.naukri.com/accolite-jobs/wp-content/uploads/sites/35763/2021/06/accolite-OG-TAG-LOGO.png" className="h-52 w-52 rounded-2xl" /></SwiperSlide>

                </Swiper>
            </section>
        </div>
    );
};

export default Category;