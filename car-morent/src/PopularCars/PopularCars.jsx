import React from 'react';
import { Link } from 'react-router-dom'; 
import CarGrid from './CarGrid';
import './PopularCars.css';

const PopularCars = ({ cars }) => {
    return (
        <section className="popular-cars">
            <h1>Popular Cars <Link to="/catalog">View All</Link></h1>
            <CarGrid cars={cars} /> 
        </section>
    ); 
}; 

export default PopularCars;  