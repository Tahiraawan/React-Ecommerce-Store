function Header({ search, setSearch, total }) {

  const getSearchResults = () => {
    if (search && total) {
      return <p>Explore {total}+ products for "{search}"</p>;
    }

    if (total) {
      return <p>Explore {total}+ products</p>;
    }

    return <p>No product found for "{search}"</p>;
  };

  return (
    <header className="header">
      <div className="container">
        <input
          type="text"
          placeholder="Search branded shoes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-results">
          {getSearchResults()}
        </div>
      </div>
    </header>
  );
}

export default Header;
