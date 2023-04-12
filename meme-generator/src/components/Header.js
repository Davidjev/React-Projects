import React from "react"
import Face from "../images/Vector.png"

export default function Header() {
  return (
    <header className="header">
      <img src={Face} alt="" className="header--image"/>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Project 3</h4>
    </header>
  )
}