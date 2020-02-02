import React from "react"
import { Box, Text } from "rebass/styled-components"

export const Quote = props => {
  return (
    <Box py={2} mt={[0, 4]}>
      <Text style={{ fontStyle: "italic", textAlign: "center" }} fontSize={3}>
        {props.children}
      </Text>
    </Box>
  )
}
