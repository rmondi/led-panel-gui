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

  const initialLeds = []

  const cols: number = parseInt( process.env.NEXT_PUBLIC_COLS as string )
  const rows: number = parseInt( process.env.NEXT_PUBLIC_ROWS as string )

  for ( let led = 1; led <= cols * rows; led++ ) {
    initialLeds.push( "0,0,0" );
  }

  const [ leds, setLeds ] = useState<LedsType>( initialLeds )
  const [ selection, setSelection ] = useState<SelectionType>( [] )

  return (
    <LedsContext.Provider value={ { leds, setLeds, selection, setSelection } }>
      { children }
    </LedsContext.Provider>
  )
}