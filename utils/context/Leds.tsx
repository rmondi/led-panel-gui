"use client";

import { useState, createContext } from "react";

import {
  LedsType,
  SelectionType,
  LedsContextType,
  LedsContextDefault,
  LedsProviderType } from "../types";

export const LedsContext = createContext<LedsContextType>( LedsContextDefault )

export const LedsProvider = ( { children }: LedsProviderType ) => {

  const init = () => {
    const initialLeds = []
  
    const cols: number = parseInt( process.env.NEXT_PUBLIC_COLS as string )
    const rows: number = parseInt( process.env.NEXT_PUBLIC_ROWS as string )
  
    for ( let led = 1; led <= cols * rows; led++ ) {
      initialLeds.push( "0,0,0" );
    }

    return initialLeds
  }

  const initialLeds = init()

  const [ leds, setLeds ] = useState<LedsType>( initialLeds )
  const [ selection, setSelection ] = useState<SelectionType>( [] )

  const reset = () => {
    const initialLeds = init()
    setLeds( initialLeds )
    setSelection( [] )
  }

  return (
    <LedsContext.Provider value={ { leds, setLeds, selection, setSelection, reset } }>
      { children }
    </LedsContext.Provider>
  )
}