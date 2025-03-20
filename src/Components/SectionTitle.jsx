import React from 'react';

const SectionTitle = ({subHeading,Heading}) => {
    return (
        <div className='md:w-8/14 mx-auto'>
            <p className='text-center text-yellow-500'>---{subHeading}---</p>
            <h2 className='text-4xl text-center py-2 mt-1 mb-8 border-y-2'>{Heading}</h2>
        </div>
    );
};

export default SectionTitle;