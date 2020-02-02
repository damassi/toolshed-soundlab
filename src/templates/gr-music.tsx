import React from "react"
import ReactMarkdown from "react-markdown"
import { Box, Flex, Text } from "rebass/styled-components"
import { Spacer } from "src/components/Spacer"
import { SectionDivider } from "src/components/SectionDivider"

export const GRMusicTemplate = props => {
  const {
    frontmatter: { content },
  } = props

  return (
    <Box>
      <Box>
        <Flex justifyContent="center">
          <Box mr={2} width={["100%", "40%"]}>
            <Box>
              <h2 style={{ fontFamily: "Herculanum", marginBottom: 5 }}>
                george rezendes
              </h2>
              <h4>country blues, ragtime, folk and roots-rock</h4>
            </Box>
            <img src="/assets/images/gr-music/first-strat-67.jpg" />
          </Box>
          <Box>
            <img src="/assets/images/gr-music/george.jpg" />
          </Box>
        </Flex>
      </Box>

      <Spacer my={4} />

      <Box>
        <ReactMarkdown source={content} />

        <SectionDivider />

        <Flex flexDirection={["column", "row"]}>
          <Flex
            width={["100%", "33%"]}
            flexDirection="column"
            alignItems="center"
            mb={[40, 0]}
          >
            <Box>
              <img src="/assets/images/gr-music/george-john.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              George with John Jackson and Mick Knight
            </Text>
          </Flex>

          <Flex
            width={["100%", "33%"]}
            flexDirection="column"
            alignItems="center"
            mb={[40, 0]}
          >
            <Box>
              <img src="/assets/images/gr-music/george-felix.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              George & ‘felix’ at Nino Fazio’s in Messina, Italy
            </Text>
          </Flex>

          <Flex
            width={["100%", "33%"]}
            flexDirection="column"
            alignItems="center"
          >
            <Box>
              <img src="/assets/images/gr-music/toolshed-trio.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              The original Toolshed Trio (it never had only 3 members) Sam
              Rezendes, John Sanders, Sash Landis and me
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
