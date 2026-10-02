import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type UiContextValue = {
  introDone: boolean;
  finishIntro: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
};

const UiContext = createContext<UiContextValue | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const value = useMemo(
    () => ({
      introDone,
      finishIntro: () => setIntroDone(true),
      menuOpen,
      setMenuOpen,
      cartOpen,
      setCartOpen,
    }),
    [introDone, menuOpen, cartOpen]
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export const useUi = () => {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error('useUi must be used inside UiProvider');
  return ctx;
};
