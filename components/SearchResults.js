import React from "react";
import Post from "./Post";

const SearchResults = ({ results }) => {
  if (results.length !== 0)
    return (
      <div
        className="absolute z-10 top-56 right-0 md:top-36
      border bg-white text-gray-800 w-full rounded h-screen"
      >
        <div className="p-5">
          <h2 className="text-xl mb-3">{results?.length} Results</h2>
          {results.map((result, i) => (
            <Post key={i} post={result} searchPost />
          ))}
        </div>
      </div>
    );
  return <></>;
};

export default SearchResults;
