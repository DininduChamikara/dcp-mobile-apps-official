import React from "react";
import './Popular.css';

import NIC_Decoder from "../../img/nic-decoder.png";
import Endless_escape from "../../img/endless-escape.png";
import Mobile_notekeeper from "../../img/mobile-notekeeper.png";

import Card from "../Card/Card";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Popular = () => {

    const transition = {duration: 1, type: 'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="popular" id="Popular">
            {/* left side*/}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Most Popular</span>
                <span>Applications</span>
                <span>
                    These are some of the most popular mobile applications and games applications that we have published.
                    <br /><br />
                    To visit the all mobile applications click on <span>Google Play</span> button,
                </span>
                <a href="https://play.google.com/store/apps/dev?id=5847611403848654979" target="_blank">
                    <button className="button s-button">Google Play</button>
                </a>

                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
               
            </div>

            {/* right side */}
            <div className="cards">
                <motion.div 
                initial={{left: '25rem'}}
                whileInView={{left: '14rem'}}
                transition={transition}
                style={{ left: '14rem' }}>
                    <Card
                        icon={NIC_Decoder}
                        heading={'Sri Lanka NIC Decoder'}
                        detail={"Find birthday, gender, and exact age by using the NIC"}
                        link="https://play.google.com/store/apps/details?id=com.dcpappsolution.myapplication"
                    />
                </motion.div>
                {/* second card */}
                <motion.div 
                initial={{left: '-15rem'}}
                whileInView={{left: '-4rem'}}
                transition={transition}
                style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        icon={Endless_escape}
                        heading={"Endless Escape 2D"}
                        detail={"A super fast and addictive endless running game"}
                        link="https://play.google.com/store/apps/details?id=com.dcpmobileapps.com.unity.template.mobile2D"
                    />
                </motion.div>
                {/* third card */}
                <motion.div 
                initial={{left: '23rem'}}
                whileInView={{left: '12rem'}}
                transition={transition}
                style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        icon={Mobile_notekeeper}
                        heading={"Mobile NoteKeeper"}
                        detail={"A simple & effective app to manage your all notes"}
                        link="https://play.google.com/store/apps/details?id=com.dcpappsolutions.notekeeperapp"
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Popular;