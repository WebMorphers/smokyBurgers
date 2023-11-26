import React from 'react'

import Navbar from "../components/PAGE1/Navbar/navbar";
import Hero from "../components/PAGE1/Hero/Hero";
import Moreburger from "../components/PAGE1/More-than-burger/More-than-burger";
import BestSells from "../components/PAGE1/Best-sells/Best-sells";
import AboutUs from "../components/PAGE1/About-us/About-us";
import FindUs from "../components/PAGE1/Find-us/Find-us";
import Footer from "../components/PAGE1/Footer/Footer";

const home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Moreburger />
    <BestSells />
    <AboutUs />
    <FindUs />
    <Footer />
  </>
  )
}

export default home