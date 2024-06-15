// SchoolChart.js
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

function SchoolChart({ schools }) {
    useEffect(() => {
        if (schools && schools.length > 0) {
            const subjects = Object.keys(schools[0]).filter(key => key.startsWith('DIFFN_'));
            const seriesData = schools.map(school => ({
                name: school.SCHNAME,
                data: subjects.map(subject => parseFloat(school[subject])),
            }));

            const options = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'School Performance by Subject'
                },
                xAxis: {
                    categories: subjects
                },
                yAxis: {
                    title: {
                        text: 'Performance'
                    }
                },
                series: seriesData
            };

            Highcharts.chart('school-chart', options);
        }
    }, [schools]);

    return (
        <div id="school-chart"></div>
    );
}

export default SchoolChart;
