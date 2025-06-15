import React from 'react';
import CarCard from './CarCard';

const CarsList = ({ cars, loading, error, showFilters = false, onFilterChange }) => {
    if (loading) return <div className="loading">Loading cars...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!cars?.length) return <div className="no-cars">No cars available</div>;

    return (
        <div className="recomendation">
            <div className="cars-grid">
                {cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarsList; 