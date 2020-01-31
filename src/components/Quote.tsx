import React from "react"
import { Box, Text } from "rebass/styled-components"

export const Quote = props => {
  return (
    <Box p={2} m={3}>
      <Text style={{ fontStyle: "italic", textAlign: "center" }} fontSize={3}>
        {props.children}
      </Text>
    </Box>
  )
}
