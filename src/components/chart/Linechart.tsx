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
      <div className="bg-white border border-gray-300 p-2 shadow-md">
        <p className="font-bold">{`${label}`}</p>
        <p className="text-blue-600">{`Holders: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const AreaChartComponent = () => {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        OP Token Holders Over Time
      </h1>
      <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorHolders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#4b5563" />
            <YAxis stroke="#4b5563" />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="holders"
              stroke="#3b82f6"
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
