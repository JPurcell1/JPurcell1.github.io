import React from "react";

const SearchBar = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input 
      className="pa3 b--green bg-lightest-blue" 
      type="search" 
      placeholder="Search Robots..."
      name={searchfield} 
      onChange={searchChange}>
      </input>
    </div>
  )
}

export default SearchBar;