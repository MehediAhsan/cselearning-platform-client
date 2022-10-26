import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = ({course}) => {
    const {id, name} = course;
    return (
        <div className=' my-4 font-semibold text-lg text-gray-700 py-3'>
            <Link to={`/course/${id}`} >{name}</Link>
        </div>
    );
};

export default LeftSideBar;