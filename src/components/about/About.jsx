import Cube from '../../utils/3DCube/3dcube';
import './about.css';

const About = () => {
    return (
        <div className="about-container" data-aos="fade-up">
            <div className="intro">
                <div className="about-left">
                    <abbr>About Me</abbr>
                    <h1>Empowering the Web with Innovation and Expertise</h1>
                    <p>
                        Hi there! My name is Jameel Shaikh.
                        I am highly skilled in building responsive websites and web applications using modern technologies such as PHP, Laravel, MySQL, HTML, CSS, JavaScript, React, Bootstrap and etc. Additionally, I have extensive experience in customizing and developing WordPress websites, allowing clients to have full control over their content management systems.
                    </p>
                    <div className="social-links-container">
                        <abbr>My Links <i className="fa-solid fa-arrow-right"></i></abbr>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/dev-jameel/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/JameelShaikh32" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/jameel.dev/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="mailto:shaikhjameel17@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <Cube />
            </div>
            <div className="skills">
                <div><i className="fa-brands fa-html5"></i><h4>HTML</h4></div>
                <div><i className="fa-brands fa-css3-alt"></i><h4>CSS</h4></div>
                <div><i className="fa-brands fa-js-square"></i><h4>JavaScript</h4></div>
                <div><i className="fa-brands fa-react"></i><h4>React</h4></div>
                <div><i className="fa-brands fa-php"></i><h4>PHP</h4></div>
                <div><i className="fa-brands fa-laravel"></i><h4>Laravel</h4></div>
                <div><i className="fa-solid fa-fire-flame-curved"></i><h4>CodeIgniter</h4></div>
                <div><i className="fa-brands fa-node-js"></i><h4>NodeJs</h4></div>
                <div><i className="fa-brands fa-bootstrap"></i><h4>Bootstrap</h4></div>
                <div><i className="fa-brands fa-git-alt"></i><h4>Git</h4></div>
                <div><i className="fa-brands fa-envira"></i><h4>MongoDB</h4></div>
                <div><i className="fa-solid fa-database"></i><h4>MySQL</h4></div>
                <div><i className="fa-brands fa-wordpress"></i><h4>WordPress</h4></div>
            </div>
        </div>
    );
};

export default About;

