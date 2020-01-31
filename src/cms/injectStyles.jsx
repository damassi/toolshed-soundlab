import React, { useState, useEffect } from "react"
import { StyleSheetManager } from "styled-components"
import { ThemeProvider } from "src/Theme"
import { Box } from "rebass/styled-components"

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null)

  useEffect(() => {
    const iframe = document.getElementsByTagName("iframe")[0]
    const iframeHeadElem = iframe.contentDocument.head
    setIframeRef(iframeHeadElem)
  }, [])

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <ThemeProvider>{children}</ThemeProvider>
      </StyleSheetManager>
    )
  )
}

export function injectStyles(Comp) {
  return props => {
    const data = {
      frontmatter: props.entry.getIn(["data"]).toJS(),
    }

    return (
      <StyleInjector>
        <Box
          id="hello"
          p={4}
          backgroundColor="#693807"
          style={{
            borderRadius: 4,
          }}
        >
          <Comp {...data} />
        </Box>
      </StyleInjector>
    )
  }
}
