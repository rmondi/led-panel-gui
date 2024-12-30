"use client";

import { useContext } from "react";
import { LedsContext } from "@/utils/context/Leds";


import { ColorType } from "@/utils/types";

type ChangeColorButtonType = {
  color: ColorType
}

const ChangeColorButton = ( { color }: ChangeColorButtonType ) => {

  const { leds, setLeds, selection, setSelection } = useContext( LedsContext )

  const handleClick = () => {
      if (selection.length) {
        selection.forEach( led => leds[ led ] = `${color.r},${color.g},${color.b}` )
        setLeds( leds )
        setSelection( [] )
      }
    }
  
  return (
    <button
      className="inline-flex items-center h-12 px-6 rounded bg-orange-700 text-white font-semibold"
      onClick={ handleClick }
    >
      Changer la couleur
    </button>
  )
}

export default ChangeColorButton