import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import data from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

console.log(data)

function App() {

  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})   

  return (
    <div>
    <Navbar/>
    <Hero/>
    <section className="cards-list">
                {cards}
            </section>
    </div>
  )
}

export default App
