import React from "react";
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";
import profilePic7 from "../../img/profile7.jpg";
import profilePic8 from "../../img/profile8.jpg";
import profilePic9 from "../../img/profile9.jpg";
import profilePic10 from "../../img/profile10.jpg";
import profilePic11 from "../../img/profile11.jpg";
import profilePic12 from "../../img/profile12.jpg";
import profilePic13 from "../../img/profile13.jpg";

import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';
import { useContext } from "react";
import { themeContext } from "../../Context";

const Testimonial = () => {

    const clients = [
        {
            img: profilePic1,
            review:
                "Very useful app, it has a user friendly and an attractive UI.",
        },
        {
            img: profilePic2,
            review:
                "Best NIC decoder!. Correct details are given by this app with a user friendly interface.",
        },
        {
            img: profilePic3,
            review:
                "This app is very accurate. The DOB and Age is 100% correct.",
        },
        {
            img: profilePic4,
            review:
                "Accurate and Super easy to use! Great app!",
        },
        {
            img: profilePic5,
            review:
                "This is a great app and its's very useful . It's highly user friendly.",
        },
        {
            img: profilePic6,
            review:
                "A useful app. I love the features. Keep it up.",
        },
        {
            img: profilePic7,
            review:
                "This is a really good app. I highly recommend this app. It's working perfectly.",
        },
        {
            img: profilePic8,
            review:
                "UI is very attractive...",
        },
        {
            img: profilePic9,
            review:
                "Very useful and accurate app! ❤️",
        },
        {
            img: profilePic10,
            review:
                "Nice & Useful app🔥",
        },
        {
            img: profilePic11,
            review:
                "Nice app 🔥🔥🔥",
        },
        {
            img: profilePic12,
            review:
                "Useful app.❤",
        },
        {
            img: profilePic13,
            review:
                "Good work 🔥🔥🔥",
        },

    ]

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>User </span>
                <span>App Reviews </span>
                <span>regarding our products...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}

export default Testimonial;