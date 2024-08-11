"use client";
import { useEffect } from 'react';
import LineChart from '@/components/chart/Linechart'
import OpPrice from '@/components/chart/OpPrice'
import Navbar from '@/components/Navbar'
import React from 'react'
import Content from './Content'
import Airdops from "../../components/chart/Airdops"
import DailyTransactions from "../../components/chart/DailyTransactions"
export default function Page() {
  const [opHolder, setOpHolder] = React.useState([]);
  const [opPrice, setOpPrice] = React.useState([]);
  const [airdrops, setirdrops] = React.useState([]);
  const [transfer, setTransfer] = React.useState([]);
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
        // Handle error appropriately here (e.g., show an error message to the user)
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
        setirdrops(airdropsData.result.rows);
        setOpPrice(reversedRows);
        setTransfer(transferData.result.rows);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error appropriately here (e.g., show an error message to the user)
      }
    };
  
    getData();
  }, []);
  
  return (
    <div>
      <Navbar/>
      <Content/>
      <div className="bg-[#E2E6E5] "  >
      
        <LineChart data = {opHolder}/>
        <OpPrice data ={opPrice}/>
      <Airdops data={airdrops}/>
      <DailyTransactions data ={transfer}/>

      </div>


    </div>
  )
}
