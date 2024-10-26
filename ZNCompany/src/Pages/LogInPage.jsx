import React, { memo } from 'react'
import LogInForm from '../Sections/LogInForm'
import Navbar from '../Sections/Navbar'
import { NavLink } from 'react-router-dom'


const LogInPage = () => {


  return (
    <>
    <div className="">
    <Navbar />
    </div>
      <div className="flex flex-row max-md:flex-col max-md:flex-col-reverse w-full h-full max-md:h-fit items-stretch max-md:items-center ">
        <div className="login-form md:flex-1 h-full"> 
            <LogInForm />
        </div>
        <div className="login-img md:flex-1 max-md:h-[300px] w-full max-md:relative overflow-hidden">
          <img src="/imgs/logIn-1.png" alt="LoginImg" className='w-full h-full max-md:h-[350px] max-md:absolute bottom-0 z-10' />
        </div>
      </div>
    </>
  )
} 

export default memo(LogInPage) 
