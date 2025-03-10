import React from 'react';
import MenuItemCard from '../../Components/MenuItemCard';
import Cover from '../../Shared/Cover';
import { Link } from 'react-router-dom';

const Menucategory = ({ data,coverImg,coverIitle }) => {
    return (
        <div>
            {
                coverImg&&<Cover img={coverImg} title={coverIitle} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
            }
            
            <div className='my-8'>
                <div className='grid md:grid-cols-2 gap-8'>
                    {
                        data.map((single, indx) => <MenuItemCard key={indx} item={single}></MenuItemCard>)
                    }

                </div>
                {
                    coverIitle&&<div className='mt-6 text-center'>
                    <Link to={`/order/${coverIitle}`}>
                    <button  className='btn btn-outline border-0 border-b-3'>ORDER YOUR FAVOURITE FOOD</button></Link>
                 </div>
                }
            </div>
        </div>
    );
};

export default Menucategory;