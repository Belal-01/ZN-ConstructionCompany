import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router'
import Navbar from '../Sections/Navbar'

const SignUpPage = () => {
  const [signUpImg,setLogInImg] = useState("/imgs/logIn-1.png")

useEffect(()=>{
  setInterval(()=>{
    const randomeNum = Math.random()
    if(randomeNum<=2/6)
      setLogInImg("/imgs/logIn-2.png")
    else if(randomeNum<=3/6)
      setLogInImg("/imgs/logIn-3.png")
    else if(randomeNum<=4/6)
      setLogInImg("/imgs/logIn-4.png")
    else if(randomeNum<=5/6)
      setLogInImg("/imgs/logIn-5.png")
    else if(randomeNum<=6/6)
      setLogInImg("/imgs/logIn-6.png")

  },5000)
},[])
  return (
    <>
    <Navbar />
    <div className="flex flex-row max-md:flex-col w-full min-h-full max-md:h-fit items-stretch max-md:items-center">
      <div className="login-img flex-1 relative max-md:h-[300px] w-full ">
        <img src={signUpImg} alt="LoginImg" className='w-full h-full max-md:h-[300px]' loading='lazy'/>
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
