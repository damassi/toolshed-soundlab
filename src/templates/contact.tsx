import React from "react"
import { Box, Flex } from "rebass/styled-components"
import { Spacer } from "src/components/Spacer"
import ReactMarkdown from "react-markdown"

export const ContactTemplate = props => {
  const {
    frontmatter: { title, content },
  } = props

  return (
    <Box>
      <Flex justifyContent="center">
        <Flex flexDirection="column" width="100%" alignItems="center">
          <h1 style={{ textAlign: "center" }}>{title}</h1>
        </Flex>
      </Flex>

      <Spacer my={4} />

      <Box>
        <ReactMarkdown source={content} />
      </Box>
    </Box>
  )
}
