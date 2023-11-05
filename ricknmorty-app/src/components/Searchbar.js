import React from 'react';
import '../styles/Searchbar.css';

const SearchBar = ({ handleSearch }) => {
    return (
        <div className='search-maincontainer d-flex justify-content-center'>
            <div className="search-container">
                <input class="search-input"
                    type="text"
                    placeholder="Search character name..."
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
        </div>

    );
};

export default SearchBar;
