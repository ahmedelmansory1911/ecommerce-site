import axiosInstance from "./index";

// Create a new product with token
export const createProduct = async (productData, token) => {
  const response = await axiosInstance.post("/products", productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
// ////////////////////////////////////////////////////////////////////////////////////
// Fetch all product with token
// export const fetchProduct = async () => {
//   const response = await axiosInstance.get("/product");
//   return response.data;
// };
export const fetchProduct = async (searchTerm = '') => {
  try {
    const response = await axiosInstance.get('/product');
    console.log('Response Data:', response.data); // Log the response data

    const products = response.data.data;

    if (!Array.isArray(products)) {
      console.error('Expected an array for products, but got:', products);
      return [];
    }

    console.log('Products:', products);

    const filteredProducts = products.filter(product => {
      if (product.title) {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    });

    console.log('Filtered Products:', filteredProducts);
    return filteredProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fetch a single Product by ID with token
export const fetchProductById = async (id, token) => {
  const response = await axiosInstance.get(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update a product by ID with token
export const updateProduct = async (id, updatedData, token) => {
  const response = await axiosInstance.put(`/product/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Delete a product by ID with token
export const deleteProduct = async (id, token) => {
  const response = await axiosInstance.delete(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
// Create a new review with token
export const createReview = async (reviewData, token) => {
  const response = await axiosInstance.post("/review", reviewData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
