import React, { memo } from 'react'
import LogInForm from '../Sections/LogInForm'
import Navbar from '../Sections/Navbar'
import { NavLink, useLocation } from 'react-router-dom'


const LogInPage = () => {
const location = useLocation()
const routPath = location.state?.path||'/profilePage'

  return (
    <>
    
    <Navbar />
    
      <div className="flex flex-row max-md:flex-col max-md:flex-col-reverse w-full h-full max-md:h-fit items-stretch max-md:items-center ">
        <div className="login-form md:flex-1 h-full"> 
            <LogInForm routPath={routPath}/>
        </div>
        <div className="login-img md:flex-1 max-md:h-[300px] w-full h-full max-md:relative overflow-hidden">
          <img src="/imgs/logIn-1.png" alt="LoginImg" className='w-full min-h-full max-md:h-[350px] max-md:absolute bottom-0 z-10' />
        </div>
      </div>
    </>
  )
} 

export default memo(LogInPage) 
