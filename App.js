import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [mainquery, setmainQuery] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Note: In production, these should be in environment variables
  const apiKey = 'AIzaSyCqocUd778kXNOoetOgpNF3p9t1Xszdx3Q';
  const cx = 'a07badb9dd50143f0';

  const handleSearch = async () => {
    if (!mainquery.trim()) {
      setError('Please enter a company name');
      return;
    }
    
    setError('');
    setImageUrl('');
    setIsLoading(true);
    
    try {
      // Remove cors-anywhere in production and handle CORS properly on your backend
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(mainquery + " logo")}&searchType=image&num=1`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        setImageUrl(data.items[0].link);
      } else {
        setError('No logo found. Try a different company name.');
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to fetch logo. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <h1>Logo Finder</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter company name"
          value={mainquery}
          onChange={(e) => setmainQuery(e.target.value)}
          // onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button 
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
      
      {error && <p className="error">{error}</p>}
      
      <div className="result-container">
        {isLoading && <div className="loader"></div>}
        {imageUrl && (
          <>
            <img src={imageUrl} alt={`${mainquery}logo`}/>
            <div className="image-meta">
              <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                View original
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;