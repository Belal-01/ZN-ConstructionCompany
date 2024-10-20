import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-between h-[300px] bg-zn-blue-dark sm:px-[45px] px-[20px] pt-[40px] pb-5 '>
      <div className='grid md:grid-cols-4 max-md:grid-cols-2 gap-y-6 max-sm:gap-x-3 justify-between items-top'>
        <div className="logo self-start flex md:flex-row max-md:flex-col flex-wrap justify-center items-center gap-x-2 max-w-[200px]">
          <img src="imgs/logo.png" alt="logo" className='w-[70px] '/>
          <p className='zn-body-2 text-zn-white '>THE CONSTRUCTION AND <br /> LANDSCAPING COMPANY</p>
        </div>
        <div className="hours text-zn-white max-w-[240px] max-sm:self-end">
          <h2 className="title zn-body-2-bold pb-3">BUSINESS HOURS:</h2>
          <p className='zn-body-2'>MONDAY-FRIDAY:8AM-6PM</p>
          <p className='zn-body-2'>SATURDAY:9AM - 4PM</p>
          <p className='zn-body-2'>SUNDAY:CLOSED</p>
        </div>
        <div className="sectionsLinks text-zn-white max-w-[240px] max-md:pl-8">
        <h2 className="title zn-body-2-bold pb-3 ">QUICK LINKS:</h2>
          <ul className='list-disc pl-5 zn-body-2'>
            <li className='pb-1'><a href="">HOME</a></li>
            <li className='pb-1'><a href="">ABOUT US</a></li>
            <li className='pb-1'><a href="">SERVICES</a></li>
            <li className='pb-1'><a href="">PROJECTS</a></li>
            <li className='pb-1'><a href="">CONTACT</a></li>

          </ul>
        </div>
        <div className="certifications text-zn-white max-w-[240px]">
          <h2 className="title zn-body-2-bold pb-3">AWARDS AND CERTIFICATIONS:</h2>
          <ul className='list-disc pl-5 zn-body-2'>
            <li className='pb-1'>
              PROUD MEMBER OF THE MATIONAL ASSOCIATION OF LANDSCAPE PROFESSIONALS
            </li>
            <li className='pb-1'>
              CERTIFIED GREEN BUILDER
            </li>
            </ul>
        </div>
      </div>
      <div className="text-center">
        <p className='text-center zn-body-2 text-zn-white'>
          © 2024 Z AND CONTSTRUCTION AND LANDSCAPING .ALL RIGHTS ARE RESERVED
        </p>
      </div>

    </footer>
  )
}

export default Footer
