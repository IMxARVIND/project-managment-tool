import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  console.log('Token being sent:', token); // ✅ Log the token

  if (!token) {
    console.error('No token found in localStorage!');
  }

  return { headers: { Authorization: `Bearer ${token}` } };
};

export const getProjects = async () => {
  try {
    return await axios.get(`${API_URL}/projects`, getAuthHeaders());
  } catch (error) {
    console.error('Error fetching projects:', error.response?.data || error.message);
    throw error;
  }
};
export const addProject = async (project) => {
    try {
      console.log('Sending request to backend:', project);
      const response = await axios.post(`${API_URL}/projects/add`, project, getAuthHeaders());
      console.log('Project added:', response.data);
      return response;
    } catch (error) {
      console.error('Error adding project:', error.response ? error.response.data : error.message);
      throw error;
    }
  };