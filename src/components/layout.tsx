import React from "react"
import "./layout.css"
import Nav from "./Nav"
import { Box, Flex } from "rebass/styled-components"

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
          <Box width={[150, 250]} style={{ position: "fixed" }}>
            <Nav />
          </Box>

          <Box
            p={4}
            ml={250}
            backgroundColor="#693807"
            style={{
              borderRadius: 4,
            }}
          >
            <main>{children}</main>

            <footer>
              <Box my={4}>
                <hr />
              </Box>
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
