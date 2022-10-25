import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseContent from './CourseContent/CourseContent';
import LeftSideBar from './LeftSideBar/LeftSideBar';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1'>
                {
                    courses.map(course => <LeftSideBar key={course.id} course={course}></LeftSideBar>)
                }
            </div>
            <div className='col-span-3'>
                <div className='grid grid-cols-2 gap-6'>
                    {
                        courses.map(course => <CourseContent key={course.id} course={course}></CourseContent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;