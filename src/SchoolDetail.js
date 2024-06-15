// SchoolDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import schoolData from './data/ks2_results_data.json'; // Adjust the path as needed
import SchoolChart from './SchoolChart';
import './SchoolDetail.css'; // Import the CSS file for styling

function SchoolDetail() {
    const { schoolIds } = useParams();
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const ids = schoolIds.split(',');
        const selectedSchools = ids.map(id => schoolData.find(school => school.school_id === id)).filter(Boolean);
        setSchools(selectedSchools);
    }, [schoolIds]);

    if (schools.length === 0) {
        return <div>No schools found</div>;
    }

    // Get columns excluding the first 'field1' column
    const columns = Object.keys(schools[0]).filter(column => column !== 'field1');

    return (
        <div>
            <h1>School Detail Page</h1>
            <div className="table-container">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            {columns.map(column => (
                                <th key={column} className={`py-2 ${column === 'SCHNAME' ? 'sticky-col' : ''}`}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {schools.map(school => (
                            <tr key={school.school_id}>
                                {columns.map(column => (
                                    <td key={column} className={`border px-4 py-2 ${column === 'SCHNAME' ? 'sticky-col' : ''}`}>{school[column]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <SchoolChart schools={schools} />
        </div>
    );
}

export default SchoolDetail;
