import { createContext, useState, useContext } from "react";

// create a theme context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// setTheme(theme === "#030712" ? "#ffffff" : "#030712");
