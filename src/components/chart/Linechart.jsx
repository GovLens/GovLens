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
      <div className="bg-gray-800 text-white border border-gray-600 p-2 shadow-md">
        <p className="font-bold">{`${label}`}</p>
        <p className="text-gray-200">{`Holders: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const AreaChartComponent = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-gray-200 to-gray-300">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
        OP Token Holders Over Time
      </h1>
      <div className="mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <ResponsiveContainer width="40%" height={400}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
