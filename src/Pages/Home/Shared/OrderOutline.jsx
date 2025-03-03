import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle';

const OrderOutline = () => {
    return (
        <div className='my-12'>
            
                <SectionTitle subHeading={'From 11:00am to 10:00pm'} Heading={'ORDER ONLINE'}></SectionTitle>
          
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='-mt-12 text-center text-white   text-3xl'>SALAD</h2>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide2} alt="" />
                <h2 className='-mt-12 text-center text-white   text-3xl'>SOUPS</h2>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide3} alt="" />
                <h2 className='-mt-12 text-center text-white   text-3xl'>PIZZA</h2>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slide4} alt="" />
                <h2 className='-mt-12 text-center text-white   text-3xl'>DESSERT</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img  src={slide5} alt="" />
                    <h2 className=' text-center text-white   text-3xl'>SALAD</h2>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default OrderOutline;