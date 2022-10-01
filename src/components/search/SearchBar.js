import "./searchBar.css";

const SearchBar = ({ onChange, placeholder }) => {
  return (
    <div className="SearchBar">
      <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
