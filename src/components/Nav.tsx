import React from "react"
import { Link as BaseLink } from "gatsby"
import { Flex, Box, Text } from "rebass"

const Link = ({ children, to, ...props }) => {
  return (
    <Box my={2}>
      <BaseLink
        to={to}
        {...props}
        activeStyle={{ color: "white" }}
        style={{
          color: "#999",
          textDecoration: "none",
        }}
      >
        <Text
          fontSize={3}
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {children}
        </Text>
      </BaseLink>
    </Box>
  )
}

export default function Nav() {
  return (
    <nav>
      <Box>
        <img
          src="/images/home/logo.jpg"
          width={150}
          height={150}
          style={{ border: 0 }}
        />
      </Box>
      <Flex flexDirection="column" justifyContent="center">
        <Link to="/">Home</Link>
        <Link to="/soundlab">SoundLab</Link>
        <Link to="/listen-here">Listen Here</Link>
        <Link to="/classes-workshops">Classes / Workshops</Link>
        <Link to="/gr-music">GR Music</Link>
        <Link to="/lutherie">Lutherie</Link>
        <Link to="/contact">Contact</Link>
      </Flex>
    </nav>
  )
}
