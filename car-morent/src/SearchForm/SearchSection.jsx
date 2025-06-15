import React from "react";
import PickupContainer from "./PickupContainer";
import SwapButton from "./SwapButton";
import './SearchForm.css';

const SearchSection = ({ isSecondPage }) => (
    <section className={`search ${isSecondPage ? 'second-page' : ''}`}>
        <PickupContainer 
            label="Pick – Up" 
            imageSrc="tg_image_3665888138.png" 
            isSecondPage={isSecondPage} 
        />
        <SwapButton isSecondPage={isSecondPage} />
        <PickupContainer 
            label="Drop – Off" 
            imageSrc="tg_image_2455256273.png" 
            isSecondPage={isSecondPage} 
        />
    </section>
);

export default SearchSection;