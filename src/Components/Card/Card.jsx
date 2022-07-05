import React from "react";
import './Card.css';

const Card = ({ icon, heading, detail, link }) => {
    return (
        <div className="card">
            <img src={icon} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <a href={link} target="_blank">
                <button className="c-button">VISIT APP</button>
            </a>

        </div>
    )
}

export default Card;