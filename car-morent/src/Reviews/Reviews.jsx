import React, { useState, useEffect } from 'react';
import './Reviews.css';

const Reviews = ({ carId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`http://localhost:5121/api/Comments/GetCarComments/${carId}`);
                if (!response.ok) throw new Error('Failed to fetch reviews');
                const data = await response.json();
                
                // Преобразуем данные API в нужный формат
                const formattedReviews = data.map(review => ({
                    id: review.id,
                    author: review.name,
                    position: review.position,
                    date: new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }),
                    text: review.text,
                    avatar: review.img || 'src/assets/img/default-user.png'
                }));
                
                setReviews(formattedReviews);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        if (carId) fetchReviews();
    }, [carId]);

    if (loading) return <div>Loading reviews...</div>;

    return (
        <div className="reviews-container">
            <div className="reviews-header">
                <h2>Reviews</h2>
                <div className="review-count">{reviews.length}</div>
            </div>

            {reviews.map((review) => (
                <div key={review.id} className="review-item">
                    <div className="review-content">
                        <div className="review-info">
                            <div className="user-author-position">
                                <img
                                    src={review.avatar}
                                    alt={review.author}
                                    style={{ borderRadius: '50%' }}
                                    width="56px"
                                    height="56px"
                                />
                                <div className="author-position">
                                    <div className="review-author">{review.author}</div>
                                    <div className="review-position">{review.position}</div>
                                </div>
                            </div>
                            <div className="review-meta">
                                <div className="review-data">{review.date}</div>
                                <img src="src/assets/img/Reviews.png" alt="Rating" />
                            </div>
                        </div>
                        <div>
                            <div className="review-text">{review.text}</div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="show-all">                 
                <select>
                    <option>Show All</option>
                </select>
            </div>
        </div>
    );
};

export default Reviews;