import React from "react";
import './SearchForm.css';

const PickupContainer = ({ label, imageSrc, isSecondPage }) => (
    <div className={`pickup-container ${isSecondPage ? 'second-page' : ''}`}>
        <div className="pickup-header">
            <img src={`./src/assets/img/${imageSrc}`} alt={label} width="16px" />
            <label>{label}</label>
        </div>
        <div className="pickup-options">
            {["Locations", "Date", "Time"].map((option) => (
                <div key={option} className="option">
                    <span className="option-title">{option}</span>
                    <select>
                        <option>Select your {option.toLowerCase()}</option>
                    </select>
                </div>
            ))}
        </div>
    </div>
);

export default PickupContainer;