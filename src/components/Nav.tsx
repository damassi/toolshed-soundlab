import React, { useState } from "react"
import { Link as BaseLink } from "gatsby"
import { Flex, Box, Text } from "rebass/styled-components"

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
          fontSize={[5, 3]}
          lineHeight={[1.5, "inherit"]}
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

export function Nav() {
  return (
    <nav>
      <Box>
        <Link to="/">
          <Box>
            <img
              src="/assets/images/home/logo.jpg"
              width={150}
              height={150}
              style={{ border: 0, position: "relative", left: "-4px" }}
            />
          </Box>
        </Link>
      </Box>

      <Flex flexDirection="column" justifyContent="center">
        <Link to="/">Home</Link>
        <Link to="/studio">Recording Studio</Link>
        <Link to="/listen-here">Listen Here</Link>
        <Link to="/classes">Classes / Workshops</Link>
        <Link to="/gr-music">George R's Music</Link>
        <Link to="/lutherie">Lutherie Services</Link>
        <Link to="/contact">Contact</Link>
      </Flex>
    </nav>
  )
}

export function MobileNav() {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <nav style={{ width: "100%" }}>
      <Box
        m={2}
        style={{
          position: "absolute",
          top: 0,
          zIndex: 3,
          width: 40,
          height: 40,
          cursor: "pointer",
        }}
        onClick={() => {
          if (isOpen) {
            toggleOpen(false)
          } else {
            toggleOpen(true)
          }
        }}
      >
        {!isOpen ? (
          <svg viewBox="0 0 18 18">
            <g fill={"white"} fillRule="evenodd">
              <path d="M3 3h12.026v1H3zM3 8.512h12.026V9.5H3zM3 13.996h12.026V15H3z" />
            </g>
          </svg>
        ) : (
          <svg viewBox="0 0 18 18">
            <path
              d="M9.88 9l4.56 4.56-.88.88L9 9.88l-4.56 4.56-.88-.88L8.12 9 3.56 4.44l.88-.88L9 8.12l4.56-4.56.88.88z"
              fill={"white"}
              fillRule="evenodd"
            />
          </svg>
        )}
      </Box>
      {isOpen && (
        <Flex
          flexDirection="column"
          justifyContent="center"
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            backgroundColor: "#572405",
          }}
          onMouseUp={() => {
            setTimeout(() => {
              toggleOpen(false)
            }, 200)
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/studio">Recording Studio</Link>
          <Link to="/listen-here">Listen Here</Link>
          <Link to="/classes">Classes / Workshops</Link>
          <Link to="/gr-music">George R's Music</Link>
          <Link to="/lutherie">Lutherie Services</Link>
          <Link to="/contact">Contact</Link>
        </Flex>
      )}
    </nav>
  )
}
