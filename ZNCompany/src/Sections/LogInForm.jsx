import React, { useState } from 'react'
import { useContext } from 'react'
import { dynamicHieght, dynamicWidth } from '../Constants'
import { CurrentWindowHeight, CurrentWindowWidth } from '../App'
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import Button from '../Components/Button';
import { NavLink } from 'react-router-dom';

const LogInForm = () => {
  const [erorrModle,setErorrModle] = useState(false);
  const [warrningModle,setWarrningModle] = useState(false)
const windowWidth = useContext(CurrentWindowWidth)
const windowHeight = useContext(CurrentWindowHeight)
// console.log(windowHeight)
// console.log(windowWidth)
const boldh1 = dynamicWidth(windowWidth,108)
const height = dynamicHieght(windowHeight,79)
// console.log(boldh1)
console.log(height)
  return (
    <>
    <section className="2xl:py-[100px] py-[60px] h-full bg-zn-white">
      <h1 className='zn-h-1-bold  text-center'>
        WELCOME
      </h1>
      <h2 className='text-center zn-h-3-bold'>
        REINVENT YOUR SPACE WITH US
      </h2>
      <div className="flex flex-row justify-center py-5">
        <img src="/imgs/logo.png" alt="logo" className='2xl:w-[143px] lg:w-[80px] md:w-[58px] w-[34px]  h-[71px]'/>
      </div>
      <form action="" className='2xl:w-[478px] lg:w-[267px] w-[195px] m-auto'>
        <div className="flex flex-col gap-y-2.5 py-2.5">
          <label htmlFor="email" className='zn-body-2'>EMAIL ADDRESS</label>
          <div className="relative">
          <input type="email" id='email' className='zn-input-field ' placeholder={'EXAMPLE@GMAIL.COM'}/>
          <MdOutlineMail className='absolute top-1.5 left-1.5 ' />
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5">
          <label htmlFor="password" className='zn-body-2'>PASSWORD</label>
          <div className="relative">
          <input type="password" id='password' className='zn-input-field' placeholder='****************'/>
          <IoKeyOutline className='absolute top-1.5 left-1.5 ' />
          </div>
          </div>
          {warrningModle&&<div className='border-2 border-zn-red py-3 text-zn-red zn-body-2 text-center mt-4'>
            YOUR EMAIL/PASSWORD ARE INVALID 
          </div>
          }
          <div className="mt-4">
          <div className="text-center">
            <span className="zn-body-3">DON'T HAVE AN ACCOUNT ?</span>
            <NavLink to={'/signInPage/signInForm'} className="text-zn-blue-light"><span className="zn-body-3 "> SIGN UP</span></NavLink>
            
          </div>
          <div className='text-center'>
            <span className="zn-body-3">FORGOT PASSWORD ?</span>
            <NavLink to={'/signInPage/changePasswordForm'} className="text-zn-blue-light"><span className="zn-body-3 "> CHANGE PASSWORD</span></NavLink>
            <a href="#" ></a>
          </div>
          </div>
          <div className="flex justify-center">
            <Button >LOG IN</Button>
          </div>

      </form>
    </section>
    {erorrModle&&<div className='modle'>
      <div className="overly"></div>
      <div className="modle-content">
        <h1 className='zn-h-4-semiBold text-center py-5'>ERROR</h1>
        <div className="modle-body px-12 text-zn-gray-3">
        <p className='zn-body-2 text-center'>PLEASE WAIT A FEW MINUTES</p>
        <p className='zn-body-2 text-center'>BEFORE YOU TRY AGAIN</p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 my-4'/>
        <div className="modle-button flex flex-row justify-center text-zn-red">
          <button className='zn-body-2 mb-2 '>
            DISMISS
          </button>
        </div>
        
      </div>
      </div>}
    </>
  )
}

export default LogInForm

