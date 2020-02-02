import React from "react"
import ReactMarkdown from "react-markdown"
import { Flex, Text, Box } from "rebass/styled-components"
import { SubscribeForm } from "src/components/SubscribeForm"
import { Quote } from "src/components/Quote"
import { SectionDivider } from "src/components/SectionDivider"

export const HomeTemplate = props => {
  const {
    frontmatter: {
      title,
      subTitle,
      quote,
      mailingListBlurb,
      recentReleasesHeadline,
      recentReleases,
      audioCallOut,
    },
  } = props

  return (
    <Box>
      <Box style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        <h4>{subTitle}</h4>
      </Box>
      <Box>
        <Box>
          <Flex justifyContent="space-between">
            <a href="/studio">
              <Box height={[100, 250]}>
                <img
                  src="/assets/images/home/studio.jpg"
                  style={{ maxHeight: 250 }}
                />
              </Box>
            </a>
            <a href="/listen-here">
              <Box>
                <img src="/assets/images/home/logo.jpg" />
              </Box>
            </a>
            <a href="/gr-music">
              <Box height={[100, 250]}>
                <img
                  src="/assets/images/home/george.png"
                  style={{ maxHeight: 250 }}
                />
              </Box>
            </a>
          </Flex>
        </Box>

        <Quote>
          {quote}
          <br />
          <Text fontSize={2}>- Toolshed Do-Right</Text>
        </Quote>

        <SectionDivider />

        <Box>
          <Text color="#ffa70a" textAlign="center">
            <h4>{mailingListBlurb}</h4>
          </Text>

          <Flex justifyContent="center">
            <SubscribeForm />
          </Flex>
        </Box>

        <SectionDivider />

        <h2>{recentReleasesHeadline}</h2>

        {recentReleases.map((release, index) => {
          return (
            <Flex key={index}>
              <Flex
                flexDirection={["column", "row"]}
                alignItems={["center", "inherit"]}
                width="100%"
              >
                <Flex
                  width={["100%", "33%"]}
                  pr={[0, 4]}
                  mb={[4, 0]}
                  justifyContent={["center", "inherit"]}
                >
                  <img src={release.image} />
                </Flex>
                <Box width={["100%", "66%"]}>
                  <ReactMarkdown source={release.description} />
                </Box>
              </Flex>
            </Flex>
          )
        })}

        <SectionDivider />

        {audioCallOut.map((callout, index) => {
          return (
            <>
              <Box key={index}>
                <Flex justifyContent="center" width="100%">
                  <div
                    style={{ width: "100%", textAlign: "center" }}
                    dangerouslySetInnerHTML={{ __html: callout.embed }}
                  />
                </Flex>
                <ReactMarkdown source={callout.description} />
              </Box>
              {index !== audioCallOut.length - 1 && <SectionDivider />}
            </>
          )
        })}
      </Box>
    </Box>
  )
}
