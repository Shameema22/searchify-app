import React, { createContext, useState } from "react";
import { getSearchResults } from "../services/searchService";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //Search results from the API
  const fetchSearchResults = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await getSearchResults(query); 
      setSearchResults(response.results || []); // Correctly access `results` key
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
        loading,
        error,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
