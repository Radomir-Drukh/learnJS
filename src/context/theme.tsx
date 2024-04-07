import React from "react";
import {UseTheme} from "../hooks/theme";
export type Theme = "white" | "dark";
export const ThemeContext = React.createContext<UseTheme>({
  theme: "dark",
  setTheme: () => {},
});
