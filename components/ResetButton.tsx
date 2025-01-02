"use client";

import { useContext } from "react";
import { LedsContext } from "@/utils/context/Leds";

const ResetButton = () => {

  const { reset } = useContext( LedsContext )

  const handleClick = () => {
    reset()

    const url = `${process.env.REACT_APP_SERVER_URL}/clear`
    
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    fetch(url, {
      method: "GET",
      headers: headers
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error(error.message))
  }
  
  return (
    <button
      className="inline-flex items-center h-12 px-6 rounded bg-gray-400 text-white font-semibold"
      onClick={ handleClick }
    >
      Effacer tout
    </button>
  )
}

export default ResetButton