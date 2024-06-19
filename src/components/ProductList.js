// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Example: Fetching top 10 laptops from AMZ in price range 1 to 10000
        const data = await getProducts('AMZ', 'Laptop', 10, 1, 10000);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
