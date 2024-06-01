import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

function SchoolChart({ school }) {
    useEffect(() => {
        if (school) {
            // Extract the subjects and corresponding performance data from schoolData
            const subjects = Object.keys(school).filter(key => key.startsWith('DIFFN_'));
            const performanceData = subjects.map(subject => parseFloat(school[subject]));

            // Create the chart options
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
                series: [{
                    name: 'Performance',
                    data: performanceData
                }]
            };

            // Render the chart
            Highcharts.chart('school-chart', options);
        }
    }, [school]);

    return (
        <div id="school-chart"></div>
    );
}

export default SchoolChart;
