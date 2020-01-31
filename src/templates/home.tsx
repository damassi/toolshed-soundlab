import React from "react"
import ReactMarkdown from "react-markdown"
import { Flex, Text, Box } from "rebass/styled-components"
import { SubscribeForm } from "src/components/SubscribeForm"
import { Spacer } from "src/components/Spacer"
import { Quote } from "src/components/Quote"

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
              <Box height={250}>
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
              <Box height={250}>
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

        <Box my={4}>
          <hr />
        </Box>

        <Box>
          <Text color="#ffa70a" textAlign="center">
            <h4>{mailingListBlurb}</h4>
          </Text>

          <Flex justifyContent="center">
            <SubscribeForm />
          </Flex>
        </Box>

        <Box my={4}>
          <hr />
        </Box>

        <Spacer my={4} />

        <h2>{recentReleasesHeadline}</h2>

        {recentReleases.map((release, index) => {
          return (
            <Flex key={index}>
              <Flex>
                <Box width="33%" pr={4}>
                  <img src={release.image} />
                </Box>
                <Box width="66%">
                  <ReactMarkdown source={release.description} />
                </Box>
              </Flex>
            </Flex>
          )
        })}

        <Box my={4}>
          <hr />
        </Box>

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
              {index !== audioCallOut.length - 1 && (
                <Box my={4}>
                  <hr />
                </Box>
              )}
            </>
          )
        })}
      </Box>
    </Box>
  )
}
