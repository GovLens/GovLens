import React from "react";
import Proposals from "@/app/optimism-dao/Proposals";
import Navbar from "@/components/Navbar";
function page() {
    return (
      <>
        <div className="bg-image fixed top-0 left-0 w-full h-16 bg-white z-50">
          <Navbar />
        </div>
        <div className="pt-24">
          <Proposals />
        </div>
    
      </>
    );
  }
  
  export default page;