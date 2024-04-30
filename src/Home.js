import React, { useState } from 'react';
import schoolData from './data/ks2_results_data.json'; // Adjust the path as needed

function Home() {
    const [searchTown, setSearchTown] = useState('');
    const [filteredSchools, setFilteredSchools] = useState([]);

    const handleSearchChange = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setSearchTown(searchQuery); // Update searchTown state with the search query
        const filteredSchools = schoolData.filter(school => school.TOWN.toLowerCase().includes(searchQuery));
        setFilteredSchools(filteredSchools);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">School Search</h1>
            <input
                type="text"
                value={searchTown}
                onChange={handleSearchChange}
                placeholder="Enter town name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            {!searchTown && (
                <p className="text-gray-600 mb-4">Displaying all schools</p>
            )}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">School Name</th>
                        <th className="px-4 py-2 text-left">PTRWM_EXP</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSchools.map((school, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                            <td className="px-4 py-2">{school.SCHNAME}</td>
                            <td className="px-4 py-2">{school.PTRWM_EXP}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Home;
