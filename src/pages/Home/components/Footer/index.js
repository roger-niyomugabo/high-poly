import { Link } from 'react-router-dom';
import './index.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='terms-of-service'>
                <div>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p>Instagram</p>
                    <p>Facebook</p>
                </div>
            </div>
            <div className='apply-now'>
                <p>We invite you to join our team.</p>
                <Link to='#'>Apply Now</Link>
            </div>
        </div>
    );
}

export default Footer;
