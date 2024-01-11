import React, { createContext, useCallback, useMemo, useState } from 'react';

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
