import axios from 'axios';

const API_BASE_URL = 'http://10.0.2.2:8000/api/v1/weather/';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(API_BASE_URL, { params: { city } });
    return response.data;
  } catch (error) {
    if (error.response) {
        return { error: `An error occurred: ${error.response.data.error || error.message}` };
      } else if (error.request) {
        return { error: 'Network error: Unable to reach the server.' };
      } else {
        return { error: `Unexpected error: ${error.message}` };
      }
  }
};
