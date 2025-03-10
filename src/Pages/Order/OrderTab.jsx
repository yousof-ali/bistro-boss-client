import React from 'react';
import FoodCard from '../../Components/FoodCard';

const OrderTab = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                items.map(single => <FoodCard key={single._id} data={single}>

                </FoodCard>)
            }
        </div>
    );
};

export default OrderTab;