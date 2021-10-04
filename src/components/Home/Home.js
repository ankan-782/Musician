import React from 'react';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import CourseInHome from '../CoursesInHome/CourseInHome';
import './Home.css'

const Home = () => {
    const [services] = useServices();
    return (
        <div className="homepage">
            <div className="home-container d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-uppercase brand">M u s i c i a n</h1>
                <small className="text-center mt-4">A well organised online platform where you can learn music, instruments <br /> and doing rock in your life</small>
                <NavLink className="btn service-btn mt-4" to="/services">Go to services</NavLink>
            </div>
            <div className="service-container text-center container">
            <h1 className="text-center mb-5">Musician services</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        services.slice(0, 4).map(course => <CourseInHome
                            key={course.id}
                            course={course}
                        ></CourseInHome>)
                    }
                </div>
                <NavLink className="btn service-btn my-5" to="/services">View all courses in Service section</NavLink>
            </div>
        </div>
    );
};

export default Home;