import React from 'react'
import Hero from '../components/Hero/Hero'
import OurProducts from '../components/OurProducts'
import UseCases from '../components/UseCases/UseCases'
import OurFeatures from '../components/OurFeatures'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'
import HomeBanner from '../components/HomeBanner'

function Home() {
  return (
    <>
        <Hero/>
      <OurProducts/>
      <UseCases/>
      <OurFeatures/>
      <Faq/>
      <Testimonials/>
      <HomeBanner/>
    </>
  )
}

export default Home