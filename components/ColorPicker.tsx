"use client";

import { useState } from "react";
import { RgbaColorPicker } from "react-colorful";

import ChangeColorButton from "./ChangeColorButton";
import ResetButton from "./ResetButton";

import { ColorType } from "@/utils/types";

const ColorPicker = () => {

  const [ color, setColor ] = useState<ColorType>( { r: 255, g: 255, b: 255, a: 1 } )
  
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <RgbaColorPicker color={ color } onChange={ setColor } />
      </div>
      <div className="flex flex-col items-center mt-8">
        <ChangeColorButton color={ color } />
        <ResetButton />
      </div>
    </div>
  )
}

export default ColorPicker