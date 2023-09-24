import axios from "axios";

const BASE_URL = "https://api.punkapi.com/v2";

export const getBeers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/beers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching beers:", error);
    throw error;
  }
};
