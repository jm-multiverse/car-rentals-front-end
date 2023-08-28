function SearchBar() {
  return (<>
    <form className="d-flex flex-fill">
      <div className="input-group d-flex mb-3">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </div>
    </form>
  </>);
}

export default SearchBar;