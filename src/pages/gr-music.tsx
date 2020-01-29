import React from "react"
import Layout from "src/components/layout"
import { Box, Flex, Text } from "rebass"
import { Spacer } from "src/components/Spacer"

const GRMusicPage = _props => {
  return (
    <Layout>
      <Box>
        <Flex justifyContent="center">
          <Box mr={2} width="40%">
            <Box>
              <h2 style={{ fontFamily: "Herculanum", marginBottom: 5 }}>
                george rezendes
              </h2>
              <h4>country blues, ragtime, folk and roots-rock</h4>
            </Box>
            <img src="images/gr-music/first-strat-67.jpg" />
          </Box>
          <Box>
            <img src="images/gr-music/george.jpg" />
          </Box>
        </Flex>
      </Box>

      <Spacer my={4} />

      <Box>
        <Box>
          A few tunes I’ve recorded over the years, solo and with various
          projects - I hope you enjoy them. The last recorded toolshed trio
          project, “better late than never” features: Brett Pemberton - drums,
          Kurt Jensen - bass, Dave Meis - steel guitar, Jon Parry - fiddle
        </Box>

        <Box my={4}>
          <hr />
        </Box>

        <ul>
          <li>
            <strong>Play</strong> * west coast blues - my first and favorite rag
            by Blind Blake
          </li>
          <li>
            <strong>Play</strong> * viper - my version of a 1936 Stuff Smith
            tune about... stuff
          </li>
          <li>
            <strong>Play</strong> * take me to land of jazz - cool tune with
            great story-time lyrics
          </li>
          <li>
            <strong>Play</strong> * miss delta - a tune I learned from Mary
            Flower at blues camp one summer
          </li>
          <li>
            <strong>Play</strong> * harlem nocturne - from the last toolshed
            trio recording, ‘better late than never”
          </li>
          <li>
            <strong>Play</strong> * working man can’t get nowhere today -
            “better late than never”
          </li>
          <li>
            <strong>Play</strong> * memphis in the meantime - “better late than
            never”
          </li>
          <li>
            <strong>Play</strong> * it takes a lot to laugh... - “better late
            than never”
          </li>
          <li>
            <strong>Play</strong> * day tripper - “better late than never”
          </li>
        </ul>

        <Box my={4}>
          <hr />
        </Box>

        <Flex>
          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="images/gr-music/george-john.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              George with John Jackson and Mick Knight
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="images/gr-music/george-felix.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              George & ‘felix’ at Nino Fazio’s in Messina, Italy
            </Text>
          </Flex>

          <Flex width="33%" flexDirection="column" alignItems="center">
            <Box>
              <img src="images/gr-music/toolshed-trio.jpg" />
            </Box>
            <Text fontSize={1} lineHeight={1.5} textAlign="center">
              The original Toolshed Trio (it never had only 3 members) Sam
              Rezendes, John Sanders, Sash Landis and me
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  )
}

export default GRMusicPage
