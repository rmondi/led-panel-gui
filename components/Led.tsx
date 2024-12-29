"use client";

import { useState, useEffect, useContext } from "react"
import { LedsContext } from "@/utils/context/Leds"

type LedType = {
  color: string;
  index: number;
}

const Led = ( { color, index }: LedType ) => {

  const { selection, setSelection } = useContext( LedsContext )
  const [ isSelected, setIsSelected ] = useState( false )

  useEffect( () => {
    console.log(isSelected)
    !selection.length && setIsSelected( false )
  }, [ selection ] )

  const handleClick = () => {
    let newSelection = selection
    
    const indexPos = newSelection.indexOf( index as never )
    
    if ( indexPos === -1 ) newSelection.push( index as never )
    else newSelection.splice( indexPos, 1 )
    
    setSelection( [ ...newSelection ] )
    setIsSelected( !isSelected )
  }
  
  return (
    <div
      className="cursor-pointer"
      style={ { border: isSelected ? "2px dashed #2980B9" : "none" } }
      onClick={ handleClick }
    >
      <div
        className="h-full"
        style={ { backgroundColor: `rgb(${ color === "0,0,0" ? "189,195,199" : color })` } }
      ></div>
    </div>
  )
}

export default Led