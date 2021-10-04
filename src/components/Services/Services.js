import useServices from '../../hooks/useServices';
import Course from '../Course/Course';
import './Services.css'

const Services = () => {

    //custom hooks used
    const [services] = useServices();

    return (
        <div className="services container">
            <h1 className="text-center mb-5">Musician's all course</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                {
                    services.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Services;