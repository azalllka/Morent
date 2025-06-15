import React from 'react';
import CarCard from './CarCard';
import carsData from './recommendationCarsData';
import './RecommendationCars.css';

const CarGrid = () => {
    return (
        <div className="car-grid">
            {carsData.map((car, index) => (
                <CarCard key={index} car={car} />
            ))}
        </div>
    );
};

 
export default CarGrid;