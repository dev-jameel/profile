import { useEffect } from 'react';
import { services } from '../../constants';
import './service.css';
import AOS from 'aos/dist/aos.js';

const Service = () => {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out' });
    }, []);

    return (
        <div className="service-container" id='services' data-aos="fade-up">
            <div className="service-content">
                <abbr>Service</abbr>
                <h1>Available Services that I can work on</h1>
                <p>
                    As a Full Stack Web Developer, I specialize in creating comprehensive
                    web solutions that span both the front-end and back-end of your
                    projects.
                </p>
            </div>
            <div className="services-list">
                {services.map((service) => (
                    <div key={service.title} className="service-card">
                        <h2>{service.title}</h2>
                        <img src={service.icon} alt="skill icon" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
