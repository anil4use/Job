import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the chart
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Monthly Earning',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          data: [65, 59, 80, 81, 56],
        },
      ],
    };

    // Chart configuration
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    // Create the chart
    const myChart = new Chart(chartRef.current, config);

    // Clean up the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} width={400} height={200}></canvas>;
}

export default BarChart;
