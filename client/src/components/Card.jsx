// Import React and Link from react-router-dom library
import React from 'react';
import { Link } from 'react-router-dom';

// Import Card styling
import "./Card.css"

// Create Card functional component that takes in props
function Card({ name, imageSrc, description, price, productId }) {
  // Return JSX elements
  return (
    <div className="product-card">
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      {price && <p>${price.toFixed(2)}</p>}
      <Link to={`/products/${productId}`}>
        <button className="btn-primary">View Details</button>
      </Link>
    </div>
  );
}

// Export the Card component as the default export
export default Card;



