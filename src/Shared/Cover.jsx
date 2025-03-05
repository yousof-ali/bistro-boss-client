import React from 'react';

const Cover = ({ img, title, subtitle}) => {
    return (
        <div
            className="hero min-h-[50vh] "
            style={{
                backgroundImage: `url(${img})`,
            }}>
                
            <div className="hero-overlay"></div>
            <div className="hero-content w-[90%] md:w-[60%] md:py-12 py-8 text-white bg-black/50 mt-4  text-center">
                <div className="max-w-md">
                    <h1 className="mb-3 text-5xl font-bold">{title}</h1>
                    <p className="mb-5 text-sm ">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;