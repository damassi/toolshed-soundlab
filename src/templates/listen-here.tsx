import React from "react"
import ReactMarkdown from "react-markdown"
import { Box, Flex, Text } from "rebass/styled-components"

export const ListenHereTemplate = props => {
  const {
    frontmatter: { title, subTitle, recordings },
  } = props

  return (
    <Box>
      <Box style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        <h4>{subTitle}</h4>
      </Box>
      <Box>
        {recordings.map((recording, index) => {
          return (
            <>
              <Box key={index}>
                <Box>
                  <div dangerouslySetInnerHTML={{ __html: recording.embed }} />
                </Box>
                <Box>
                  <ReactMarkdown source={recording.description} />
                </Box>
              </Box>
              {index !== recordings.length - 1 && (
                <Box my={4}>
                  <hr />
                </Box>
              )}
            </>
          )
        })}
      </Box>

      <Box my={4}>
        <hr />
      </Box>

      <Box>
        <Flex flexWrap="wrap">
          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/dudu-mala.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Dudu Maia & Douglas Loura Vibrações
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/stubby.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Stubby & the Electric Blanket on and on and on
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/sam.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Sam Doores Farmland Blues
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/kate.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Kate Long & Robin Kessinger Red Rockin’ Chair Live at Toolshed
              Soundlab
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/gallus.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Gallus Bros. Instrumental
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/paul.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Paul Chasman / Last of Us Soundtrack
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/usana.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Usana Great Day
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/crow.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Crow Quill Night Owls Wake Up Sinners
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/gallus-2.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Gallus Bros, mighty good leader
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/inkwell.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Inkwell Rhythm Makers Oh Mama
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/below.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Below the Salt Alliswinigitator
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="/assets/images/listen-here/black.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              Black Resonators So Nice
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
