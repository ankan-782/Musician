import React from 'react';
import useServices from '../../hooks/useServices';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {

    //custom hooks used
    const [services] = useServices();

    return (
        <div className="teachers container">
            <h1 className="text-center mb-5">Musician teachers Information</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    services.map(teacher => <Teacher
                        key={teacher.id}
                        teacher={teacher}
                    ></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;