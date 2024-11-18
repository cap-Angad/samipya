import React, { useEffect, useState } from 'react';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>
                ★
            </span>
        ));
    };

    return (
        <div className="det-content">
            <div className="reviews-container">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="profile-circle"></div>
                                <span className="reviewer-name">{review.name}</span>
                            </div>
                            <div className="review-rating">
                                {renderStars(review.rating)}
                                <span className="review-date">{review.date}</span>
                            </div>
                        </div>
                        <div className="review-message">
                            {review.message}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews; 