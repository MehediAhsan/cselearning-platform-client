import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = ({course}) => {
    const {name} = course;
    return (
        <div className='text-center mt-8 font-semibold text-lg'>
            <Link >{name}</Link>
        </div>
    );
};

export default LeftSideBar;