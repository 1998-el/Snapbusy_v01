import React from 'react'

import HomeBanner from '../components/home_banner'
import About from '../components/About'
import GlobalImpact from '../components/GlobalImpact'
import ThreeCards from '../components/cards'

function Home() {
  return (
    <div>
      <HomeBanner />
      <ThreeCards />
      <GlobalImpact />
      <About />

     
    </div>
  )
}

export default Home