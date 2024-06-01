import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import schoolData from './data/ks2_results_data.json'; // Adjust the path as needed
import SchoolChart from './SchoolChart';

function SchoolDetail() {
    const params = useParams();

    const schoolId = params.schoolId;
    console.log(schoolId)
    const school = schoolData.find(school => school.school_id === params.schoolId);

    if (school) {
        // School found, you can now use foundSchool
        console.log(school);
    } else {
        // School not found
        console.log("School not found");
    }


    return (
        <div>
            <h1>School Detail Page</h1>
            <ul>
                <li>
                    School ID: {params.schoolId};
                </li>
                <li>
                    School Name: {school.SCHNAME};
                </li>
                <li>
                    School score: {school.PTRWM_EXP};
                </li>
            </ul>
            <SchoolChart school={school} />
            {/* Display school details using Highcharts */}
        </div>
    );
}


export default SchoolDetail;
