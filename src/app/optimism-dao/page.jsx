import LineChart from '@/components/chart/Linechart'
import OpPrice from '@/components/chart/OpPrice'
import Navbar from '@/components/Navbar'
import React from 'react'
import Content from './Content'
import Airdops from "../../components/chart/Airdops"
export default function Page() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <div className="bg-[#E2E6E5] "  >
      
        <LineChart/>
        <OpPrice/>
      <Airdops/>

      </div>


    </div>
  )
}
