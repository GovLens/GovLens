
import Hero from "@/components/Hero";
import Navbar from "../components/Navbar"
import { Explorecard } from "@/components/ExploreDao";
import VisionMission from "@/components/VisionMission";
export default function Home() {
  return (
    <>
    <div className="bg-image "
    >
        <Navbar/>
        <Hero/>
    </div>

    <Explorecard/> 
    <VisionMission/>
        
    </>
      
  );
}
 

