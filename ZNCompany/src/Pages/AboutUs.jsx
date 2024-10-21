import React from 'react'
import { useStore } from '../store'

const AboutUs = () => {
  const nightMood = useStore((store)=>store.darkMood)

  return (
    <>
    <div>
        <div className={`service-title 2xl:h-[178px] sm:h-[110px] h-[80px] ${nightMood?'bg-zn-blue':'bg-zn-blue-light'} flex flex-col justify-center`}>
          <h1 className={`zn-h-3 pl-10 ${nightMood&&'text-zn-white'}`}>ABOUT US AND OUT SERVICES</h1>
        </div>
        <div className="aboutUs-info flex flex-row flex-wrap 2xl:py-[38px] 2xl:px-[78px] px-[45px] py-[25px] gap-x-[45px]">
          <div className={`left-section flex-1 min-w-[240px] ${nightMood&&'text-zn-white'}`}>
            <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>WELCOME</h2>
              <p className='zn-body-2'>to Z and N Construction and Landscaping, where quality meets creativity. Founded with a passion for transforming outdoor spaces and building lasting structures, we are dedicated to providing exceptional services that enhance both the beauty and functionality of your property.</p>
            </div>
            <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>OUR MISSION</h2>
              <p className='zn-body-2'>At Z and N, our mission is to deliver high-quality construction and landscaping solutions tailored to meet the unique needs of our clients. We believe in creating spaces that reflect your vision while ensuring durability and sustainability.</p>
            </div>
            <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>OUR TEAM</h2>
              <p className='zn-body-2'>to Z and N Construction and Landscaping, where quality meets creativity. Founded with a passion for transforming outdoor spaces and building lasting structures, we are dedicated to providing exceptional services that enhance both the beauty and functionality of your property.</p>
            </div>
          </div>
          <div className={`right-section flex-1 min-w-[240px] ${nightMood&&'text-zn-white'}`}>
          <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>WHAT WE OFFER</h2>
              <p className='zn-body-2'>Construction Services: From residential projects to commercial builds, we handle everything from design to execution, ensuring a seamless construction process.
              Landscaping Services: Our landscaping team specializes in creating beautiful gardens, patios, and outdoor living spaces that enhance your property’s appeal.</p>
            </div>
            <div className='phrass pb-6'>
              <h2 className='zn-body-1-bold'>WHY CHOOSE US ?</h2>
              <p className='zn-body-2'>Quality Craftsmanship: We use only the best materials and techniques to ensure lasting results.
              Customer-Centric Approach: Your satisfaction is our priority. We listen to your needs and work closely with you throughout the project.
              Sustainable Practices: We are committed to environmentally friendly practices that benefit both our clients and the planet.
              Join us in creating beautiful, functional spaces that you can cherish for years to come. At Z and N Construction and Landscaping, we turn your dreams into reality.
              </p>
            </div>
          </div>
        </div>
        <div className="about-video px-11 w-full md:pb-8 sm:pb-6 max-sm:pb-6">
          <video className=' w-full ' poster='/imgs/videoPoster.png' preload='none' controls>
            <source src='/video/landingPageVideo.mp4' type='video/mp4'/>
          </video>
        </div>

    </div>
    </>
  )
}

export default AboutUs
