import React from "react"
import Layout from "src/components/layout"
import { Flex, Text, Box } from "rebass"
import { SubscribeForm } from "src/components/SubscribeForm"
import { Link } from "gatsby"
import { Spacer } from "src/components/Spacer"
import { Quote } from "src/components/Quote"

// import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h1>Toolshed SoundLab</h1>
        <h4>
          A comfortable, relaxed recording studio in the heart of Port Townsend
        </h4>
      </div>
      <Box>
        <Box>
          <Flex justifyContent="space-between">
            <Link to="/soundlab">
              <img src="/images/home/studio.jpg" height={250} />
            </Link>
            <Link to="/">
              <img src="/images/home/logo.jpg" />
            </Link>
            <Link to="/gr-music">
              <img src="/images/home/george.png" height={250} />
            </Link>
          </Flex>
        </Box>

        <Quote>
          "Music is the most fun you can have without gettin’ into trouble"{" "}
          <br />
          <Text fontSize={2}>- Toolshed Do-Right</Text>
        </Quote>

        <Box>
          <Text color="#ffa70a" textAlign="center">
            <h4>
              You can now easily stay informed of music and recording events
              happening at Toolshed Soundlab by subscribing to our mailing list
              here.
            </h4>
          </Text>

          <Flex justifyContent="center">
            <SubscribeForm />
          </Flex>
        </Box>

        <Spacer my={4} />

        <h2>Recent Releases</h2>
        <Flex>
          <Flex>
            <Box width="33%" pr={4}>
              <img src="/images/home/michaela.jpg" />
            </Box>
            <Box width="66%">
              “My Way Home” Micaela Kingslight’s new album is now finished and
              ready to release on 2/2/2020. You can sample it here:
              <a
                href="https://micaelakingslight.bandcamp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://micaelakingslight.bandcamp.com{" "}
              </a>
              preorder the CD or buy a download now. Produced by George Rezendes
              and Micaela Kingslight Recorded and mixed by George Rezendes at
              ToolShed SoundLab, Port Townsend Wa. Mastering and assistant
              engineering by Camelia Jade Lazenby
            </Box>
          </Flex>
        </Flex>

        <Box my={4}>
          <hr />
        </Box>

        <div>
          <div>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/309920488&amp;color=ff9900&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
            ></iframe>
          </div>
          <Text fontSize={2}>
            <p>
              This version of Pastures of Plenty, my favorite Woody Guthrie
              tune, was recorded during a session for the Smithsonian-Folkways
              tribute album titled ‘Roll Columbia’ but was not intended for the
              CD. My version of The Song of the Grand Coulee Dam was included on
              the CD. Produced by my good friend Joe Seamons, it features many
              North-West musicians. David and Tracy Grisman accompanied me on
              mandolin and bass on both tunes.
            </p>
            <p>
              <b>Notes from Smithsonian</b>: Roll Columbia: Woody Guthrie’s 26
              Northwest Songs is a trove of new discoveries, and a celebration
              of Guthrie’s genius and lasting contributions to both the history
              and musical traditions of the Pacific Northwest. In 1941, the
              Bonneville Power Administration commissioned Guthrie to write
              songs to help promote to the public the construction of dams along
              the Columbia River. https://tinyurl.com/roll-columbia
            </p>
          </Text>
        </div>

        <Box my={4}>
          <hr />
        </Box>

        <Box style={{ textAlign: "center" }}>
          <Box>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XY5de425CLg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <p>
            From the Rattletrap Rukuc recording RedLight Rag in loving memory of
            Mr. Lucas Hicks
          </p>
        </Box>

        <Box my={4}>
          <hr />
        </Box>

        <Box style={{ textAlign: "center" }}>
          <Box>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9VdG1oicOBA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <p>A live recording of the Blackberry Bushes</p>
        </Box>
      </Box>
    </Layout>
  )
}
