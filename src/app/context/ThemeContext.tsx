"use client"
import { createContext, useMemo, useState } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import type { Theme } from "@mui/material/styles";
import { useContext } from "react";



interface ThemeContext {
    theme:Theme;
    toggleTheme:() => void;
    isDarkMode:boolean;
}

export const ThemeContext = createContext<ThemeContext>({
    theme: lightTheme, // valor padrão
    toggleTheme: () => {},
    isDarkMode: false,
  });

interface Props {
    children: React.ReactNode
}

export const ThemeProvider:React.FC<Props> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    const theme = useMemo(() => (isDarkMode ? darkTheme:lightTheme), [isDarkMode]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, isDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useThemeContext precisa ser usado dentro de um ThemeProvider');
    }
    return context;
  }