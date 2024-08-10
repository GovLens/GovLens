"use client"
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { date: 'May 2022', price: 1.2, volume: 120 },
  { date: 'Sep 2022', price: 1.0, volume: 30 },
  { date: 'Jan 2023', price: 2.5, volume: 90 },
  { date: 'May 2023', price: 1.8, volume: 50 },
  { date: 'Aug 2023', price: 1.5, volume: 20 },
  { date: 'Dec 2023', price: 3.8, volume: 110 },
  { date: 'Apr 2024', price: 2.2, volume: 40 },
  { date: 'Aug 2024', price: 1.3, volume: 10 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 p-3 rounded shadow-lg">
        <p className="font-bold text-gray-700">{label}</p>
        <p className="text-blue-600">Price: ${payload[0].value.toFixed(2)}</p>
        <p className="text-red-600">Volume: {payload[1].value}m</p>
      </div>
    );
  }
  return null;
};

const OpPrice = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData(data);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">$OP Trades / Price</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="#4b5563" />
          <YAxis yAxisId="left" stroke="#3b82f6" />
          <YAxis yAxisId="right" orientation="right" stroke="#ef4444" />
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area 
            yAxisId="left"
            type="monotone" 
            dataKey="price" 
            stroke="#3b82f6" 
            fillOpacity={1} 
            fill="url(#colorPrice)" 
            name="Price"
          />
          <Area 
            yAxisId="right"
            type="monotone" 
            dataKey="volume" 
            stroke="#ef4444" 
            fillOpacity={1} 
            fill="url(#colorVolume)" 
            name="Volume"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default OpPrice;