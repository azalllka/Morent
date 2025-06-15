import React from 'react';
import CarGrid from './CarGrid';
import './Cars.css';

const Cars = ({ cars }) => {
    return <CarGrid cars={cars} />;
};

export default Cars;