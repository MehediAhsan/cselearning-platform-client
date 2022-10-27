import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseContent from './CourseContent/CourseContent';
import LeftSideBar from './LeftSideBar/LeftSideBar';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-5'>All Courses</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5'>
            <div className='md:col-span-1 lg:col-span-1 px-2 mt-4 shadow bg-gray-100 w-10/12 md:w-full mx-auto'>
                {
                    courses.map(course => <LeftSideBar key={course.id} course={course}></LeftSideBar>)
                }
            </div>
            <div className='md:col-span-2 lg:col-span-3 mt-4'>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-10'>
                    {
                        courses.map(course => <CourseContent key={course.id} course={course}></CourseContent>)
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Courses;