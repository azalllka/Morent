import React from 'react';
import CarGrid from './CarGrid';
import './RecommendationCars.css';

const RecommendationCars = ({ cars }) => {
    return (
        <section className="recommendation">
            <h1>Recommendation Car</h1>
            <CarGrid cars={cars} /> 
            <div className="load-more">
                <button>Show more car</button>
                <p>{cars.length} Car</p> 
            </div>
        </section>
    );
};

export default RecommendationCars;