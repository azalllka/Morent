import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <div className="search-bar">
        <input
            type="text"
            className="input-with-icons"
            placeholder="Search something here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
);

export default SearchBar; 