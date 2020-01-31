import React from "react"
import ReactMarkdown from "react-markdown"
import { Flex, Box } from "rebass/styled-components"
import { Spacer } from "src/components/Spacer"

export const LutherieTemplate = props => {
  const {
    frontmatter: { title, content },
  } = props

  return (
    <Box>
      <Flex justifyContent="center">
        <h1>{title}</h1>
      </Flex>
      <Box>
        <img src="/assets/images/lutherie/luthier-shop.jpg" />
      </Box>

      <Spacer my={4} />

      <Box>
        <ReactMarkdown source={content} />
      </Box>
    </Box>
  )
}
