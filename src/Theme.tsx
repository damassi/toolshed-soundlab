import React from "react"
import {
  ThemeProvider as BaseThemeProvider,
  createGlobalStyle,
} from "styled-components"
import theme from "@rebass/preset"
import { Box } from "rebass"

const GlobalStyle = createGlobalStyle`
  html, body {
    color: white;
    font-family: sans-serif;
  }

  h1, h2, h3, h4 {
    /* font-family: Herculanum, Sans; */
    color: #ffc302;
  }

  img {
    padding: 4px;
    border-width: 4px;
    border-style: groove;
    border-color: #ffff0033;
  }

  input {
    border: 0;
    padding-left: 5px;
    padding-right: 5px;
    position: relative;
  }

  button {
    border: 0;
    background-color: white;
  }


`

export const ThemeProvider = props => {
  return (
    <BaseThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Box>{props.children}</Box>
      </>
    </BaseThemeProvider>
  )
}
