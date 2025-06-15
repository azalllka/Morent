import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CarCard from './CarCard';
import './Cars.css';

const CarGrid = ({ 
    searchQuery, 
    selectedTypes: propSelectedTypes = [], 
    selectedCapacities: propSelectedCapacities = [], 
    maxPrice: propMaxPrice = 2500, 
    cars: propCars 
}) => {
    const [searchParams] = useSearchParams();
    const [cars, setCars] = useState(propCars || []);
    const [loading, setLoading] = useState(!propCars);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Если есть готовые данные - пропускаем загрузку
        if (propCars) return;

        const fetchCars = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const params = new URLSearchParams();
                
                if (searchQuery) params.append('searchQuery', searchQuery);
                
                // Используем параметры из URL или пропсы
                const types = searchParams.getAll('type') || propSelectedTypes;
                const capacities = searchParams.getAll('capacity') || propSelectedCapacities;
                const price = searchParams.get('maxPrice') || propMaxPrice;
                
                types.forEach(type => params.append('categories', type));
                capacities.forEach(cap => 
                    params.append('capacities', cap.replace(' Person', ''))
                );
                params.append('maxPrice', price.toString());
                
                console.log('Fetching cars with params:', params.toString());
                
                const response = await fetch(
                    `http://localhost:5121/Cars/GetFilteredCars?${params}`
                );
                
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const data = await response.json();
                setCars(data);
            } catch (err) {
                console.error('Error fetching cars:', err);
                setError(err.message);
                setCars([]);
            } finally {
                setLoading(false);
            }
        };

        const timer = setTimeout(fetchCars, 300);
        return () => clearTimeout(timer);
    }, [searchQuery, searchParams, propSelectedTypes, propSelectedCapacities, propMaxPrice, propCars]);

    // Добавьте логирование для отладки
    console.log('CarGrid state:', { loading, error, cars });

    if (loading) {
        return <div className="loading">Loading cars...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (cars.length === 0) {
        return <div className="no-cars">No cars found matching your criteria</div>;
    }

    return (
        <div className="car-grid">
            {cars.map(car => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
};

export default CarGrid;