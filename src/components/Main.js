import React, { Component } from 'react'
import Intro from './sections/Intro'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'

class Main extends Component {
  render() {
    return (
      <main>
        <Intro />
        <Features />
        <Pricing />
        <Contact />
      </main>
    )
  }
}

export default Main
