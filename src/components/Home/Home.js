import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                <div className="max-w-xl mb-6">
                    <h2 className="max-w-md mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                    The Learning Platform
                    for CSE Student
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        This online learning platform expecially focus to cse student. We includes different types of courses algorithms, data structures, dbms, software engineering etc.
                    </p>
                </div>
                <div className="">
                    <Link
                    to="/courses"
                    className="inline-flex items-center justify-center h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    >
                    <span className="mr-2">Explore Courses</span>
                    <FaArrowRight className='mt-1'></FaArrowRight>
                    </Link>
                </div>
                </div>
                <div className="relative lg:w-1/2">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                />
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;