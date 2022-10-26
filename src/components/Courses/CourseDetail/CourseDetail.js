import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const course = useLoaderData();
    const {name, image, description} = course;
    console.log(course);
    return (
        <div className='w-7/12 mx-auto my-10'>
            <h1 className='text-3xl font-bold mb-5 text-gray-700'>{name}</h1>
            <img src={image} alt="" />
            <div className='mt-5'>
                <h1 className='text-3xl font-bold text-gray-700 mb-5'>Details</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CourseDetail;