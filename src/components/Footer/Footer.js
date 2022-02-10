import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <div className="footer__follow">
                        <h2 className="footer__title">
                            Follow Us.
                        </h2>
                        <p className="footer__descr">
                            We are always looking for new <br/>
                            projects and collaborations. <br/>
                            Feel free to contact us.
                        </p>
                        <div className="footer__social">
                           <FontAwesomeIcon className="footer__icons" icon={faFacebookF}/>
                           <FontAwesomeIcon className="footer__icons" icon={faTwitter}/>
                           <FontAwesomeIcon className="footer__icons" icon={faInstagram}/>
                        </div>
                    </div>
                    <div className="footer__contact">
                        <h2 className="footer__title">
                            Contact Us.
                        </h2>
                        <p className="footer__descr">
                            One Apple Park Way <br/>
                            Cupertino, CA 95014
                        </p>
                        <p className="footer__tel">
                            (408) 996-1010
                        </p>
                        <p className="footer__link">
                            support@apple.com
                        </p>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;