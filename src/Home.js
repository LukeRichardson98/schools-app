// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import schoolData from './data/ks2_results_data.json';
import SearchBar from './SearchBar';
import SchoolTable from './SchoolTable';

function Home() {
    const [searchTown, setSearchTown] = useState('');
    const [filteredSchools, setFilteredSchools] = useState(schoolData);

    const handleSearchChange = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setSearchTown(searchQuery);

        try {
            const filtered = schoolData.filter(school => school.TOWN.toLowerCase().includes(searchQuery));
            setFilteredSchools(filtered);
        } catch (error) {
            console.error("Error filtering schools: ", error);
            setFilteredSchools([]);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">School Search</h1>
            <SearchBar searchTown={searchTown} onSearchChange={handleSearchChange} />
            {!searchTown && (
                <p className="text-gray-600 mb-4">Displaying all schools</p>
            )}
            <SchoolTable schools={filteredSchools} />
        </div>
    );
}

export default Home;
