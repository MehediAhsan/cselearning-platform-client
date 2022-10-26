import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    const course = useLoaderData();
    const {user} = useContext(AuthContext);
    return (
        <div className='text-center py-32'>
            <h1 className="text-4xl font-bold">Wellcome 
			<span className="text-violet-400">{user?.displayName},</span>
		    </h1>
            <h1 className="text-4xl font-bold pt-1">You get the access of {course.name} course</h1>
        </div>
    );
};

export default Checkout;