import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./../styles/Home.css";
import { SearchContext } from "../context/SearchContext";

const HomePage = () => {
    const { query, setQuery, fetchSearchResults, fetchSearchSuggestions, suggestions, setSuggestions } = useContext(SearchContext);
    const navigate = useNavigate();

    // Handle input change to fetch search suggestions
    const handleInputChange = async (e) => {
        const searchTerm = e.target.value;
        setQuery(searchTerm);

        if (searchTerm.trim() !== "") {
            await fetchSearchSuggestions(searchTerm); 
        } else {
            // Clear suggestions if input is empty
            setSuggestions([]);
        }
    };

    const handleSearch = async () => {
        if (query.trim()) {
            await fetchSearchResults(query); 
            navigate("/results"); // Navigate to results page
        } else {
            alert("Please enter a search term.");
        }
    };

    // Handle suggestion click to set query to selected suggestion
    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion); 
        setSuggestions([]); 
    };

    return (
        <Layout>
            <div className="home-page">
                <div className="search-container">
                    <div className="search-bar">
                        <i
                            className="bx bx-search search-icon"
                            onClick={handleSearch} // Trigger search on icon click
                            style={{ cursor: "pointer" }}
                        ></i>
                        <input
                            type="text"
                            value={query}
                            placeholder="..."
                            onChange={handleInputChange} // Trigger suggestions on input change
                            className="search-input"
                        />
                        <i className="bx bx-slider"></i>
                    </div>
                    {suggestions.length > 0 && (
                        <ul className="autocomplete-dropdown">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)} // Select suggestion
                                    className="autocomplete-item"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
