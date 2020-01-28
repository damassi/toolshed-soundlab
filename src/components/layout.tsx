import React from "react"
import "./layout.css"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Toolshed SoundLab</footer>
      </div>
    </>
  )
}

export default Layout
