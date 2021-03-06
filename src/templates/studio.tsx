import React from "react"
import ReactMarkdown from "react-markdown"
import { Flex, Text, Box } from "rebass/styled-components"
import { Quote } from "src/components/Quote"
import { Spacer } from "src/components/Spacer"
import { SectionDivider } from "src/components/SectionDivider"

export const StudioTemplate = props => {
  const {
    frontmatter: {
      title,
      subTitle,
      mainImage,
      features,
      testimonial,
      moreInfo,
      artists,
    },
  } = props

  return (
    <Box>
      <Box style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        <h4>{subTitle}</h4>
      </Box>
      <Box>
        <img src={mainImage} width="100%" />
      </Box>

      <Spacer mb={4} />

      <Box>
        <h3>Features</h3>
        <ReactMarkdown source={features} />
      </Box>

      <SectionDivider />

      <Quote>{testimonial}</Quote>

      <SectionDivider />

      <Box>
        <Flex justifyContent="center">
          <Flex flexDirection="column" width="40%">
            <Box>
              <img src="/assets/images/soundlab/george-owner.jpg" />
            </Box>
            <Text textAlign="center" fontSize={2}>
              George Rezendes owner, engineer, producer, musician
            </Text>
          </Flex>
          <Spacer mx={4} />
          <Flex flexDirection="column" width="40%">
            <Box>
              <img src="/assets/images/soundlab/cj.jpg" width="auto" />
            </Box>
            <Text textAlign="center" fontSize={2}>
              Camelia Jade ( CJ ) Lazenby recording and mastering engineer,
              musician
            </Text>
          </Flex>
        </Flex>

        <SectionDivider />

        <Flex justifyContent="space-between">
          <img src="/assets/images/soundlab/studio-1.jpg" width="49%" />
          <img src="/assets/images/soundlab/studio-2.jpg" width="49%" />
        </Flex>

        <Spacer my={4} />

        <Flex justifyContent="center">
          <Box>
            <img src="/assets/images/soundlab/control-room.jpg" />
          </Box>
        </Flex>

        <Spacer my={4} />

        <Box>
          <ReactMarkdown source={moreInfo} />
        </Box>

        <SectionDivider />

        <Flex justifyContent="center" flexDirection="column">
          <Box style={{ textAlign: "center" }}>
            <img src="/assets/images/soundlab/ceiling.jpg" />
          </Box>
          <Box style={{ textAlign: "center" }}>
            The ceiling for the studio control room was built by Niels Holm
            (rip). I am grateful for his contribution.
          </Box>
        </Flex>

        <SectionDivider />

        <Box>
          <ReactMarkdown source={artists} />
        </Box>
      </Box>
    </Box>
  )
}
