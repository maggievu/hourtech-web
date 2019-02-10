import React, { Component } from 'react'
import Intro from './sections/Intro'
import Features from './sections/Features'
import Pricing from './sections/Pricing'

class Main extends Component {
  render() {
    return (
      <main>
        {/* <Intro /> */}
        <Features />
        <Pricing />
      </main>
    )
  }
}

export default Main
