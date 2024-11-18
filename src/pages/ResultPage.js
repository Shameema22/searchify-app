import React, { useContext } from "react";
import Layout from "../components/Layout";
import { SearchContext } from "../context/SearchContext";
import "./../styles/Result.css";

const ResultPage = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <Layout>
      <div className="result-page">
        <div className="grid-container">
          {searchResults.map((result) => (
            <div key={result.id} className="grid-item">
              <img
                src={result.imageUrl}
                alt={result.title}
                className="grid-image"
              />
              <div style={{ padding: "20px" }}>
                <h3 className="result-title">{result.title}</h3>
                <p className="result-description">{result.description}</p>
              </div>              
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ResultPage;
