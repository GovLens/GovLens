"use client"
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Bar, ComposedChart } from 'recharts';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-black border border-gray-600 p-2 ">
        <p className="font-bold text-gray-700">{label}</p>
        <p className="text-blue-600">Price: ${payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

const OpPrice = ({data}) => {
  const [chartData, setChartData] = useState([]);
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
console.log(data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData(data);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      setKey(prev => prev + 1);
    }
  }, [inView]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
      style={{marginLeft:"30%",marginTop:"25px"}}
    >
      <div className="bg-gray-100 p-6 rounded-lg" style={{ width: '70%' }}>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart key={key} data={data} margin={{ top: 50, right: 30, left: 30, bottom: 50 }}>
            <text 
              x="50%" 
              y="30" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-[24px] font-bold	 text-gray-700"
            >
              $OP Trades / Price
            </text>

            <text 
              x="-30" 
              y="200" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-[14px] font-medium text-gray-600"
              transform="rotate(-90, -30, 200)"
            >
              Volume (M)
            </text>

            <text 
              x="100%" 
              y="200" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-[14px] font-medium text-gray-600"
              transform="rotate(90, 400, 200)"
              dx="-10"
            >
              Price
            </text>

            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" stroke="#4b5563" />
            <YAxis yAxisId="left" stroke="#ef4444" domain={[0, 'dataMax']} />
            <YAxis yAxisId="right" orientation="right" stroke="" domain={[0, 'dataMax']} tick={false} />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area 
              yAxisId="right"
              type="monotone" 
              dataKey="price" 
              stroke="#3b82f6" 
              fillOpacity={0.3} 
              fill="url(#colorPrice)" 
              name="Price"
            />
            <Bar 
              yAxisId="left"
              dataKey="volume" 
              fill="#ef4444" 
              barSize={20}
              name="Volume (M)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default OpPrice;