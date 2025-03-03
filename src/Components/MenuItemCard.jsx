import React from 'react';

const MenuItemCard = ({item}) => {
    const {name,image,price,recipe} = item
    return (
        <div className='flex gap-2'>
           <img className='w-24 rounded-b-[100px] rounded-r-[100px]' src={image} alt="" />
           <div>
            <h2 className='uppercase text-xl'>{name}-----------</h2>
            <p>{recipe}</p>
           </div>
           
           <p className='text-yellow-500 font-bold'>${price}</p>
        </div>
    );
};

export default MenuItemCard;