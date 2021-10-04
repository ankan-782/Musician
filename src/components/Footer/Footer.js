import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-uppercase">M u s i c i a n</h2>
            <hr className="line-break"></hr>
            <p className="copyright">© 2021  |  Avijit Roy  |  Musician organization</p>
            <div className="d-flex justify-content-center align-items-center">
                <a href="https://www.facebook.com/ankan.roy.50999/" target="_blank" className="btn ms-1" rel="noreferrer"><i className="fab fa-facebook-f fs-4 text-white"></i></a>
                <a href="https://www.instagram.com/ankan_782/" target="_blank" className="btn ms-1" rel="noreferrer"><i className="fab fa-instagram fs-4 text-white"></i></a>
                <a href="https://twitter.com/AvijitAnkan" target="_blank" className="btn ms-1" rel="noreferrer"><i className="fab fa-twitter fs-4 text-white"></i></a>
            </div>
        </div>
    );
};

export default Footer;