import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import '../InfoCard/InfoCard.css';

const InfoCard = () => {
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

useEffect(() => {
    // Пробуем получить машину из состояния навигации 
    if (location.state?.car) {
        setCar(location.state.car);
        setLoading(false);
        return;
    }

    // Если в состоянии нет, загружаем с API
    const fetchCarData = async () => {
        try {
            const carId = location.pathname.split('/').pop(); // Получаем ID из URL
            const response = await fetch(`http://localhost:5121/api/Cars/${carId}`);
            if (!response.ok) throw new Error('Car not found');
            const data = await response.json();
            setCar(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchCarData();
}, [location]);

    const handleRentClick = () => {
        navigate('/request', { state: { car } });
    };

    const handleFavoriteClick = () => {
        console.log('Added to favorites:', car?.id);
    };

    if (loading) return <div className="loading">Loading car details...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!car) return <div className="no-data">No car data available</div>;

    return (
        <div className='main-container'>
            <div className="info-container">
                <div className="left-panel">
                    <div className="big-car">
                        <div className="big-car-txt">
                            <h2>Sports car with the best design and acceleration</h2>
                            <p>Safety and comfort while driving a futuristic and elegant sports car.</p>
                        </div>
                        <img 
                            src={car.img} 
                            alt={car.name} 
                            style={{ width: '100%' }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'src/assets/img/default-car.png';
                            }}
                        />
                    </div>
                    <div className="mini-car">
                        <img src="src/assets/img/View 1.png" alt="Car" />
                        <img src="src/assets/img/View 2.png" alt="Interior" />
                        <img src="src/assets/img/View 3.png" alt="Seats" />
                    </div>
                </div>

                <div className="right-panel">
                    <div className="card-top">
                        <div className="car-name">
                            <h2>{car.name}</h2>
                        </div>
                        <img
                            src={car.isFavorite ? "src/assets/img/heart.jpeg" : "src/assets/img/no-heart.jpeg"}
                            alt="Favorite"
                            className="heart-icon"
                            onClick={handleFavoriteClick}
                        />
                    </div>
                    <div className="title">
                        <span className="rating"> 
                            <img src="src/assets/img/Reviews.png" alt="Reviews" />&nbsp; 440+ Reviewer
                        </span>
                    </div>
                    <div className="description">
                        NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                    </div>
                    <div className="details2">
                        <div className="detail-item">
                            <div className="detail-label">Type Car</div>
                            <div className="detail-value">{car.type || car.category}</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-label">Capacity</div>
                            <div className="detail-value">{car.capacity || car.spaces} Person</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-label">Steering</div>
                            <div className="detail-value">{car.transmission}</div>
                        </div>
                        <div className="detail-item">
                            <div className="detail-label">Gasoline</div>
                            <div className="detail-value">{car.fuelCapacity}</div>
                        </div>
                    </div>
                    <div className="price-button">
                        <div>
                            <div className="price">${car.price}.00/ <span style={{ fontSize: '14px', color: 'gray' }}>days</span></div>
                            {car.discountedPrice && <div className="discounted-price">${car.discountedPrice}.00</div>}
                        </div>
                        <button 
                            className="rent-button"
                            onClick={handleRentClick} 
                        >
                            Rent
                        </button>
                    </div>
                </div>
            </div>

            {/* Секция отзывов */}
            {car.id && <Reviews carId={car.id} />}
        </div>
    );
};

export default InfoCard;