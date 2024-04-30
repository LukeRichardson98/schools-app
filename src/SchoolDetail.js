import React from 'react';
import { useParams } from 'react-router-dom';

function SchoolDetail() {
    const { schoolId } = useParams();

    return (
        <div>
            <h1>School Detail Page</h1>
            <p>School ID: {schoolId}</p>
            {/* Display school details using Highcharts */}
        </div>
    );
}

export default SchoolDetail;
