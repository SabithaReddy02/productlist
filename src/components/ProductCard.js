import React from 'react';

const ProductCard = ({ product }) => {
  const { id, name, description, price, imagePath } = product;

  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
  };

  return (
    <div className="ProductCard">
      <img src={imagePath} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;