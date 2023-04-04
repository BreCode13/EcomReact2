import React from 'react';
import Card from './Card';
import './ProductGrid.css';

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Card
          key={product.id}
          name={product.name}
          imageSrc={product.imageSrc}
          description={product.description}
          price={product.price}
          productId={product.id}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
