import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./Data"


export default function App() {
  const cards = Data.map(item => {
    return (
      <div key={item.id}> {/* Add a unique key prop here */}
        <Card 
          key={item.id}
          {...item} //item={item} we could leave like this -> item={item}, but this is spread operator, something new! In the Card.js we must delete the .item from all properties, because if we leave like this, it will throw an error! If we want to use item={item} for better understanding we MUST USE .item in properties!!!!!
          
      />
      </div>
    )
  })

return (
<div>
  <Navbar />
  <Hero />
  <section className="cards-list">
    {cards}
  </section>
</div>
)
}