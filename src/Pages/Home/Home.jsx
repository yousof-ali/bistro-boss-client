import React from 'react';
import Slider from './Shared/Slider';
import OrderOutline from './Shared/OrderOutline';
import background from './../../assets/home/chef-service.jpg'
import OurMenu from './Shared/OurMenu';

const Home = () => {
    return (
        <div className='relative'>
            <Slider></Slider>
            <OrderOutline></OrderOutline>


            <div className="relative">
                
                <img className="max-h-[700px] w-full object-cover" src={background} alt="Banner" />

                <div className="absolute top-1/2 left-1/2 w-full max-w-[90%] md:w-1/2 lg:p-8 p-6 bg-base-100 bg-opacity-80 text-center transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg">
                    <h2 className="text-3xl  text-gray-800">Bistro Boss</h2>
                    <p className="text-gray-700 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>

            <OurMenu></OurMenu>


        </div>
    );
};

export default Home;