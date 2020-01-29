import React from "react"
import Layout from "src/components/layout"
import { Box, Flex } from "rebass"
import { Spacer } from "src/components/Spacer"
import { Link } from "gatsby"
import { SEO } from "src/components/seo"

const ClassesWorkshopsPage = _props => {
  return (
    <Layout>
      <SEO title="Classes & Workshops" />
      <Flex justifyContent="center">
        <Flex flexDirection="column" width="100%" alignItems="center">
          <h1 style={{ textAlign: "center" }}>Classes & Workshops</h1>

          <Box>
            <img src="images/classes-workshops/soundlab-banner.jpg" />
          </Box>
        </Flex>
      </Flex>

      <Spacer my={4} />

      <Box>
        <Box>
          <h3>Guitar Lessons</h3>
          <ul>
            <li>
              I offer private guitar lessons at my studio and at{" "}
              <a
                href="https://crossroads-music.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crossroads Music
              </a>
            </li>
            <li>Please contact me with availability</li>
            <li>
              Tuition: $35 / 45 minutes, $45 / one hour or $120 per month
              includes 4 weekly 45 minute lessons
            </li>
          </ul>

          <Box>
            Beginners will learn rudiments of guitar playing including basic
            chords and songs. Intermediate and advanced players will learn
            specific styles, skills and build repertoire.
          </Box>
          <Box>
            Styles offered are: fingerpicking, flatpicking, country blues,
            Travis picking, bluegrass, ragtime, folk, rock and pop.
          </Box>
        </Box>

        <Spacer my={4} />

        <Box>
          <h3>Vox Populi - A Harmony Singing Workshop</h3>
          <ul>
            <li>A 10 week class focusing on singing lead and harmonies.</li>
            <li>Contact me for next session dates.</li>
            <li>Enrollment limited to 12 students.</li>
            <li>Tuition; $125-200 sliding scale.</li>
          </ul>

          <Box>
            This class will be taught by George Rezendes and Lindsay Hamilton.
            We will work on folk, country, blues and pop tunes. You will learn
            how to find the lead, first and second harmony parts to any song.
            Charts and pre-recorded tracks will be provided for songs we have
            chosen. You will also learn how to make basic lyric/chord charts.
          </Box>
        </Box>

        <Spacer my={4} />

        <Box>
          <Link to="/contact">Contact Me</Link>
        </Box>
      </Box>
    </Layout>
  )
}

export default ClassesWorkshopsPage
