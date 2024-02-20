import { useState, createContext } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

export interface TipValueType {
  billAmount: number;
  numPeople: number;
  tip: number;
}

interface ContextState {
  tipValues: TipValueType;
  setTipValues: Dispatch<SetStateAction<TipValueType>>
}

export const AppContext = createContext({} as ContextState);

const AppProvider = ({ children }: PropsWithChildren) => {
  const [tipValues, setTipValues] = useState({
    billAmount: 0,
    numPeople: 0,
    tip: 0,
  });

  const state = {
    tipValues,
    setTipValues
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
