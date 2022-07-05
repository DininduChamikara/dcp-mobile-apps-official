import React from "react";
import './Technologies.css';

import Java from "../../img/java.png";
import Android from "../../img/android.png";
import Unity from "../../img/unity.png";
import Flutter from "../../img/flutter.png";
import Illustrater from "../../img/illustrater.png";

import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Technologies = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="technologies">
            {/* left side*/}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Technology</span>
                <span>Components</span>
                <span>
                    There are several technologies that we use in our developments. They are,
                    <br/>
                    Java, Dart, C#, Android Studio, Unity Studio, Flutter Framework, Adobe Illustrator, Photoshop, XD 
                    <br/>
                    
                </span>

                {/* <button className="button s-button">Hire me</button> */}
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right side */}
            <div className="w-right">
                <motion.div 
                initial={{rotate: 45}}
                whileInView={{rotate: 0}}
                viewport={{margin: '-40px'}}
                transition={{duration: 3.5, type: "spring"}}
                
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Android} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Unity} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Java} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Flutter} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Illustrater} alt="" />
                    </div>
                </motion.div>
                {/* background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
        </div>
    )
}

export default Technologies;