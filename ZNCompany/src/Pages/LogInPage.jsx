import React, { memo, useEffect, useState } from 'react'
import LogInForm from '../Sections/LogInForm'
import Navbar from '../Sections/Navbar'
import {  useLocation } from 'react-router-dom'


const LogInPage = () => {
const location = useLocation()
const routPath = location.state?.path||'/profilePage'
const [logInImg,setLogInImg] = useState("/imgs/logIn-1.png")

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
    
      <div className="flex flex-row max-md:flex-col max-md:flex-col-reverse w-full min-h-full max-md:h-fit items-stretch max-md:items-center ">
        <div className="login-form md:flex-1 h-full"> 
            <LogInForm routPath={routPath}/>
        </div>
        <div className="login-img md:flex-1 max-md:h-[300px] w-full min-h-full max-md:relative overflow-hidden">
          <img src={logInImg} alt="LoginImg" className='w-full min-h-full max-md:h-[350px] max-md:absolute bottom-0 z-10' />
        </div>
      </div>
    </>
  )
} 

export default memo(LogInPage) 
