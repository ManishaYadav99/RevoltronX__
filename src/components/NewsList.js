import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsList = () => {
  // State variables
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch headlines from the News API when component mounts
  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        // Fetch headlines from the News API
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=7e9706f07f9d45f89d44e810d34c53f9"
        );
        // Set headlines in state and mark loading as false
        setHeadlines(response.data.articles);
        setLoading(false);
      } catch (error) {
        // Set error message and mark loading as false if there's an error fetching headlines
        setError("Error fetching headlines");
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Latest Headlines</h2>
      {/* Display loading message if data is being fetched */}
      {loading && <p className="text-gray-600">Loading...</p>}
      {/* Display error message if there's an error fetching headlines */}
      {error && <p className="text-red-500">{error}</p>}
      {/* Display message if no headlines are found */}
      {!loading && headlines.length === 0 && (
        <p className="text-gray-600">No headlines found.</p>
      )}
      {/* Render headlines */}
      <ul>
        {!loading &&
          headlines.map((article, index) => (
            <li
              key={index}
              className="mb-4 bg-red-100 p-4 rounded shadow-md"
            >
              <p className="text-xl font-semibold">{article.title}</p>
              <p className="text-gray-600">
                {article.source.name} -{" "}
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NewsList;
