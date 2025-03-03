import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItemCard from '../../../Components/MenuItemCard';

const OurMenu = () => {
    const [menu,setMenu] = useState([]);
    useEffect(() =>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(result => {
            console.log(result)
            const popularMenu = result.filter(item => item.category === 'popular');
            setMenu(popularMenu)
        })
    } ,[]);
    console.log(menu);
    return (
        <div className='my-12'>
            <SectionTitle Heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    menu.map((single,indx) => <MenuItemCard key={indx} item={single}></MenuItemCard>)
                }
            </div>
        </div>
    );
};

export default OurMenu;