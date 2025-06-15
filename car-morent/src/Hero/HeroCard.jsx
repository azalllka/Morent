import React from 'react';
import './Hero.css';

const HeroCard = ({ title, description, buttonColor, backgroundColor, backgroundImage }) => {
    return (
        <div
            className="hero-card"
            style={{ backgroundColor, backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="card-button">
                <h2>{title}</h2>
                <p>{description}</p>
                <button
                    className="hero-card-button"
                    style={{ backgroundColor: buttonColor }}
                >
                    Rental Car
                </button>
            </div>
        </div>
    );
};

export default HeroCard;