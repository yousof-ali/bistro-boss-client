import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import background from '../../assets/menu/banner3.jpg'

const Menu = () => {
    useEffect(() => {
        document.title = "Bistro Boss | Menu";
    }, []);
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={background} title={"OUR MENU"} subtitle={"WOULD YOU LIKE TO TRY A DISH"}></Cover>
        </div>
    );
};

export default Menu;