import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'

import Navbar from '../components/Navbar'
import Plants from '../components/Plants'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
      <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeroSection />
          <Plants />
      </>
  )
}

export default Home