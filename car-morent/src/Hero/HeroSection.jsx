import React from 'react';
import HeroCard from './HeroCard';
import BG from '../assets/img/BG.png';
import BG2 from '../assets/img/BG2.png';
import './Hero.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <HeroCard
                title="The Best Platform for Car Rental"
                description="Ease of doing a car rental safely and reliably. Of course at a low price."
                buttonColor="#3563E9"
                backgroundColor="#54A6FF"
                backgroundImage={BG}
            />
            <HeroCard
                title="Easy way to rent a car at a low price"
                description="Providing cheap car rental services and safe and comfortable facilities."
                buttonColor="#54A6FF"
                backgroundColor="#3563E9"
                backgroundImage={BG2}
            />
        </section>
    );
};

export default HeroSection;