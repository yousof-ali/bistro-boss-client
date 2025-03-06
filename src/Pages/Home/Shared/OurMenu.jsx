import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItemCard from '../../../Components/MenuItemCard';
import userMenu from '../../../hook/useMenu';

const OurMenu = () => {
    const [menu] = userMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');
    return (
        <div className='my-12'>
            <SectionTitle Heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    popularMenu.map((single,indx) => <MenuItemCard key={indx} item={single}></MenuItemCard>)
                }
                
            </div>
            <div className='text-center my-4'>
            <button className='btn btn-outline border-0 border-b-2 '>More Mneu</button>
            </div>
        </div>
    );
};

export default OurMenu;