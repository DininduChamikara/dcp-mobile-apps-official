import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import Facebook from '../../img/fb-yellow.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import girl from '../../img/girl.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {

    const transition = { duration: 2, type: 'spring' };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>DCP mobile Apps</span>
                    <span>Easy mobile solutions...</span>
                    <span>A mobile apps & games development company that develop, publish and distribute Android Applicatons.
                        <br />Currently, we reach over 200 daily active mobile devices, and our audience keeps growing.
                        <br /><br /><br />
                    </span>
                    <span>Our Purpose,</span>
                    <span>"Make your life more easier & digitize your life with mobile technologies..."</span>
                </div>
                <a href="https://play.google.com/store/apps/dev?id=5847611403848654979" target="_blank">
                    <button className="button i-button">All Apps</button>
                </a>

                <div className="i-icons">
                    <a href="https://www.facebook.com/DCPmobileApps/" target="_blank">
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com/dcpmobileapps/" target="_blank">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="https://github.com/DininduChamikara" target="_blank">
                        <img src={Github} alt="" />
                    </a>
                </div>

            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={girl} alt="" />
                <motion.img
                    initial={{ left: '-24%' }}
                    whileInView={{ left: '-12%' }}
                    transition={transition}
                    src={glassesimoji}
                    alt="" />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}

                    style={{ top: '-4%', left: '68%' }}
                    className='floating-div'
                >
                    <FloatingDiv image={Crown} txt1='Best User' txt2='Experience' />
                </motion.div>
                <motion.div
                    initial={{ left: '7.5rem', top: '18.4rem' }}
                    whileInView={{ left: '2rem' }}
                    transition={transition}

                    style={{ top: '18rem', left: '0rem' }}
                    className='floating-div'
                >
                    <FloatingDiv image={thumbup} txt1='Best UI' txt2='Designs' />
                </motion.div>
                {/* blur divs */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    )
}

export default Intro;