import React from 'react';
import CarCard from './CarCard';
import './PopularCars.css';

const CarGrid = ({ cars }) => {
    return (
        <div className="car-grid">
            {cars.map((car, index) => ( // Отображаем карточки машин
                <CarCard key={index} car={car} />
            ))}
        </div>
    );
};
 
export default CarGrid;