"use client";

import { useContext } from "react";
import { LedsContext } from "@/utils/context/Leds";

const ResetButton = () => {

  const { reset } = useContext( LedsContext )

  const handleClick = () => reset()
  
  return (
    <button
      className="inline-flex items-center mt-4 h-12 px-6 rounded bg-gray-400 text-white font-semibold"
      onClick={ handleClick }
    >
      Effacer tout
    </button>
  )
}

export default ResetButton