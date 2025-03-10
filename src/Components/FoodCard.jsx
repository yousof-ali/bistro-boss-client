import React from 'react';

const FoodCard = ({data}) => {
    const {name,price,image,recipe} = data
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className='relative'>
                <img
                    src={image}
                    alt="food" />
                     <p className='p-1 rounded bg-black absolute top-4 right-4 text-white'>${price}</p>
            </figure>
            <div className="card-body">
                <h2 className="text-center text-xl font-semibold ">{name}</h2>
                <p>{recipe}</p>
               
                <div className="card-actions justify-center mt-4">
                    <button className="btn btn-neutral">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;