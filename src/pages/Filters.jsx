function Filters({ genre, setGenre, sort, setSort, genresList }) {
  return (
    <div className="filters">
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Genres</option>
        {genresList &&
          genresList.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="filter-select"
      >
        <option value="">Sort By</option>
        <option value="rating-high">Rating: High to Low</option>
        <option value="rating-low">Rating: Low to High</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
}

export default Filters;
