"use client";
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useInView } from 'react-intersection-observer';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DailyTransactions = () => {
  const [chartKey, setChartKey] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger every time
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Increment key to force re-render
      setChartKey(prevKey => prevKey + 1);
    }
  }, [inView]);

  // Sample data
  const data = {
    labels: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05', '2024-08-06', '2024-08-07'], // Dates
    datasets: [
      {
        label: 'Daily OP Transfers(M)',
        data: [120, 200, 180, 220, 150, 250, 300], // Example transaction counts
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // Bar fill color
        borderColor: '#4B5563', // Bar border color
        borderWidth: 1,
        // animation: {
        //   duration: 1000, // Duration of the animation
        //   easing: 'easeOutQuart', // Animation easing
        // },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: '$OP Transfers',
        font: {
          size: 24,
          weight: '780',
        },
        color: 'Black',
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Transactions: ${tooltipItem.raw}`;
          },
        },
        backgroundColor: 'rgba(55, 65, 81, 0.8)',
        titleColor: '#000',
        bodyColor: '#fff',
        borderColor: '#6B7280',
        borderWidth: 1,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#4B5563',
        },
      },
      y: {
        title: {
          display: true,
          text: '',
          color: '#4B5563',
          font: {
            size: 14,
            weight: '600',
          },
        },
        ticks: {
          color: '#4B5563',
        },
      },
    },
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-200 to-gray-300" style={{ marginLeft: "30%", marginTop: "30px" }}>
      <div className="bg-gray-100 p-6rounded-lg shadow-lg" style={{ width: '70%' }}>
        <div ref={ref} style={{ width: '90%', height: '400px', marginLeft: "20px",paddingBottom:"10px" }}>
          <Bar key={chartKey} data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DailyTransactions;