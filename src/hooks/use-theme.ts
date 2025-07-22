import { createContext, useContext } from 'react';

import type { Theme } from '../components/theme-provider';

interface ThemeProviderState {
  setTheme: (theme: Theme) => void;
  theme?: Theme;
}

const initialState: ThemeProviderState = {
  setTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
