"use client";
import { SectionName } from '@/lib/type';
import React, { createContext, useContext, useState } from 'react';

type ActiveSectionContextProviderProps = {
  children : React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection : SectionName,
  setActiveSection : React.Dispatch<React.SetStateAction<SectionName>>,
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

// Instead of Props drill down, using context provider for tracking the active section
export default function ActiveSectionContextProvider({
      children
} : ActiveSectionContextProviderProps) {
  
  const [ activeSection, setActiveSection ] = useState<SectionName>('Home');
  const [ timeOfLastClick, setTimeOfLastClick ] = useState(0);

  return (
    <ActiveSectionContext.Provider 
      value={{
        activeSection, 
        setActiveSection,
        timeOfLastClick, 
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

// custom hook to handle null value for activeSectionContext
export function useActiveSectionContext() {
  const activeSectionContext = useContext(ActiveSectionContext);

  if (activeSectionContext === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return activeSectionContext;
}