"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextType = {
  guide: {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
  };
};

type ContextProviderType = {
  children: ReactNode;
};

export const AppContext = createContext({} as ContextType);

export const AppContextProvider = ({ children }: ContextProviderType) => {
  const [visible, setVisible] = useState(false);
  return (
    <AppContext.Provider value={{ guide: { visible, setVisible } }}>
      {children}
    </AppContext.Provider>
  );
};
