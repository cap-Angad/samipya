import React, { useEffect, useState } from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="det-content">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <p>Product Name: {product.name}</p>
              <p>Stock: {product.stock}</p>
              <p>Price: {product.price}</p>
            </div>
            <div className="stock-control">
              <label>Change Stock:</label>
              <input type="number" defaultValue={product.stock} min="0" />
            </div>
            <button className="save-button">Save</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails; 