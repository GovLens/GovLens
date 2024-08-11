"use client";
import React, { useState, useCallback, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from 'chart.js';
import { useInView } from 'react-intersection-observer';

ChartJS.register(Tooltip, Legend, ArcElement, Title);

const AirdopsChartJS = ({data}) => {
  const [chartKey, setChartKey] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  // Update chartKey to force re-render when in view
  useEffect(() => {
    if (inView) {
      setChartKey(prevKey => prevKey + 1);
    }
  }, [inView]);

  // Sample data
 
  const pieData = {
    labels: [data[0]?.label,data[1]?.label,data[2]?.label],
    datasets: [
      {
        label: 'Users',
        data: [data[0]?.users,data[1]?.users,data[2]?.users],  
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28'],
        hoverOffset: 4,
        // Animation settings
        animation: {
          duration: 1000, // Duration of the animation
          easing: 'easeOutQuart', // Animation easing
        },
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: '$OP Airdrops',
        font: {
          size: 24,
          weight: '780', // Equivalent to font-normal
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
            console.log(tooltipItem)
            return `Users: ${tooltipItem.raw}`;
          },
        },
      },
    },
    maintainAspectRatio: false, // Allows you to control the chart size
  };

  return (
    <div className="h-96 p-4 shadow-xl bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center" style={{ width: "49%", backgroundColor: "#F3F4F6", marginLeft: "30%", marginTop: "30px" }}>
      <div ref={ref} className="relative" style={{ width: '400px', height: '400px' }}>
        <Pie key={chartKey} data={pieData} options={options} />
      </div>
    </div>
  );
};

export default AirdopsChartJS;
