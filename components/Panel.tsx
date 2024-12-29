"use client";

import { v4 as uuidv4 } from "uuid";

import { useContext } from "react";
import { LedsContext } from "@/utils/context/Leds";

import Led from "./Led";

const Panel = () => {

  const { leds } = useContext( LedsContext )
  
  return (
    <div
      className="grid gap-0.5 h-64 w-64 xl:h-96 xl:w-96"
      style={ {
        gridTemplateColumns: `repeat(${ process.env.NEXT_PUBLIC_COLS }, 1fr)`,
        gridTemplateRows: `repeat(${ process.env.NEXT_PUBLIC_ROWS }, 1fr)`
      } }
    >
      {
        leds.map( ( color, index ) => <Led key={ uuidv4() } index={ index } color={ color } /> )
      }
    </div>
  )
}

export default Panel