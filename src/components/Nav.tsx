import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/soundlab">SoundLab</Link>
      <Link to="/listen-here">Listen Here</Link>
      <Link to="/classes-workshops">Classes / Workshops</Link>
      <Link to="/gr-music">GR Music</Link>
      <Link to="/lutherie">Lutherie</Link>
    </nav>
  )
}
