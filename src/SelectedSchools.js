import React from 'react';
import { Link } from 'react-router-dom';

function SelectedSchools({ selectedSchools, schoolData }) {
    const selectedSchoolData = schoolData.filter(school => selectedSchools.includes(school.school_id));

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Selected Schools</h2>
            {selectedSchoolData.length === 0 ? (
                <p className="text-gray-600">No schools selected.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {selectedSchoolData.map((school) => (
                        <li key={school.school_id} className="mb-2">
                            <Link to={`/schools/${school.school_id}`} className="text-blue-500">
                                {school.SCHNAME}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SelectedSchools;
