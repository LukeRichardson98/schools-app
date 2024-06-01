import React from 'react';
import { Link } from 'react-router-dom';

const SchoolList = ({ schools }) => {
    return (
        <div>
            <h2>Schools</h2>
            <ul>
                {schools.map(school => (
                    <li key={school.id}>
                        <Link to={`/schools/${school.id}`}>{school.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SchoolList;
