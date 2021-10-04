import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const { courseName, name, img } = props.teacher;
    return (
        <div className="col">
            <div className="card text-dark h-100 all-courses px-2 py-4">
                <div className="text-center">
                    <img src={img} className="teacher-img" alt="..." />
                </div>
                <div className="card-body mb-5 text-center">
                    <h1 className="card-title">{name}</h1>
                </div>
                <div className="text-center px-5">
                    <p>Takes classes of:</p>
                    <h4 className="course-bg">{courseName}</h4>
                </div>
            </div>
        </div>
    );
};

export default Teacher;