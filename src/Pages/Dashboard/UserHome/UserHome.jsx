import React from 'react';
import useAuth from '../../../hook/useAuth';

const UserHome = () => {
    const { user } = useAuth()
    return (
        <div className='px-4 py-8'>
            <div>
                {
                    user ? <h2 className='text-3xl font-semibold'>Hi, <span className='text-orange-400'>{user.displayName}</span> WellCome!</h2> : <h2 className='text-3xl font-semibold'>Hi WellCome Back!</h2>
                }

            </div>
        </div>
    );
};

export default UserHome;