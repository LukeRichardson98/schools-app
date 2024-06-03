import React from 'react';

function SearchBar({ searchTown, onSearchChange }) {
    return (
        <input
            type="text"
            value={searchTown}
            onChange={onSearchChange}
            placeholder="Enter town name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
    );
}

export default SearchBar;
