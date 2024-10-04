import axios from 'axios';

export const addToComparelist = async (productId) => {
  const url = 'http://127.0.0.1:3000/api/comparelist';

  const token = localStorage.getItem('token');  

  if (!token) {
    console.error('No token found. User must be logged in.');
    return;
  }

  try {
    const response = await axios.post(
      url,
      { productId },
      {
        headers: {
          'Authorization': `Bearer ${token}`,  // Use the token retrieved from storage
          'Content-Type': 'application/json'
        }
      }
    );

    // Success: Log the response
    console.log('Product added to compare list:', response.data);

  } catch (error) {
    // Error handling: Log the error
    if (error.response) {
      console.error('Error response from server:', error.response.data);
    } else {
      console.error('Failed to send request:', error.message);
    }
  }
};
