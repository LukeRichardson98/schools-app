import React from 'react';
import { Link } from 'react-router-dom';

function SchoolTable({ schools }) {
    return (
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">School Name</th>
                    <th className="px-4 py-2 text-left">PTRWM_EXP</th>
                </tr>
            </thead>
            <tbody>
                {schools.map((school, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                        <td className="px-4 py-2">
                            <Link to={`/schools/${school.school_id}`}>{school.SCHNAME}</Link>
                        </td>
                        <td className="px-4 py-2">{school.PTRWM_EXP}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SchoolTable;
