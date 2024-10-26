import React from 'react'
import { useStore } from '../store'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const nightMood = useStore((store)=>store.darkMood)
  const {t} = useTranslation()
  return (
    <>
    <section id='aboutUs'> 
        <div className={`service-title 2xl:h-[178px] sm:h-[110px] h-[80px] ${nightMood?'bg-zn-blue':'bg-zn-blue-light'} flex flex-col justify-center`}>
          <h1 className={`zn-h-3 px-10 ${nightMood&&'text-zn-white'}`}>{t("ABOUT US AND OUR SERVICES")}</h1>
        </div>
        <div className="aboutUs-info flex flex-row flex-wrap 2xl:py-[38px] 2xl:px-[78px] px-[45px] py-[25px] gap-x-[45px]">
          <div className={`left-section flex-1 min-w-[240px] ${nightMood&&'text-zn-white'}`}>
            <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>{t("WELCOME")}</h2>
              <p className='zn-body-2'>{t("WELCOMEINFO")}.</p>
            </div>
            <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>{t("OUR MISSION")}</h2>
              <p className='zn-body-2'>{t("OURMISSIONINFO")}.</p>
            </div>
            <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>{t("OUR TEAM")}</h2>
              <p className='zn-body-2'>{t("OURTEAMINFO")}.</p>
            </div>
          </div>
          <div className={`right-section flex-1 min-w-[240px] ${nightMood&&'text-zn-white'}`}>
          <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>{t("WHAT WE OFFER")}</h2>
              <p className='zn-body-2'>{t("WHATWEOFFERINFO")}.</p>
            </div>
            <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>{t("WHY CHOOSE US")} ?</h2>
              <p className='zn-body-2'>{t("WHYCHOOSEUSINFO")}.
              </p>
            </div>
          </div>
        </div>
        <div className="about-video px-11 w-full md:pb-8 sm:pb-6 max-sm:pb-6">
          <video className=' w-full ' poster='/imgs/videoPoster.png' preload='none' controls>
            <source src='/video/landingPageVideo.mp4' type='video/mp4'/>
          </video>
        </div>

    </section>
    </>
  )
}

export default AboutUs
