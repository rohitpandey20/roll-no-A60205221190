// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProductById } from '../api/api'; // Ensure this path is correct
// import { Card, CardContent, Typography } from '@mui/material';

// const ProductDetailPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const product = await getProductById(id);
//       setProduct(product);
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">{product.name}</Typography>
//         <Typography variant="subtitle1">{product.company}</Typography>
//         <Typography variant="body2">{product.category}</Typography>
//         <Typography variant="body1">Price: ${product.price}</Typography>
//         <Typography variant="body1">Rating: {product.rating}</Typography>
//         <Typography variant="body1">Discount: {product.discount}%</Typography>
//         <Typography variant="body1">Availability: {product.availability}</Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductDetailPage;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api/api'; // Update this to fetch product by ID if necessary
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProducts('AMZ', 'Laptop', 10, 1, 10000);
      const product = products[parseInt(id, 10)];
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.productName}</Typography>
        <Typography variant="subtitle1">{product.company}</Typography>
        <Typography variant="body2">{product.category}</Typography>
        <Typography variant="body1">Price: ${product.price}</Typography>
        <Typography variant="body1">Rating: {product.rating}</Typography>
        <Typography variant="body1">Discount: {product.discount}%</Typography>
        <Typography variant="body1">Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetailPage;
