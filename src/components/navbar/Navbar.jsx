import { useEffect, useState, useRef } from 'react';
// import { logo } from '../../assets';
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
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                        <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                    <div className="contact-btn">
                        <a href="#contact">Get In Touch</a>
                    </div>
                </div>
            </div>
            <i className="fa-solid fa-bars" id='menu-toggle' onClick={toggleMenu}></i>
        </div>
    );
};

export default Navbar;

