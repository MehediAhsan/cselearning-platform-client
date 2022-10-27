import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = ({course}) => {
    const {id, name} = course;
    return (
        <li className=' my-4 font-semibold text-lg text-indigo-700 py-3 hover:bg-gray-200'>
            <Link to={`/course/${id}`} >{name}</Link>
        </li>
    );
};

export default LeftSideBar;