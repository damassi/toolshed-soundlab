import React from "react"
import ReactMarkdown from "react-markdown"
import { Box, Flex } from "rebass/styled-components"
import { Spacer } from "src/components/Spacer"

export const ClassesWorkshopsTemplate = props => {
  const {
    frontmatter: { title, content },
  } = props

  return (
    <Box>
      <Flex justifyContent="center">
        <Flex flexDirection="column" width="100%" alignItems="center">
          <h1 style={{ textAlign: "center" }}>{title}</h1>

          <Box>
            <img src="/assets/images/classes-workshops/soundlab-banner.jpg" />
          </Box>
        </Flex>
      </Flex>

      <Spacer my={4} />

      <Box>
        <ReactMarkdown source={content} />
      </Box>
    </Box>
  )
}
