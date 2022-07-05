import React from "react";
import './Footer.css';

import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

import Wave from '../../img/wave.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>dininduchamikara1999@gmail.com</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/dcpmobileapps/" target="_blank">
                        <Insta color='white' size='3rem' />
                    </a>
                    <a href="https://www.facebook.com/DCPmobileApps/" target="_blank">
                        <Facebook color='white' size='3rem' />
                    </a>
                    <a href="https://github.com/DininduChamikara" target="_blank">
                        <Github color='white' size='3rem' />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer;