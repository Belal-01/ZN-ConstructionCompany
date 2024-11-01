import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../Sections/Navbar'

const SignUpPage = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-row max-md:flex-col w-full min-h-full max-md:h-fit items-stretch max-md:items-center">
      <div className="login-img flex-1 relative max-md:h-[300px] w-full ">
        <img src="/imgs/SingUp-1.png" alt="LoginImg" className='w-full h-full max-md:h-[300px]' loading='lazy'/>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center ">
          <div className="flex flex-row justify-center w-[350px] h-[350px] rounded-full bg-zn-gray-box text-[64px]  max-md:flex-col max-md:w-[250px] max-md:h-[250px]  max-md:bg-zn-gray-box  max-md:top-[10%] max-md:left-[30%] max-sm:left-[20%]  z-10 ">
            <div className="flex flex-col justify-center gap-y-6">
              <img src="/imgs/logo.png" alt="logo" className='w-[140px] h-[120px] mx-auto max-md:w-[88px] max-md:h-[70px]'/>
              <div className='zn-body-1 text-center'>
                THE CONSTRUCTION AND <br /> LANDSCAPING COMPANY 
              </div>
            </div>
          </div>
        </div>
     
      </div>
      <div className="login-form flex-1 h-fit"> 
        <Outlet />
      </div>
    </div>
  </>
  )
}

export default SignUpPage
