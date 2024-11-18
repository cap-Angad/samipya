import React from 'react';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        { id: 1, name: "Person Name", message: "Demo Message...........................", rating: 5, date: "XX-XX-XX" },
        { id: 2, name: "Person Name", message: "Demo Message...........................", rating: 4, date: "XX-XX-XX" },
        { id: 3, name: "Person Name", message: "Demo Message...........................", rating: 5, date: "XX-XX-XX" },
        { id: 4, name: "Person Name", message: "Demo Message...........................", rating: 3, date: "XX-XX-XX" },
        { id: 5, name: "Person Name", message: "Demo Message...........................", rating: 4, date: "XX-XX-XX" },
        { id: 6, name: "Person Name", message: "Demo Message...........................", rating: 4, date: "XX-XX-XX" },
        { id: 7, name: "Person Name", message: "Demo Message...........................", rating: 4, date: "XX-XX-XX" },
        { id: 8, name: "Person Name", message: "Demo Message...........................", rating: 4, date: "XX-XX-XX" },
    ];

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