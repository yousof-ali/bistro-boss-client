import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import qutes from '../../../assets/home/review.png'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(result => {
                setReviews(result);
            })
    }, [])
    return (
        <div className='py-12'>
            <SectionTitle subHeading={"What Our Client Says"} Heading={'Testimonials'}></SectionTitle>
            <div className='p-4 '>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(single => <SwiperSlide key={single._id}>
                            <div className='px-24 flex flex-col items-center space-y-4'>
                                <img src={qutes} alt="" />
                                <Rating style={{ maxWidth: 250 }} value={single.rating}  />


                                <p className='text-center'>{single.details}</p>
                                <h2 className='text-center text-2xl font-semibold text-yellow-600'>{single.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;