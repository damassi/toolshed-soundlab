import React from "react"
import { ThemeProvider } from "./src/Theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
