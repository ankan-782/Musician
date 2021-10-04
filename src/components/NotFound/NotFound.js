import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-4 error-msg">Error 404. Page Not Found</h1>
            <small>The page you are looking for is not found</small>
            <NavLink className="btn service-btn mt-3" to="/home">Go to homepage</NavLink>
        </div>
    );
};

export default NotFound;