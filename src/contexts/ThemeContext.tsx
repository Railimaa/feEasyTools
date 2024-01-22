/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useCallback, useState } from 'react';

interface IThemeContextValue {
  theme: 'dark' | 'light';
  handleToggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextValue);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const storageTheme = localStorage.getItem('theme') as 'dark' | 'light';
  const [theme, setTheme] = useState<'dark' | 'light'>(storageTheme || 'dark');

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => {
      const newValue = prevState === 'dark' ? 'light' : 'dark';

      localStorage.setItem('theme', newValue);

      return newValue;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
