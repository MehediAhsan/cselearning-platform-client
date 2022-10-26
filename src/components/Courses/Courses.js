import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseContent from './CourseContent/CourseContent';
import LeftSideBar from './LeftSideBar/LeftSideBar';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='grid grid-cols-4 gap-4 px-5 my-5'>
            <div className='col-span-1 border px-5 mt-4'>
                {
                    courses.map(course => <LeftSideBar key={course.id} course={course}></LeftSideBar>)
                }
            </div>
            <div className='col-span-3 px-20 mt-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {
                        courses.map(course => <CourseContent key={course.id} course={course}></CourseContent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;