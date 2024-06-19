import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        image={`https://via.placeholder.com/150?text=${product.name}`}
        title={product.name}
        style={{ height: 150 }}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2">{product.company}</Typography>
        <Typography variant="body2">Price: ${product.price}</Typography>
        <Typography variant="body2">Rating: {product.rating}</Typography>
        <Typography variant="body2">Discount: {product.discount}%</Typography>
        <Typography variant="body2">Availability: {product.availability}</Typography>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
