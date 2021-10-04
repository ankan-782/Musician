import React from 'react';
import useServices from '../../hooks/useServices';
import './AboutUs.css'

const AboutUs = () => {

    const [services] = useServices();

    return (
        <div className="about d-flex flex-column justify-content-center align-items-center container">
            <div className="about-brand">
                <div className="about-musician d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="text-uppercase About-brand-name mb-4">M u s i c i a n</h1>
                        <p>A well organised online platform where you can learn music, learn to play instruments and doing rock in your life</p>
                        <hr className="line-break w-100 mt-4"></hr>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="https://www.facebook.com/ankan.roy.50999/" target="_blank" className="btn ms-1" rel="noreferrer"><i className="fab fa-facebook-f fs-4 text-white"></i></a>
                            <a href="https://www.instagram.com/ankan_782/" target="_blank" className="btn ms-1" rel="noreferrer"><i className="fab fa-instagram fs-4 text-white"></i></a>
                            <a href="https://twitter.com/AvijitAnkan" target="_blank" className="btn ms-1" rel="noreferrer"><i className="fab fa-twitter fs-4 text-white"></i></a>
                        </div>
                    </div>
                </div>
                <div className="about-musician-details">
                    <p>Music is the art of arranging sounds in time through the elements of melody, harmony, rhythm, and timbre. It is one of the universal cultural aspects of all human societies.</p>
                    <p>For feeling music in a better way, Musician organization arranges a online platform to learn music for all music lovers.</p>
                    <p>Here, all ages of people can learn music, can learn songs, learn to play musical instruments through this online platform.</p>
                    <p>Here, all of our courses are well organised. So that, users can know anything about every details of any particular course/service.</p>
                    <p>Here, best music teacher is accociated with every particular course.</p>
                </div>
            </div>
            <div className="musician-info-bg d-flex justify-content-center align-items-center w-100 mt-5">
                <div className="musician-info text-center">
                    <h2 className="mb-5">Musician So Far...</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-center">
                            <h1 className="fw-bold">{services.length}</h1>
                            <p>Teachers</p>
                        </div>
                        <div className="text-center">
                            <h1 className="fw-bold">200</h1>
                            <p>Users</p>
                        </div>
                        <div className="text-center">
                            <h1 className="fw-bold">{services.length}</h1>
                            <p>Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;