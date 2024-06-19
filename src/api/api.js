// // import axios from 'axios';

// // const API_URL = 'http://20.244.56.144/test';

// // export const getProducts = async (company, category, top, minPrice, maxPrice) => {
// //   try {
// //     const response = await axios.get(`${API_URL}/companies/${company}/category/${category}`, {
// //       params: { top, minPrice, maxPrice }
// //     });
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error fetching products", error);
// //     return [];
// //   }
// // };

// // export const getProductById = async (id) => {
// //   try {
// //     const response = await axios.get(`${API_URL}/product/${id}`);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error fetching product", error);
// //     return null;
// //   }
// // };
import axios from 'axios';

// const API_URL = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';
 const API_URL = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000'

export const getProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${API_URL}/companies/${company}/categories/${category}/products`, {
      params: { top, minPrice, maxPrice }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    return [];
  }
};

