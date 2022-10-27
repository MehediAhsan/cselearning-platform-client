import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { HiStar } from "react-icons/hi";

const CourseContent = ({course}) => {
    const {id, name, image, description, rating} = course;
    return (
        <div className="w-10/12 mx-auto border-2 border-gray-200 border-opacity-80 rounded-lg overflow-hidden">
          <img className="h-64 w-full object-cover object-center" src={image} alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
            <p className="leading-relaxed mb-3">
                {description?.slice(0, 100)}...
            </p>
            <div className="flex items-center flex-wrap">
              <Link to={`/course/${id}`} className="text-indigo-700 inline-flex items-center md:mb-2 lg:mb-0 font-semibold">Learn More
                <FaArrowRight className='w-4 h-4 ml-2'></FaArrowRight>
              </Link>
              <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 font-semibold">
                <HiStar className='w-5 h-5 mr-1 text-yellow-500'></HiStar>{rating}
              </span>
            </div>
          </div>
        </div>
    );
};

export default CourseContent;