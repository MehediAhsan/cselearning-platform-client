import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = ({course}) => {
    const {name} = course;
    return (
        <div>
            <Link>{name}</Link>
        </div>
    );
};

export default LeftSideBar;