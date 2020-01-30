import React from "react"
import { Flex, Box } from "rebass/styled-components"
import { Spacer } from "src/components/Spacer"

export const LutherieTemplate = _props => {
  return (
    <Box>
      <Flex justifyContent="center">
        <h1>Lutherie Services</h1>
      </Flex>
      <Box>
        <img src="/assets/images/lutherie/luthier-shop.jpg" />
      </Box>

      <Spacer my={4} />

      <Box>
        <Box>
          <p>I first became interested in guitar making at the age of 16.</p>
          <p>
            Soon after I quit school and lucked into a job at Guild Guitars. (I
            dated the owner’s grand-daughter in high school.) Since 1975 I have
            been building, repairing and restoring musical instruments of the
            fretted variety.
          </p>
          <p>
            I currently operate the repair shop at Crossroads Music in Port
            Townsend and am available for consultation regarding your
            instrument's needs.
          </p>
          <p>
            Call me at 360-385-1471 to set an appointment, or send a message via
            the <a href="/contact">Contact Form</a>.
          </p>
          <p>
            If your instrument is hard to play, it needs help. I can adjust it
            to make your playing time more enjoyable.
          </p>
          <Flex>
            <Box width="40%">
              <img src="/assets/images/lutherie/luthererie-1.jpg" />
            </Box>
            <Box>
              <img src="/assets/images/lutherie/reso-buzz.jpg" />
            </Box>
          </Flex>

          <Box my={4}>
            <hr />
          </Box>

          <Box>
            <Box mb={4}>
              <h4>
                A complete restoration on a 1960's Martin D-28 including
                replacing the X bracing:
              </h4>
            </Box>
            <Box width="100%">
              <img
                src="/assets/images/lutherie/martin-repair.jpg"
                width="100%"
              />
            </Box>
          </Box>

          <Spacer my={4} />

          <Box width="100%">
            <Box mb={4}>
              <h4>Fully restored Gibson:</h4>
            </Box>
            <img src="/assets/images/lutherie/gibson-1.jpg" width="100%" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
