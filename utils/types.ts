export type LedsType = string[] | [];

export type SelectionType = number[] | [];

export type LedsContextType = {
  leds: LedsType;
  setLeds: ( args0: LedsType ) => void;
  selection: SelectionType;
  setSelection: ( arg0: SelectionType ) => void;
}

export const LedsContextDefault: LedsContextType = {
  leds: [],
  setLeds: () => {},
  selection: [],
  setSelection: () => {}
}

export type LedsProviderType = {
  children: React.ReactNode;
}