import LineChart from '@/components/chart/Linechart'
import OpPrice from '@/components/chart/OpPrice'
import Navbar from '@/components/Navbar'
import React from 'react'
import Content from './Content'

export default function page() {
  return (
    <div>
       <Navbar/>

       <Content/>
       <div className=''>
       <LineChart/>
       <OpPrice/>
       </div>
      
    </div>
  )
}
