function SearchBar({ search, setSearch, onSearch, onReset }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(search);
    }
  };

  const handleClear = () => {
    setSearch("");
    if (onReset) {
      onReset();
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search TV shows..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="btn btn-search">
        Search
      </button>
      {search && (
        <button type="button" onClick={handleClear} className="btn btn-reset">
          Clear
        </button>
      )}
    </form>
  );
}

export default SearchBar;
