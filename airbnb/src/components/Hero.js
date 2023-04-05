import React from "react"
import Group from "../images/Group 77.png"

export default function Hero() {
  return (
    <section className="hero">
      <img src={Group} alt="" className="hero--photo"/>
      <h1 className="hero--header">Online Experiances</h1>
      <p className="hero--text">Join unique interactive activities led by 
      one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}