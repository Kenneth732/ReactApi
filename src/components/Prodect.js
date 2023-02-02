import React, { useState, useEffect } from "react";


const Product = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((result) => setCategories(result));
  }, []);

  const handleAddToCart = (category) => {
    console.log(`Adding ${category.name} to cart...`);
    // Add the category to the cart here
  };

  return (
    <div className="container">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <img
            src={category.images}
            alt={category.name}
            className="category-image"
          />
          <h2 className="category-title">{category.name}</h2>
          <small>{category.price}</small>
          <p className="text">{category.description}</p>
          <button
            className="category-add-to-cart-button"
            onClick={() => handleAddToCart(category)} >Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
