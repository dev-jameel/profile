import Divider from '../divider/Divider';
import './contact.css';

const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="contact-container">
            <Divider />
            <div className="contact-content">
                <abbr>Contact</abbr>
                <h1>Get in Touch</h1>
                <p>Email me if you want to connect! You can also find me on <a href="https://www.linkedin.com/in/dev-jameel" target='_blank'>Linkedin</a> or <a href='https://www.instagram.com/jameel.dev' target='_blank'>Instagram</a>.</p>
                <h4>
                    <a href="mailto:shaikhjameel17@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-envelope"></i>
                        <span>shaikhjameel17@gmail.com</span>
                    </a>
                </h4>
            </div>
            <hr />
            <div className="copyrights">
                <p>© {currentYear} Jameel Shaikh | All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Contact;