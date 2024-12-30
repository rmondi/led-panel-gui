export type LedsType = string[] | [];

export type SelectionType = number[] | [];

export type LedsContextType = {
  leds: LedsType;
  setLeds: ( args0: LedsType ) => void;
  selection: SelectionType;
  setSelection: ( arg0: SelectionType ) => void;
  reset: () => void;
}

export const LedsContextDefault: LedsContextType = {
  leds: [],
  setLeds: () => {},
  selection: [],
  setSelection: () => {},
  reset: () => {}
}

export type LedsProviderType = {
  children: React.ReactNode;
}

export type ColorType = {
  r: number;
  g: number;
  b: number;
  a: number;
}