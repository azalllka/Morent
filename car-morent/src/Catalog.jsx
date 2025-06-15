import React, { useState, useEffect } from 'react';
import { useOutletContext, useSearchParams, useLocation } from 'react-router-dom';
import FilterPanel from './FilterPanel/FilterPanel';
import SearchSection from './SearchForm/SearchSection';
import CarGrid from './Cars/CarGrid';

const Catalog = () => {
    const { searchQuery } = useOutletContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    
    // Парсим параметры из URL при инициализации
    const initialTypes = searchParams.getAll('type') || [];
    const initialCapacities = searchParams.getAll('capacity') || [];
    const initialPrice = searchParams.get('maxPrice') || 2500;

    // Состояния для фильтров (синхронизированы с URL)
    const [selectedTypes, setSelectedTypes] = useState(initialTypes);
    const [selectedCapacities, setSelectedCapacities] = useState(initialCapacities);
    const [maxPrice, setMaxPrice] = useState(Number(initialPrice));
    
    const [absoluteMaxPrice, setAbsoluteMaxPrice] = useState(100);
    const [filterOptions, setFilterOptions] = useState({
        categories: [],
        capacities: [],
    });
    const [loading, setLoading] = useState(true);

    // Обновляем URL при изменении фильтров
    useEffect(() => {
        const params = new URLSearchParams();
        
        selectedTypes.forEach(type => params.append('type', type));
        selectedCapacities.forEach(cap => params.append('capacity', cap));
        params.set('maxPrice', maxPrice);
        
        setSearchParams(params);
    }, [selectedTypes, selectedCapacities, maxPrice, setSearchParams]);

    // Загрузка опций фильтрации
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await fetch('http://localhost:5121/Cars/GetFilterOptions'); 
                if (!response.ok) throw new Error('Failed to load options');
                const data = await response.json();
                
                setAbsoluteMaxPrice(data.maxPrice);
                setFilterOptions({
                    categories: data.categories,
                    capacities: data.capacities
                });
            } catch (error) {
                console.error('Error loading filter options:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOptions();
    }, []);

    const handleReset = () => {
        setSelectedTypes([]);
        setSelectedCapacities([]);
        setMaxPrice(absoluteMaxPrice);
    };

    if (loading) return <div className="loading">Loading filter options...</div>;

    return (
        <div className='filter-main-container'>
            <FilterPanel 
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
                selectedCapacities={selectedCapacities}
                setSelectedCapacities={setSelectedCapacities}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                availableTypes={filterOptions.categories}
                availableCapacities={filterOptions.capacities}
                absoluteMaxPrice={absoluteMaxPrice}
                onReset={handleReset}
            />
            
            <div className='main-content'>
                <SearchSection isSecondPage={true} />
                
                <CarGrid 
                    searchQuery={searchQuery} 
                    selectedTypes={selectedTypes}
                    selectedCapacities={selectedCapacities}
                    maxPrice={maxPrice}
                />
            </div>
        </div>
    );
};

export default Catalog;