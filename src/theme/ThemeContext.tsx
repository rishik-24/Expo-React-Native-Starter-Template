import { createContext, ReactNode, useState } from "react";

export type ThemeContextType = {
  currentTheme: string;
  toggleTheme: (newTheme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "dark",
  toggleTheme: () => {},
});

const ThemeProvider = ({ Children }: { Children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      {Children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
