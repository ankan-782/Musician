import React from 'react';
import './CourseInHome.css'

const CourseInHome = (props) => {
    const { name, img, courseName, price, duration } = props.course;
    return (
        <div className="col">
            <div className="card text-dark h-100 all-courses p-3">
                <div className="card-body">
                    <h1 className="card-title text-center">{courseName}</h1>
                </div>
                <p className="text-center">Teacher Info:</p>
                <div className="course-teacher-bg px-2 py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="text-center ps-2">{name}</h4>
                        <div className="text-center">
                            <img src={img} className="teacher-img-home" alt="..." />
                            <div className="d-flex mt-2">
                                <button className="btn ms-2"><i className="fab fa-facebook-f fs-6"></i></button>
                                <button className="btn ms-2"><i className="fab fa-linkedin-in fs-6"></i></button>
                                <button className="btn ms-2"><i className="fab fa-twitter fs-6"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="card-title text-center mt-4">Course Fee: <span className="ms-2 fee fs-3 fw-bold">{price}$</span></p>
                <p className="card-title text-center mb-4">Course duration: <span className="fs-5 duration">{duration}</span></p>
                <div className="card-footer text-center py-3">
                    <button className="btn service-btn">View Course</button>
                </div>
            </div>
        </div>
    );
};

export default CourseInHome;