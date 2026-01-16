"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface MenuContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return <MenuContext.Provider value={{ isLoading, startLoading, stopLoading }}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}
