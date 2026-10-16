import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ShowCard from "./ShowCard";

function Home() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInitialShows = () => {
    fetch("https://api.tvmaze.com/shows?page=0")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch shows");
        }
        return res.json();
      })
      .then((data) => {
        setShows(data.slice(0, 40));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInitialShows();
  }, []);

  const handleSearch = (query) => {
    if (!query.trim()) {
      fetchInitialShows();
      return;
    }
    setLoading(true);
    setError(null);
    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Search request failed");
        }
        return res.json();
      })
      .then((data) => {
        const searchResults = data
          .map((item) => item.show)
          .filter(Boolean);
        setShows(searchResults);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleReset = () => {
    setSearch("");
    fetchInitialShows();
  };

  return (
    <div className="container">
      <div className="home-header">
        <h1>Browse Shows</h1>
      </div>

      <div className="controls-bar">
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
          onReset={handleReset}
        />
      </div>

      <div className="results-header">
        <h3>Shows: {shows.length}</h3>
      </div>

      {loading && (
        <div className="status-message">
          <h2>Loading shows...</h2>
        </div>
      )}

      {error && !loading && (
        <div className="status-message">
          <h2>Error loading shows</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && shows.length === 0 && (
        <div className="status-message">
          <h2>No shows found</h2>
          <p>Try searching for another show.</p>
        </div>
      )}

      {!loading && !error && (
        <div className="shows-grid">
          {shows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
