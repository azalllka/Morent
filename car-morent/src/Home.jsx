import React from 'react';
import { useOutletContext } from 'react-router-dom'; 
import HeroContainer from './Hero/HeroContainer';
import SearchSection from './SearchForm/SearchSection';
import PopularCars from './PopularCars/PopularCars';
import RecommendationCars from './RecommendationCars/RecommendationCars';
import popularCarsData from './PopularCars/popularCarsData';
import recommendationCarsData from './RecommendationCars/recommendationCarsData';


const Home = () => {

    const { searchQuery } = useOutletContext(); 

    // Фильтруем популярные машины по имени 
    const filteredPopularCars = popularCarsData.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Фильтруем рекомендованные машины по имени
    const filteredRecommendationCars = recommendationCarsData.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <HeroContainer />
            <SearchSection isSecondPage={false} />
            <PopularCars cars={filteredPopularCars} />
            <RecommendationCars cars={filteredRecommendationCars} />
        </>
    );
    
};

export default Home; 