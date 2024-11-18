import React from 'react';
import './Promotions.css';

const Promotions = () => {
    const promotions = [
        { 
            id: 1, 
            title: "Summer Sale", 
            discount: "30% OFF",
            validTill: "2024-05-30",
            description: "Get amazing discounts on all summer products",
            code: "SUMMER30"
        },
        { 
            id: 2, 
            title: "New User Special", 
            discount: "₹500 OFF",
            validTill: "2024-12-31",
            description: "Special discount for new customers",
            code: "NEWUSER500"
        },
        // Add more promotions as needed
    ];

    return (
        <div className="det-content">
            <div className="promotions-container">
                {promotions.map((promo) => (
                    <div key={promo.id} className="promotion-card">
                        <div className="promotion-header">
                            <h3>{promo.title}</h3>
                            <span className="discount-badge">{promo.discount}</span>
                        </div>
                        <div className="promotion-content">
                            <p>{promo.description}</p>
                            <div className="promo-code">
                                <span>Code: {promo.code}</span>
                            </div>
                            <div className="valid-till">
                                Valid till: {promo.validTill}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Promotions; 