import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import chefService from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div 
            className="relative text-white bg-cover bg-fixed bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${chefService})` }}
        >
            
            <div className="absolute inset-0 bg-black/50"></div>

         
            <div className="relative py-16 md:px-24">
                <SectionTitle Heading={'FROM OUR MENU'} subHeading={'Check it out'} />
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div>
                        <img className="rounded shadow-lg" src={chefService} alt="Featured Dish" />
                    </div>

                    <div className="text-white">
                        <h4 className="text-xl">March 20, 2023</h4>
                        <h2 className="text-2xl font-bold">WHERE CAN I GET SOME?</h2>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt 
                            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore 
                            consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn mt-4 btn-outline border-0 border-b-4">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
