import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./../styles/Home.css";
import { SearchContext } from "../context/SearchContext";

const HomePage = () => {
    const { query, setQuery, fetchSearchResults } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (query.trim()) {
          await fetchSearchResults(query); // Fetch results
          navigate("/results"); // Navigate to results page
        } else {
          alert("Please enter a search term.");
        }
      };

      return (
        <Layout>
            <div className="home-page">
                <div className="search-container">
                    <div className="search-bar">
                        <i className="bx bx-search search-icon"></i> {/* Search Icon */}
                        <input
                            type="text"
                            value={query}
                            placeholder="Search..."
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="search-button" onClick={handleSearch}>
                            <i className="bx bx-slider"></i> {/* Slider Icon */}
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;