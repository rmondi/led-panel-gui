"use client";

import { useContext } from "react";
import { LedsContext } from "@/utils/context/Leds";


import { ColorType } from "@/utils/types";

type ChangeColorButtonType = {
  color: ColorType
}

const ChangeColorButton = ( { color }: ChangeColorButtonType ) => {

  const { leds, setLeds, selection, setSelection } = useContext( LedsContext )

  const defaultBgColor =
    `${ color.r },${ color.g },${ color.b }` === "255,255,255"
    ? "194, 65, 12"
    : `${ color.r }, ${ color.g }, ${ color.b }`

  const handleClick = () => {
      if ( selection.length ) {
        selection.forEach( led => leds[ led ] = `${color.r},${color.g},${color.b}` )
        setLeds( leds )
        setSelection( [] )
      }
    }
  
  return (
    <button
      className="inline-flex flex-grow justify-center items-center h-12 px-6 rounded text-white font-semibold"
      style={
        {
          backgroundColor: `rgb(${ defaultBgColor })`,
          //textShadow: "0px 0px 4px black"
        }
      }
      onClick={ handleClick }
    >
      Appliquer la couleur
    </button>
  )
}

export default ChangeColorButton