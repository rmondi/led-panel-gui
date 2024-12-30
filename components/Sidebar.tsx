"use client";

import ColorPicker from "./ColorPicker";

const Sidebar = () => {
  
  return (
    <aside className="min-h-40 xl:w-80 xl:h-auto bg-slate-200">
      <div className="flex flex-col justify-center px-5 sm:px-8 py-4 sm:py-6 h-full">
        <ColorPicker />
      </div>
    </aside>
  )
}

export default Sidebar