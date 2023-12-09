// TollGuruService.js
import axios from 'axios';

const API_KEY = 'YOUR_TOLLGURU_API_KEY'; // Replace with your actual API key

const tollGuruApi = axios.create({
  baseURL: 'https://dev.tollguru.com/v1/calc/route/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
});

export const calculateToll = async (waypoints) => {
  try {
    const response = await tollGuruApi.post('', { waypoints });
    return response.data;
  } catch (error) {
    console.error('Error calculating toll:', error);
    throw error;
  }
};
