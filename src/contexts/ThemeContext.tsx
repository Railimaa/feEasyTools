import React, { createContext, useCallback, useMemo, useState } from 'react';

interface IThemeContextValues {
  theme: 'dark' | 'light';
  handleToggleTheme: (theme: 'dark' | 'light') => void;
}

export const ThemeContext = createContext({} as IThemeContextValues);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const storageTheme = localStorage.getItem('theme') as 'dark' | 'light';
  const [theme, setTheme] = useState(storageTheme || 'dark');

  // eslint-disable-next-line no-shadow
  const handleToggleTheme = useCallback((theme: 'dark' | 'light') => {
    setTheme(() => {
      const newValue = theme;

      localStorage.setItem('theme', newValue);

      return newValue;
    });
  }, []);

  const contextValues = useMemo(
    () => ({
      theme,
      handleToggleTheme,
    }),
    [theme, handleToggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
}
