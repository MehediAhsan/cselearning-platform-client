import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import ReactToPdf from 'react-to-pdf'
import { useRef } from 'react';
import { FaDownload } from "react-icons/fa";

const CourseDetail = () => {
    const course = useLoaderData();
    const {id, name, image, description, outcome} = course;
    console.log(course);
    const ref = useRef(null)
    return (
        <div className='grid grid-cols-4 gap-4 px-5 my-5'>
            <div className='col-span-1 border px-5 mt-4'>
                {
                    <LeftSideBar key={course.id} course={course}></LeftSideBar>
                }
            </div>
            <div className='col-span-3 px-20 mt-4' ref={ref}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold mb-5 text-gray-700'>Course Name: {name}</h1>
                    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                        {({toPdf}) => (
                            <button className='px-5 py-2 font-semibold border rounded dark:border-gray-700 dark:text-gray-700' onClick={toPdf}>
                            <FaDownload className='inline mr-2 h-4 w-4 mb-1 text-black'></FaDownload>PDF
                            </button>
                        )}
                    </ReactToPdf>
                </div>
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
                        <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-700 dark:text-white dark:border-violet-400">
                            Get premium access
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;