import React from "react"
import logo from "../images/air.png"

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" className="nav--logo"/>
    </nav>
  )
}