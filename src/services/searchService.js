import axios from "axios";

const API_BASE_URL = "http://localhost:56423"; // Base URL for the API

// Function to fetch search results from the API
export const getSearchResults = async (query) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/Searchify/GetSearchResults`,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );    
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error); 
    throw error; 
  }
};

// Function to fetch search suggestions from the API
export const getSearchSuggestions = async (query) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/Searchify/GetSearchSuggestions`,
      {
        params: { query }, 
      }
    );
    return response.data; 
  } catch (error) {
    console.error("Error fetching search suggestions:", error); 
    throw error; 
  }
};
