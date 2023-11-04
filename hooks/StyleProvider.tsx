import React, { createContext, useState, useContext, useEffect } from "react";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "@/styles/theme";
const divine = localFont({
  src: "../styles/fonts/divine_imperium.woff2",
  variable: "--divine",
});

const lynojean = localFont({
  src: "../styles/fonts/lyno-jean.woff2",
  variable: "--divine",
});
const lynostan = localFont({
  src: "../styles/fonts/lyno-stan.woff2",
  variable: "--divine",
});
const lynoulys = localFont({
  src: "../styles/fonts/lyno-ulys.woff2",
  variable: "--divine",
});
const lynowalt = localFont({
  src: "../styles/fonts/lyno-walt.woff2",
  variable: "--divine",
});

const lorenza = localFont({
  src: "../styles/fonts/lorenza.woff2",
  variable: "--divine",
});

const fonts = {
  divine: divine.className,
  lynojean: lynojean.className,
  lynostan: lynostan.className,
  lynoulys: lynoulys.className,
  lynowalt: lynowalt.className,
  lorenza: lorenza.className,
};

const StyleContext = createContext({
  fonts,
  toggleTheme: () => {},
});

export const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <StyleContext.Provider value={{ fonts, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) throw new Error("useStyle e");

  return context;
};
