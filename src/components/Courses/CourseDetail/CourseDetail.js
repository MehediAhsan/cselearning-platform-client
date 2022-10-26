import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideBar from '../LeftSideBar/LeftSideBar';

const CourseDetail = () => {
    const course = useLoaderData();
    const {id, name, image, description, outcome} = course;
    console.log(course);
    return (
        <div className='grid grid-cols-4 gap-4 px-5 my-5'>
            <div className='col-span-1 border px-5 mt-4'>
                {
                    <LeftSideBar key={course.id} course={course}></LeftSideBar>
                }
            </div>
            <div className='col-span-3 px-20 mt-4'>
                <h1 className='text-3xl font-semibold mb-5 text-gray-700'>Course Name: {name}</h1>
                <img className='h-96' src={image} alt="" />
                <div className='mt-5'>
                    <h1 className='text-3xl font-semibold text-gray-700 mb-5'>Course Details</h1>
                    <p>{description}</p>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-gray-700 my-5'>Course Outcomes</h1>
                    {
                        outcome?.map( (oc, idx) => <li key={idx} className="mb-3">{oc}</li>)
                    }
                </div>
                <div className='flex justify-end my-10'>
                    <Link to={`/checkout/${id}`}>
                        <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                            Get premium access
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;