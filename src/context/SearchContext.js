import React, { createContext, useState } from "react";
import { getSearchResults, getSearchSuggestions } from "../services/searchService";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch search suggestions
  const fetchSearchSuggestions = async (query) => {
    try {
      const response = await getSearchSuggestions(query); 
      setSuggestions(response || []);  s
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
      setSuggestions([]);  // Clear suggestions on error
    }
  };

  // Fetch search results
  const fetchSearchResults = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await getSearchResults(query);
      setSearchResults(response.results || []);
    } catch (err) {
      setError("Failed to fetch results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        searchResults,
        setSearchResults,
        fetchSearchResults,
        fetchSearchSuggestions,
        suggestions,  
        setSuggestions,  
        loading,
        error,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
