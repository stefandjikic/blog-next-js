import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchValue === '') {
        setSearchResults([]);
      } else {
        const res = await fetch(`/api/search?value=${searchValue}`);
        const { results } = await res.json();
        console.log(results)
        setSearchResults(results);
      }
    }
    fetchResults();
  }, [searchValue])
  return (
    <div className="container pt-6 px-4 mx-auto flex items-center justify-center md:justify-end">
      <div className="relative text-gray-400 cursor-pointer">
        <form>
          <input
            type="search"
            name="search"
            className="border border-gray-300 h-10 pl-9 pr-2 rounded text-sm w-72 focus:outline-none focus:border-yellow-600"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search posts..."
          />
          <FaSearch className="absolute top-0 left-0 mt-3 ml-3" />
        </form>
      </div>

      <SearchResults results={searchResults}/>
    </div>
  );
};

export default Search;
