"use client";

import Sidebar from "@/components/Sidebar";
import Workspace from "@/components/Workspace";

const Home = () => {
  
  return (
    <div className="flex-grow xl:flex xl:items-stretch">
      <Sidebar />
      <div className="xl:flex-grow flex justify-center xl:items-center my-8 xl:my-0">
        <Workspace />
      </div>
    </div>
  )
}

export default Home