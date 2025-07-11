import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cars.css';

const CarCard = ({ car }) => {
    const navigate = useNavigate();

    const handleClick = () => { 
        navigate('/info', { state: { car } }); // Передаем данные о машине через состояние
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="car-top">
                <div>
                    <h2>{car.name}</h2>
                    <p>{car.category}</p>
                </div>
                <img src={car.isFavorite ? "src/assets/img/heart.jpeg" : "src/assets/img/no-heart.jpeg"} alt="Favorite" className="hear" />
            </div>
            <img src={car.img} alt={car.name} className="carr" />
            <div className="details">
                <span><img src="src/assets/img/photo_2025-03-15 03.44.26.jpeg" width="24px" alt="Fuel" /> {car.fuelCapacity}</span>
                <span><img src="src/assets/img/photo_2025-03-15 03.44.27.jpeg" width="24px" alt="Transmission" /> {car.transmission}</span>
                <span><img src="src/assets/img/photo_2025-03-15 03.44.29.jpeg" width="24px" alt="Capacity" /> {car.spaces} People</span>
            </div>
            <div className="price-button">
                <div>
                    <div className="price"><h2>${car.price}.00/</h2><p>day</p></div>
                    {car.discountedPrice && <div className="discounted-price">${car.discountedPrice}.00</div>}
                </div>
                <button href="#" className="rent-button">Rent Now</button>
            </div>
        </div>
    );
};

export default CarCard;