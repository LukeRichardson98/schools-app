// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import schoolData from './data/ks2_results_data.json';
import SearchBar from './SearchBar';
import SchoolTable from './SchoolTable';
import SelectedSchools from './SelectedSchools';
import './Home.css'; // Import the CSS file for layout

function Home() {
    const [searchTown, setSearchTown] = useState('');
    const [filteredSchools, setFilteredSchools] = useState(schoolData);
    const [selectedSchools, setSelectedSchools] = useState([]);
    const navigate = useNavigate();

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

    const handleCheckboxChange = (schoolId) => {
        setSelectedSchools(prevSelected =>
            prevSelected.includes(schoolId)
                ? prevSelected.filter(id => id !== schoolId)
                : [...prevSelected, schoolId]
        );
    };

    const handleCompare = () => {
        navigate(`/compare/${selectedSchools.join(',')}`);
    };

    const isCompareDisabled = selectedSchools.length === 0;
    const compareButtonText = isCompareDisabled ? 'Select schools to get started' : 'Compare Selected Schools';

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">School Search</h1>
            <SearchBar searchTown={searchTown} onSearchChange={handleSearchChange} />
            <div className="flex">
                <div className="w-3/4">
                    {!searchTown && (
                        <p className="text-gray-600 mb-4">Displaying all schools</p>
                    )}
                    <SchoolTable schools={filteredSchools} onCheckboxChange={handleCheckboxChange} selectedSchools={selectedSchools} />
                </div>
                <div className="w-1/4 pl-4">
                    <SelectedSchools selectedSchools={selectedSchools} schoolData={schoolData} />
                    <button
                        onClick={handleCompare}
                        className={`mt-4 px-4 py-2 rounded ${isCompareDisabled ? 'bg-orange-300 text-gray-700' : 'bg-blue-500 text-white'}`}
                        disabled={isCompareDisabled}
                    >
                        {compareButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
