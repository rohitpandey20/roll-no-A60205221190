// import React, { useState, useEffect } from 'react';
// import { getProducts } from '../api/api';
// import { Grid, Card, CardContent, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
// import { Link } from 'react-router-dom';

// const AllProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [company, setCompany] = useState('');
//   const [category, setCategory] = useState('');
//   const [sortBy, setSortBy] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const fetchedProducts = await getProducts(company, category, 10, 1, 10000);
//       setProducts(fetchedProducts);
//     };
//     fetchProducts();
//   }, [company, category, sortBy]);

//   return (
//     <div>
//       <FormControl fullWidth>
//         <InputLabel id="company-label">Company</InputLabel>
//         <Select
//           labelId="company-label"
//           value={company}
//           label="Company"
//           onChange={(e) => setCompany(e.target.value)}
//         >
//           <MenuItem value="AMZ">AMZ</MenuItem>
//           <MenuItem value="FLP">FLP</MenuItem>
//           <MenuItem value="SNP">SNP</MenuItem>
//           <MenuItem value="MYN">MYN</MenuItem>
//           <MenuItem value="AZO">AZO</MenuItem>
//         </Select>
//       </FormControl>

//       <FormControl fullWidth>
//         <InputLabel id="category-label">Category</InputLabel>
//         <Select
//           labelId="category-label"
//           value={category}
//           label="Category"
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <MenuItem value="Phone">Phone</MenuItem>
//           <MenuItem value="Computer">Computer</MenuItem>
//           <MenuItem value="TV">TV</MenuItem>
//           <MenuItem value="Earphone">Earphone</MenuItem>
//           <MenuItem value="Tablet">Tablet</MenuItem>
//           {/* Add more categories as needed */}
//         </Select>
//       </FormControl>

//       <Grid container spacing={2}>
//         {products.map((product) => (
//           <Grid item xs={12} sm={6} md={4} key={product.id}>
//             <Link to={`/product/${product.id}`}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h5">{product.name}</Typography>
//                   <Typography variant="body1">{product.company}</Typography>
//                   <Typography variant="body2">{product.category}</Typography>
//                   <Typography variant="body1">Price: ${product.price}</Typography>
//                 </CardContent>
//               </Card>
//             </Link>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default AllProductsPage;
import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/api';
import { Grid, Card, CardContent, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Link } from 'react-router-dom';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [sortBy, setSortBy] = useState('price');

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts(company, category, 10, 1, 10000);
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, [company, category, sortBy]);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="company-label">Company</InputLabel>
        <Select
          labelId="company-label"
          value={company}
          label="Company"
          onChange={(e) => setCompany(e.target.value)}
        >
          <MenuItem value="AMZ">AMZ</MenuItem>
          <MenuItem value="FLP">FLP</MenuItem>
          <MenuItem value="SNP">SNP</MenuItem>
          <MenuItem value="MYN">MYN</MenuItem>
          <MenuItem value="AZO">AZO</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Computer">Computer</MenuItem>
          <MenuItem value="TV">TV</MenuItem>
          <MenuItem value="Earphone">Earphone</MenuItem>
          <MenuItem value="Tablet">Tablet</MenuItem>
          <MenuItem value="Charger">Charger</MenuItem>
          <MenuItem value="Mouse">Mouse</MenuItem>
          <MenuItem value="Keypad">Keypad</MenuItem>
          <MenuItem value="Bluetooth">Bluetooth</MenuItem>
          <MenuItem value="Pendrive">Pendrive</MenuItem>
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="Speaker">Speaker</MenuItem>
          <MenuItem value="Headset">Headset</MenuItem>
          <MenuItem value="Laptop">Laptop</MenuItem>
          <MenuItem value="PC">PC</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={`/product/${index}`}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{product.productName}</Typography>
                  <Typography variant="body1">{company}</Typography>
                  <Typography variant="body2">{category}</Typography>
                  <Typography variant="body1">Price: ${product.price}</Typography>
                  <Typography variant="body1">Rating: {product.rating}</Typography>
                  <Typography variant="body1">Discount: {product.discount}%</Typography>
                  <Typography variant="body1">Availability: {product.availability}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllProductsPage;
