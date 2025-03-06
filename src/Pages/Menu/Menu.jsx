import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import background from '../../assets/menu/banner3.jpg'
import SectionTitle from '../../Components/SectionTitle';
import OurMenu from '../Home/Shared/OurMenu';
import desserts from '../../assets/menu/dessert-bg.jpeg'
import MenuItemCard from '../../Components/MenuItemCard';
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soups from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    useEffect(() => {
        document.title = "Bistro Boss | Menu";
    }, []);
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(result => {
                setMenu(result);
            })
    }, []);
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={background} title={"OUR MENU"} subtitle={"WOULD YOU LIKE TO TRY A DISH"}></Cover>
            <div className='my-12'>
                <SectionTitle Heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
                <div className='grid md:grid-cols-2 gap-8'>
                    {
                        menu.filter(single => single.category === 'popular').map((single, indx) => <MenuItemCard key={indx} item={single}></MenuItemCard>)
                    }

                </div>
                <div className='mt-6 text-center'>
                    <button className='btn btn-outline border-0 border-b-3'>ORDER YOUR FAVOURITE FOOD</button>
                </div>

            </div>



            <div className='my-12'>
                <Cover img={desserts} title={'Dessert'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
                <div className='my-8'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {
                            menu.filter(single => single.category === 'dessert').slice(2, 8).map((single, indx) => <MenuItemCard key={indx} item={single}></MenuItemCard>)
                        }

                    </div>
                    <div className='mt-6 text-center'>
                        <button className='btn btn-outline border-0 border-b-3'>ORDER YOUR FAVOURITE FOOD</button>
                    </div>

                </div>
            </div>
            <div>
                <Cover img={salad} title={'Salads'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
                <div className='my-8'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {
                            menu.filter(single => single.category === 'salad').map((single, indx) => <MenuItemCard key={indx} item={single}></MenuItemCard>)
                        }

                    </div>
                    <div className='mt-6 text-center'>
                        <button className='btn btn-outline border-0 border-b-3'>ORDER YOUR FAVOURITE FOOD</button>
                    </div>

                </div>
            </div>
            <div className='my-12'>
                <Cover img={soups} title={'Soups'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
                <div className='my-8'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {
                            menu.filter(single => single.category === 'soup').map((single, indx) => <MenuItemCard key={indx} item={single}></MenuItemCard>)
                        }

                    </div>
                    <div className='mt-6 text-center'>
                        <button className='btn btn-outline border-0 border-b-3'>ORDER YOUR FAVOURITE FOOD</button>
                    </div>

                </div>
            </div>
            <div className='mb-12'>
                <Cover img={pizza} title={'Pizza'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
                <div className='my-8'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {
                            menu.filter(single => single.category === 'pizza').map((single, indx) => <MenuItemCard key={indx} item={single}></MenuItemCard>)
                        }

                    </div>
                    <div className='mt-6 text-center'>
                        <button className='btn btn-outline border-0 border-b-3'>ORDER YOUR FAVOURITE FOOD</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Menu;