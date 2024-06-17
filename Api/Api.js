// Import axios
import axios from 'axios';

// Example login function
const handleLogin = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      email,
      password
    });
    
    // Ensure the response data is as expected
    if (response.data) {
      const token = response.data.token;
      console.log('Login successful, token:', token);
      // Handle successful login (e.g., save token, redirect)
    } else {
      console.error('Login failed, no data in response');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
