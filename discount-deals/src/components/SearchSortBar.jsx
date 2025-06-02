import React from 'react';
import './SearchSortBar.css';

function SearchSortBar({ searchTerm, onSearchChange, sortOption, onSortChange}) {
return (
    <div className="search-sort-bar">
        <label htmlFor="search">Search:</label>
        <input
        id="search"
        type="text"
        placeholder="Search deals..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        />
        <label htmlFor="sort">Sort by:</label>
            <select
                id="sort"
                value={sortOption}
                onChange={(e) => onSortChange(e.target.value)}
            >
            <option value="">Sort by</option>
            <option value="discount">Discount</option>
            <option value="expiry">Expiry</option>
        </select>
    </div>
);
}
export default SearchSortBar;