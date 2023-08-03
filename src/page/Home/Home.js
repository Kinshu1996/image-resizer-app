import React from 'react'
import HeroBanner from '../../Components/HeroBanner/HeroBanner'
import OurNumberSpeak from '../../Components/OurNumberSpeak/OurNumberSpeak'
import TrustedCompanies from '../../Components/TrustedCompanies/TrustedCompanies'
import StepsConvertMultipleSizes from '../../Components/StepsConvertMultipleSizes/StepsConvertMultipleSizes'
import Adaption from '../../Components/Adaptation/Adaption'
import Features from '../../Components/Features/Features'
import GalleryView from '../../Components/GalleryView/GalleryView'
import Faq from '../../Components/FAQS/Faq'
import TryItYourSelf from '../../Components/TryItYourself/TryItYourSelf'
import Testimonial from '../../Components/Testimonial/Testimonial'
import UseCase from '../../Components/UseCase/UseCase'

const Home = () => {
  return (
    <div className='home-page'>
        <HeroBanner />
        <OurNumberSpeak />
        <TrustedCompanies />
        <StepsConvertMultipleSizes />
        <Adaption />
        <Features />
        <UseCase />
        <GalleryView />
        <Testimonial />
        <Faq />
        <TryItYourSelf />
      
    </div>
  )
}

export default Home
