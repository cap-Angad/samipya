import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
    return (
        <div className="det-content">
            <div className="product-grid">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="product-card">
                        <div className="product-image">Product image</div>
                        <div className="product-info">
                            <p>Product Name: Demo</p>
                            <p>Stock: 12</p>
                            <p>Price: 10</p>
                        </div>
                        <div className="stock-control">
                            <label>Change Stock:</label>
                            <input type="number" defaultValue="3" min="0" />
                        </div>
                        <button className="save-button">Save</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails; 