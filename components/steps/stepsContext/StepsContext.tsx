import React, {Dispatch, SetStateAction, useState} from 'react';
import {TClient} from '../../../types/client';

type TStepsContext = {
  activeStepIndex: number;
  setActiveStepIndex: Dispatch<SetStateAction<number>>;
  selectedClient: TClient | null;
  setSelectedClient: Dispatch<SetStateAction<TClient | null>>;
};

type TStepsContextContextProps = {
  children?: React.ReactNode;
};

const initialState: TStepsContext = {
  activeStepIndex: 0,
  selectedClient: null,
  setSelectedClient: () => null,
  setActiveStepIndex: () => null,
};

export const StepsContext = React.createContext<TStepsContext>(initialState);

export const StepsContextProvider = ({children}: TStepsContextContextProps) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [selectedClient, setSelectedClient] = useState<TClient | null>(null);

  return (
    <StepsContext.Provider
      value={{
        activeStepIndex,
        selectedClient,
        setSelectedClient,
        setActiveStepIndex,
      }}>
      {children}
    </StepsContext.Provider>
  );
};
