import React, { useState, useEffect } from 'react';
import CarGrid from './Cars/CarGrid';
import InfoCard from './InfoCard/InfoCard';

const Info = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchAllCars = async () => {
            try {
                const response = await fetch('http://localhost:5121/Cars/GetCars');
                if (!response.ok) throw new Error('Failed to load cars');
                const data = await response.json();
                setCars(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }; 

        fetchAllCars();
    }, []);

    if (loading) return <div className="loading">Loading cars...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className='main-container'>
            <InfoCard />
            <section className="recommendation">
                <CarGrid cars={cars} />
                <div className="load-more"> 
                    <button>Show more car</button>
                    <p>{cars.length} Car</p>
                </div>
            </section>
        </div>
    );
};

export default Info;