import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf'
import { useRef } from 'react';
import { FaDownload } from "react-icons/fa";

const CourseDetail = () => {
    const course = useLoaderData();
    const {id, name, image, description, outcome} = course;
    const ref = useRef(null)
    return (
        <div className='w-full md:w-8/12 lg:w-7/12 mx-auto my-10 shadow-lg border p-6'>
            <div ref={ref}>
                <div className='flex justify-between items-center mb-8'>
                    <h1 className='text-3xl font-semibold text-gray-700'>{name}</h1>
                    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                        {({toPdf}) => (
                            <button className='px-4 py-2 font-semibold border rounded dark:border-gray-700 dark:text-gray-700' onClick={toPdf}>
                            <FaDownload className='inline mr-2 h-4 w-4 mb-1 text-black'></FaDownload>PDF
                            </button>
                        )}
                    </ReactToPdf>
                </div>
                <img className='h-80' src={image} alt="" />
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
                        <button type="button" className="px-3 py-2 border rounded-md dark:bg-violet-700 dark:text-white dark:border-violet-400 text-lg">
                            Get premium access
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;