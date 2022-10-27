import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    const course = useLoaderData();
    const {name, price} = course;
    const {user} = useContext(AuthContext);
    return (
        <div className='text-center p-10 w-11/12 md:w-8/12 lg:w-7/12 mx-auto border my-32 shadow'>
            <h1 className="text-2xl md:text-3xl font-bold">Wellcome {user?.displayName},
		    </h1>
            <h1 className="text-2xl md:text-3xl font-bold pt-1">You get the access of {name} course</h1>
            <div className='flex justify-between items-center px-2 md:px-16 lg:px-20 mt-10'>
                <span className='text-xl font-semibold'>Price: ${price}</span>
                <button type="button" className="px-3 py-2 border rounded-md dark:bg-violet-700 dark:text-white dark:border-violet-400 text-lg">
                    Payment
                </button>
            </div>
        </div>
    );
};

export default Checkout;