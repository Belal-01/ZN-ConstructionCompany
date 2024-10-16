import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../Sections/Navbar'

const SignUpPage = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-row w-full h-fit">
      <div className="login-img flex-1  relative">
        <img src="/imgs/SingUp-1.png" alt="LoginImg" className='h-full w-full '/>
        <div className="flex flex-row justify-center w-[350px] h-[350px] rounded-full bg-zn-gray-box absolute top-[25%] left-[22%] text-[64px] ">
          <div className="flex flex-col justify-center gap-y-6">
            <img src="/imgs/logo.png" alt="logo" className='w-[140px] h-[120px] mx-auto'/>
            <div className='zn-body-1 text-center'>
              THE CONSTRUCTION AND LANDSCAPING COMPANY 
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
