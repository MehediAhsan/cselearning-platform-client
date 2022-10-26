import React from 'react';
import { Link } from 'react-router-dom';

const CourseContent = ({course}) => {
    const {id, name, image, description} = course;
    console.log(course);
    return (
        <div className="flex overflow-hidden rounded-lg shadow-lg text-black">
            <img className='w-44' src={image} alt="" />

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800">{name}</h1>

                <p className="mt-2 text-sm text-gray-600">
                    {description?.slice(0, 100)}...
                </p>

                <div className="flex justify-between mt-3 item-center">
                    <Link to={`/course/${id}`} className="text-lg text-gray-700">Read More...</Link>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Get premium access</button>
                </div>
            </div>
        </div>
    );
};

export default CourseContent;