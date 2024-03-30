import { useEffect } from 'react';
import { bgvideo } from "../../assets";
import './home.css';

const Home = () => {
    useEffect(() => {
        const scrollDownIcon = document.querySelector('.scroll-down');
        const handleScroll = () => {
            if (window.scrollY > 100) {
                scrollDownIcon.style.opacity = '0';
                scrollDownIcon.style.bottom = '-40px';
            } else {
                scrollDownIcon.style.opacity = '1';
                scrollDownIcon.style.bottom = '20px';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="hero" id="home">
            <video autoPlay muted loop id="myVideo">
                <source src={bgvideo} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="hero-overlay">
                <div className="hero-content" data-aos="fade-up">
                    <h1>Jameel Shaikh</h1>
                    <p>I&apos;m a Full-Stack Web Developer,
                        specialising in building user-friendly, fast-loading websites & web-applications.</p>
                </div>
                <div className="scroll-down">
                    <a href="#about" className="scroll-down-link">
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home

