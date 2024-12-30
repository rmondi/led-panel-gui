"use client";

import { useState, useEffect, useContext, memo } from "react"
import { LedsContext } from "@/utils/context/Leds"

type LedType = {
  color: string;
  index: number;
}

const Led = memo( ( { color, index }: LedType ) => {

  const { selection, setSelection } = useContext( LedsContext )
  const [ isSelected, setIsSelected ] = useState( false )

  useEffect( () => {
    const ledsSelection: number[] = selection
    ledsSelection.indexOf( index ) !== -1 && setIsSelected( true )
  }, [ selection ] )

  const handleClick = () => {
    let newSelection: number[] = selection
    
    const indexPos = newSelection.indexOf( index )
    
    /** If led is not already selected, add it to selection */
    if ( indexPos === -1 ) newSelection.push( index )
    /** Else remove it from selection */
    else newSelection.splice( indexPos, 1 )
    
    setSelection( newSelection )
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
} )

export default Led