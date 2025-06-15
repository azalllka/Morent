import React from "react";
import './SearchForm.css';

const SwapButton = ({ isSecondPage }) => (
    <button className={`swap-btn ${isSecondPage ? 'second-page' : ''}`}>
        ↑↓
    </button>
);

export default SwapButton;