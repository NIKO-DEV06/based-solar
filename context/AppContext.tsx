"use client";

import React, { createContext, useState, useContext } from "react";
type AppContextType = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState("en");

  const value: AppContextType = {
    state,
    setState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
