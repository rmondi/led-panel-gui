"use client";

import { useContext } from "react"
import { LedsContext } from "@/utils/context/Leds";

const SendButton = () => {

  const { leds } = useContext( LedsContext )

  const handleClick = () => {

    const url = `${ process.env.NEXT_PUBLIC_SERVER_URL }/send`
    
    const headers = new Headers()
    headers.append( "Content-Type", "application/json" )

    const raw = JSON.stringify( { leds:leds } )

    fetch( url, {
      method: "POST",
      headers: headers,
      body: raw
    } )
    .then( response => response.text() )
    .then( result => console.log( result ) )
    .catch( error => console.error( error.message ) )
  }
  
  return (
    <button
      className="flex-grow inline-flex justify-center items-center h-12 px-6 rounded bg-green-700 text-white font-semibold"
      onClick={ handleClick }
    >
      Envoyer
    </button>
  )
}

export default SendButton