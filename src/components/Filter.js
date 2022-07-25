import React from "react";

function Filter({ onCategoryChange, searchChange, onSearchChange }) {

  function handleSearchFilter (event) {
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        onChange={handleSearchFilter}
        placeholder="Search..."
        value={searchChange} />

      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
