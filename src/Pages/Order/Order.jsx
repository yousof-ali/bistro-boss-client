import React, { useState } from 'react';
import Cover from '../../Shared/Cover';
import background from '../../assets/shop/banner2.jpg'
import userMenu from '../../hook/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const [menu] = userMenu();
    const categoryList = ['salad', 'pizza', 'soups', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categoryList.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const drinks = menu.filter(single => single.category === 'drinks');
    const desserts = menu.filter(single => single.category === 'dessert');
    const salads = menu.filter(single => single.category === 'salad');
    const soups = menu.filter(single => single.category === 'soup');
    const pizzas = menu.filter(single => single.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <Cover img={background} title={'Our Shop'}></Cover>

            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='my-8 mx-1'>
                        <TabList>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}>

                        </OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;