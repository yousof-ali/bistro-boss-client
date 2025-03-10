import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import background from '../../assets/menu/banner3.jpg'
import SectionTitle from '../../Components/SectionTitle';
import dessert from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'
import userMenu from '../../hook/useMenu';
import Menucategory from './Menucategory';

const Menu = () => {
    const [menu] = userMenu();
    useEffect(() => {
        document.title = "Bistro Boss | Menu";
    }, []);
    
    const todayOffer = menu.filter(single => single.category === 'offered');
    const desserts = menu.filter(single => single.category === 'dessert');
    const salads = menu.filter(single => single.category === 'salad');
    const soups = menu.filter(single => single.category === 'soup');
    const pizzas = menu.filter(single => single.category === 'pizza')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={background} title={"OUR MENU"} subtitle={"WOULD YOU LIKE TO TRY A DISH"}></Cover>

            <div className='my-12'>
                <SectionTitle Heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
                    <Menucategory data={todayOffer}></Menucategory>
            </div>
            <div className='my-12'>
                    <Menucategory coverImg={dessert} coverIitle={'dessert'} data={desserts}></Menucategory>
            </div>
            <div>
                    <Menucategory coverImg={salad} coverIitle={'salad'} data={salads}></Menucategory>
            </div>
            <div className='my-12'>
                    <Menucategory coverIitle={"soups"} coverImg={soup} data={soups}></Menucategory>
            </div>
            <div className='mb-12'>
                    <Menucategory coverImg={pizza} coverIitle={'pizza'} data={pizzas}></Menucategory>
            </div>
        </div>
    );
};

export default Menu;