"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement, Title);

const AirdopsChartJS = () => {
  const data = {
    labels: ['Airdrop 1', 'Airdrop 2', 'Airdrop 3'],
    datasets: [
      {
        label: 'Airdrops',
        data: [400, 300, 300],
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: '$OP Airdrops',
        font: {
          size: 14,
          weight: '400', // Equivalent to font-extrabold
        },
        color: 'black', // Equivalent to text-gray-700
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    maintainAspectRatio: false, // Allows you to control the chart size
  };

  return (
    <div className="h-96 p-4 shadow-xl  bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center" style={{ width: "49%", backgroundColor: "#F3F4F6", marginLeft:"30%" ,marginTop:"30px"}}>
      <div className="relative " style={{ width: '400px', height: '400px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default AirdopsChartJS;
