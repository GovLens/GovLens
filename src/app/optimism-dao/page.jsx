"use client"
import { useEffect, useState } from 'react';
import LineChart from '@/components/chart/Linechart';
import OpPrice from '@/components/chart/OpPrice';
import Navbar from '@/components/Navbar';
import Content from './Content';
import Airdops from "../../components/chart/Airdops";
import DailyTransactions from "../../components/chart/DailyTransactions";
import Proposals from './Proposals';
import StatsBar from './StatsBar';

export default function Page() {
  const [view, setView] = useState("analysis");
  const [opHolder, setOpHolder] = useState([]);
  const [opPrice, setOpPrice] = useState([]);
  const [airdrops, setAirdrops] = useState([]);
  const [transfer, setTransfer] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSetView = (newView) => {
    setView(newView);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api/get-data');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.result.rows);
        const reversedRows = data.result.rows.reverse();
        setOpHolder(reversedRows);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    getData();
  }, []);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const priceResponse = await fetch('/api/get-op-price');
        if (!priceResponse.ok) {
          throw new Error(`HTTP error! Status: ${priceResponse.status}`);
        }
        const airdropsResponse = await fetch('/api/get-op-airdrops');
        if (!airdropsResponse.ok) {
          throw new Error(`HTTP error! Status: ${airdropsResponse.status}`);
        }
        const transferResponse = await fetch('/api/op-transfer');
        if (!transferResponse.ok) {
          throw new Error(`HTTP error! Status: ${transferResponse.status}`);
        }
  
        const priceData = await priceResponse.json();
        const airdropsData = await airdropsResponse.json();
        const transferData = await transferResponse.json();
  
        console.log(transferData);
        const reversedRows = priceData.result.rows.reverse();
        setAirdrops(airdropsData.result.rows);
        setOpPrice(reversedRows);
        setTransfer(transferData.result.rows);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <Content view={view} setView={handleSetView} />
      
      {/* Conditional Rendering Based on View */}
      <div className="bg-[#E2E6E5] p-4">
        {view === "analysis" && (
          <>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            ) : (
              <>
                <StatsBar />
                <LineChart data={opHolder} />
                <OpPrice data={opPrice} />
                <Airdops data={airdrops} />
                <DailyTransactions data={transfer} />
              </>
            )}
          </>
        )}

        {view === "proposals" && (
          <Proposals />
        )}
        <h1 className="text-center pt-10 text-gray-600 dark:text-gray-300 font-semibold text-sm md:text-base lg:text-lg dark:bg-gray-900">
     Copyright ©️ 2024, Created by GovLens
</h1>
      </div>
   
    </div>
  );
}
