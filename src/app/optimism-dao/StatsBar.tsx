import React, { useState, useEffect } from "react";

const formatNumber = (num:any) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
};

export default function StatsBar() {
  const [stats, setStats] = useState([
    { value:0, label: 'Optimism Unique Users' },
    { value: 0, label: 'Total Gov. Costs' },
    { value: 0, label: 'Total Transaction' },
    { value: 0, label: 'OP Delegated' },
    { value: 0, label: '$OP Airdropped' },
  ]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api/get-op-data');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data......", data);

        setStats([
          { value: formatNumber(data.uniqueUser.result.rows[0]._col0), label: 'Optimism Unique Users' },
          { value: formatNumber(parseFloat(data.govCost.result.rows[0].usd_total)), label: 'Total Gov. Costs' },
          { value: formatNumber(data.totalTransaction.result.rows[0].Transactions), label: 'Total Transaction' },
          { value: formatNumber(parseFloat(data.DelegatedOp.result.rows[0].total_delegated)), label: 'OP Delegated' },
          { value: formatNumber(parseFloat(data.airDropedOp.result.rows[0].OP)), label: '$OP Airdropped' },
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error appropriately here (e.g., show an error message to the user)
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full bg-[#E2E6E5] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg shadow-md">
              <span className="text-xl md:text-2xl font-semibold mb-1 text-blue-600">{stat.value}</span>
              <span className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}