import React from "react";
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from "../../img/sidebar.png";

import NicDecoderBG from "../../img/nic-decoder-bg.png";
import MobileNotekeeperBG from "../../img/mobile-notekeeper-bg.png";
import WallArtGalleryBG from "../../img/wallart-gallery-bg.png";
import EndlessEscape2dBG from "../../img/endless-escape-2d-bg.png";

import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css';
import { useContext } from "react";
import { themeContext } from "../../Context";

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span style={{color: darkMode? 'white': ''}}>Recent Applications</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={NicDecoderBG} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={EndlessEscape2dBG} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={WallArtGalleryBG} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MobileNotekeeperBG} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;