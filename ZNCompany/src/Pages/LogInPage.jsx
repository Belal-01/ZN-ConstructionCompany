import React, { memo } from 'react'
import LogInForm from '../Sections/LogInForm'
import Navbar from '../Sections/Navbar'


const LogInPage = () => {


  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full h-full items-stretch">
        <div className="login-form flex-1 h-full"> 
          <LogInForm />
        </div>
        <div className="login-img flex-1  ">
          <img src="../../public/imgs/logIn.png" alt="LoginImg" className='h-full w-full'/>
        </div>
      </div>
    </>
  )
}

export default memo(LogInPage) 
