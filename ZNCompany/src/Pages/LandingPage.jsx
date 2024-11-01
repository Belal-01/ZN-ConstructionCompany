import React from 'react'
import Service from './Service'

import { interiorCladdingSections, landscapingdepartment } from '../Constants'

import AboutUs from './AboutUs'
import BusinessExhibtion from '../Sections/BusinessExhibtion'
import ContactUs from '../Sections/ContactUs'
import Footer from '../Sections/Footer'

import { useTranslation } from 'react-i18next'
const LandingPage = () => {

const {t} = useTranslation()
  return (
    <>
       {/* <Header /> */}
      <div className='landingPage'>
        <div className="landingImg flex flex-row items-center justify-center">
          <img src="/imgs/LandingImg.png" alt="LandingImg"  className='sm:brightness-50 brightness-75'/>
          <div className="img-text absolute max-sm:hidden">
            <p className='zn-h-3-bold text-white text-center max-w-[800px]'>
              {t("TRANSROM YOUR VISION INTO REALITY WITH OUR")} {t("EXPERT CONSTRUCTION AND LANDING SERVICES")} <br />{t("WHERE QUALITY MEETS CREATIVITY")}
            </p>
          </div>
        </div>  
        <Service title={t("INTERIOR CLADDING")} sections={interiorCladdingSections} color={'blue'}/> 
        <Service title={t("LANDSCAPING DEPARTMENT")} sections={landscapingdepartment} color={'green'}/> 

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
