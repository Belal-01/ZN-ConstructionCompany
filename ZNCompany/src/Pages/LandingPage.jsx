import React from 'react'
import Service from './Service'
import { useContext } from 'react'
import { dynamicHieght, dynamicWidth, interiorCladdingSections, landscapingdepartment } from '../Constants'
import { CurrentWindowHeight, CurrentWindowWidth } from '../App'
import AboutUs from './AboutUs'
import BusinessExhibtion from '../Sections/BusinessExhibtion'
import ContactUs from '../Sections/ContactUs'
import Footer from '../Sections/Footer'
import Header from '../Sections/Header'
const LandingPage = () => {
  const windowWidth = useContext(CurrentWindowWidth)
  const windowHeight = useContext(CurrentWindowHeight)
  // console.log(windowHeight)
  // console.log(windowWidth)
  const boldh1 = dynamicWidth(windowWidth,0)
  const height = dynamicHieght(windowHeight,355)
  //  console.log(boldh1)
  console.log(height)
  return (
    <>
       {/* <Header /> */}
      <div className='landingPage'>
        <div className="landingImg flex flex-row items-center justify-center">
          <img src="/imgs/LandingImg.png" alt="LandingImg"  className='sm:brightness-50 brightness-75'/>
          <div className="img-text absolute max-sm:hidden">
            <p className='zn-h-3-bold text-white text-center'>
              TRANSROM YOUR VISION INTO REALITY WITH OUR <br />EXPERT CONSTRUCTION AND LANDING SERVICES <br /> WHERE QUALITY MEETS CREATIVITY .
            </p>
          </div>
        </div>  
        <Service title={'INTERIOR CLADDING'} sections={interiorCladdingSections} color={'blue'}/> 
        <Service title={'LANDSCAPING DEPARTMENT'} sections={landscapingdepartment} color={'green'}/> 

        {/* ABOUT US PAGE */}
        <AboutUs />

        <BusinessExhibtion />

        <ContactUs />

        <Footer />
      </div>
    </>
  )
}

export default LandingPage
