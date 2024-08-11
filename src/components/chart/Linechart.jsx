"use client"
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', holders: 120 },
  { month: 'Feb', holders: 150 },
  { month: 'Mar', holders: 180 },
  { month: 'Apr', holders: 200 },
  { month: 'May', holders: 220 },
  { month: 'Jun', holders: 250 },
  { month: 'Jul', holders: 300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-black border border-gray-600 p-2 shadow-md">
        <p className="font-bold text-black">{`${label}`}</p>
        <p className="text-gray-200">{`Holders: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const AreaChartComponent = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-gray-200 to-gray-300" style={{marginLeft:"30%"}} >
      <div className="bg-gray-100 p-6 rounded-lg " style={{ width: '70%',  }}>
        <ResponsiveContainer width="90%" height={400}>
          <AreaChart data={data} margin={{ top: 50, right: 30, left: 30, bottom: 50 }}>
            {/* Title */}
            <text 
              x="50%" 
              y="30" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-[20px] font-extrabold text-gray-700"
            >
              OP Holders Over The Time
            </text>

            {/* X-axis label */}
        

            {/* Y-axis label */}
            <text 
              x="0" 
              y="230" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-[14px] font-medium text-gray-600"
              transform="rotate(-90, 0, 200)"
            >
              Number of Holders
            </text>

            <defs>
              <linearGradient id="colorHolders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4B5563" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4B5563" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#4B5563" />
            <YAxis stroke="#4B5563" />
            <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="holders"
              stroke="#4B5563"
              fillOpacity={1}
              fill="url(#colorHolders)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartComponent;
