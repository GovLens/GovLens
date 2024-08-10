import React from 'react'
import { Title } from '../components/Title'
import VisionMissionCard from "../components/VisionMissionCard"

const data = [
    {title:"Vision",
    imageUrl:"/img/vision.jpg",
    subtitle:"GovLens envisions a future where decentralized organizations are robust, efficient, and community-centric, powered by a platform that delivers unparalleled governance intelligence."

},
    {title:"Mission",
        imageUrl:"/img/Mission.jpg",
        subtitle:"GovLens empowers DAOs and their communities by providing actionable insights and tools to optimize governance, foster transparency, and drive collective success."
    }

]


export default function VisionMission() {
  return (
    <div className='bg-[#D2DAD9] h-[380px] pt-8 '>
       <Title title={"Vision And Mission "}/>
       <div className='flex items-center justify-center gap-16 mt-16 '>
       <VisionMissionCard  title={data[0].title}           imageUrl={data[0].imageUrl}  subtitle={data[0].subtitle}    />
       <VisionMissionCard  title={data[1].title}           imageUrl={data[1].imageUrl}  subtitle={data[1].subtitle}    />
       </div>
      
      <div className='h-24  bg-[#d2dad9] '>
      <h1 className="text-center pt-10 text-gray-600 dark:text-gray-300 font-semibold text-sm md:text-base lg:text-lg dark:bg-gray-900">
     Copyright ©️ 2024, Created by GovLens
</h1>

      </div>
 
    </div>
  )
}
