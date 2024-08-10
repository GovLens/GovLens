import React from 'react'
import { Text } from './Text'
import { Card } from './Card'
import {Title} from "@/components/Title"

export default function Hero() {

   const data =[
    {
      title:" DAO Health Score",
      subtitle:"Gain Actionable insights into your DAO’s health",
      url:"/icon/heart.png"
    },
    {
      title:"Risk Assessment",
      subtitle:"Gain Actionable insights into your DAO’s health",
      url:"/icon/risk.png"
    },{
      title:"Community Engagement",
      subtitle:"Understand insights of DAO and engage with your community",
      url:"/icon/community.png"
    },{
      title:"Data-Driven Insights",
      subtitle:"Make Informed Decisions with Data",
      url:"/icon/data.png"
    },
   ]
  return (
    <div  
    style={{
      backgroundImage: "url('/img/bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      height: '100vh', 
      opacity: '0.9',
    }}
    className='mt-24'
    >
      <Text/>
      <div className=' h-[300px]  bg-[#D2DAD9]'>
      <Title title= {"Key Features"} />
      <div className='flex  flex-wrap gap-10 ml-16'>
      {
            data.map((item, index) => (
              <Card key={index} title={item.title} subtitle={item.subtitle} url={item.url} />
            ))
          }

      </div>

      </div>
     
    </div>
  )
}
