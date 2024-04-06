import { useEffect, useState, useRef } from 'react';
import { myResume } from '../../assets';
import './navbar.css';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const menuToggle = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function toggleMenu() {
        menuToggle.current.classList.toggle('menu-active');
    }
    return (
        <div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
            <div className="navbar">
                <div className="navbar-logo">
                    <a href="#home">
                        {/* <img src={logo} alt="logo" id='logo' /> */}
                        <h1 id='logo'>J<abbr>.</abbr></h1>
                    </a>
                </div>
                <div className="navbar-menu" ref={menuToggle}>
                    <ul className="navbar-menu-list">
                        <a href="#home" onClick={toggleMenu}>Home</a>
                        <a href="#about" onClick={toggleMenu}>About</a>
                        <a href="#services" onClick={toggleMenu}>Services</a>
                        <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </ul>
                    <a className="download-cv-btn" href={myResume} download={false}>
                        Download CV
                    </a>
                </div>
            </div>
            <i className="fa-solid fa-bars" id='menu-toggle' onClick={toggleMenu}></i>
        </div>
    );
};

export default Navbar;

