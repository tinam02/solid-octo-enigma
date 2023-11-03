import React, { createContext, useContext } from "react";
import localFont from "next/font/local";

const divine = localFont({
  src: "./divine_imperium.woff2",
  variable: "--divine",
});

const fonts = {
  divine: divine.className,
};

const StyleContext = createContext({
  fonts,
});

export const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyleContext.Provider value={{ fonts }}>{children}</StyleContext.Provider>
  );
};

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) throw new Error("useStyle e");

  return context;
};
