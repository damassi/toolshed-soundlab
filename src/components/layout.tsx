import React from "react"
import "./layout.css"
import Nav from "./Nav"
import { Box, Flex } from "rebass/styled-components"
import { SectionDivider } from "./SectionDivider"

const Layout = ({ children }) => {
  return (
    <>
      <Flex
        flexDirection="column"
        margin="0 auto"
        width={["100%", "80%"]}
        maxWidth={1024}
        my={4}
      >
        <Flex>
          <Box
            width={[250]}
            display={["none", "inherit"]}
            style={{ position: "fixed" }}
          >
            <Nav />
          </Box>

          <Box
            p={4}
            ml={[0, 250]}
            backgroundColor="#693807"
            style={{
              borderRadius: 4,
            }}
          >
            <main>{children}</main>

            <footer>
              <SectionDivider />
              <Flex justifyContent="center" fontSize="1">
                © {new Date().getFullYear()}, Toolshed SoundLab - Port Townsend,
                WA
              </Flex>
            </footer>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Layout
