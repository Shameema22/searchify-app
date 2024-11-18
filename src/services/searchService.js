import axios from "axios";

const API_BASE_URL = "http://localhost:56423";

export const getSearchResults = async (query) => {
  try {
    const response = await axios.post(
      "http://localhost:56423/Searchify/GetSearchResults",
      { query },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data); 
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
