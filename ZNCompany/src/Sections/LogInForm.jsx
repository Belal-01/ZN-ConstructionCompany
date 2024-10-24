import React, { useState, useTransition } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import Button from '../Components/Button';
import { NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { modleAnimation } from '../Utils/main';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const LogInForm = () => {
  const [erorrModle,setErorrModle] = useState(false);
  const [warrningModle,setWarrningModle] = useState(false)

  useGSAP(()=>{
    modleAnimation('.modle-content','.modle-body','340px')
    
  },[erorrModle])
  const lan = Cookies.get('i18next')|| "en"
  const {t} = useTranslation()
  return (
    <>
    <section className="2xl:py-[100px] md:py-[60px] py-[40px] h-full bg-zn-white">
      <div className='max-md:absolute top-12 left-0 right-0 max-md:h-[300px] z-20 flex justify-center items-center'>
        <div className='max-md:flex max-md:flex-col max-md:justify-center max-md:w-[250px] max-md:h-[250px] max-md:rounded-full max-md:bg-zn-gray-box  text-[64px] z-10'>       
          <div className="flex flex-row justify-center md:py-5 max-md:pb-5 md:hidden">
            <img src="/imgs/logo.png" alt="logo" className='2xl:w-[143px] md:w-[88px] md:h-[70px] max-md:w-[88px] max-md:h-[70px]'/>
          </div>
          <h2 className='text-center zn-body-1-bold md:hidden'>
          {t("REINVENTYOURSPACEWITHUS")}
          </h2>
        </div>
      </div>

      <h1 className='zn-h-1-bold pb-5 text-center'>
      {t("WELCOME")}
        </h1>
      <h2 className='text-center zn-h-3-bold max-md:hidden'>
      {t("REINVENTYOURSPACEWITHUS")}
      </h2>
      <div className="flex flex-row justify-center md:py-5 max-md:pb-5 max-md:hidden">
          <img src="/imgs/logo.png" alt="logo" className='2xl:w-[143px] lg:w-[80px] md:w-[58px] w-[74px] md:h-[71px] h-[70px]'/>
        </div>
      <form action="" className='2xl:w-[478px] lg:w-[267px] w-[260px] m-auto'>
        <div className="flex flex-col gap-y-2.5 py-2.5">
          <label htmlFor="email" className='zn-body-2'>{t("EMAILADDRESS")}</label>
          <div className="relative">
          <input type="email" id='email' className='zn-input-field ' placeholder={'EXAMPLE@GMAIL.COM'}/>
          <MdOutlineMail className={`absolute top-1.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5">
          <label htmlFor="password" className='zn-body-2'>{t("PASSWORD")}</label>
          <div className="relative">
          <input type="password" id='password' className='zn-input-field' placeholder='****************'/>
          <IoKeyOutline className={`absolute top-1.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
          </div>
          {warrningModle&&<div className='border-2 border-zn-red py-3 text-zn-red zn-body-2 text-center mt-4'>
            {t("YOUR EMAIL/PASSWORD ARE INVALID")} 
          </div>
          }
          <div className="mt-4">
          <div className="text-center">
            <span className="zn-body-3">{t("DON'THAVEANACCOUNT")} ?</span>
            <NavLink to={'/signInPage/signInForm'} className="text-zn-blue-light"><span className="zn-body-3 ">{t("SIGNUP")} </span></NavLink>
            
          </div>
          <div className='text-center'>
            <span className="zn-body-3">{t("FORGOTPASSWORD")} ?</span>
            <NavLink to={'/signInPage/changePasswordForm'} className="text-zn-blue-light"><span className="zn-body-3 ">{t("CHANGEPASSWORD")} </span></NavLink>
            <a href="#" ></a>
          </div>
          </div>
          <div className="flex justify-center">
            <NavLink to={'/profilePage'}>
             <Button >{t("LOGIN")}</Button>
            </NavLink>
          </div>

      </form>
    </section>
    {erorrModle&&<div className='modle'>
      <div className="overly"></div>
      <div className="modle-content">
        <div className="modle-body">
        <h1 className='zn-h-4-semiBold text-center py-5'>{t("ERROR")}</h1>
        <div className="modle-body px-6 text-zn-gray-3">
        <p className='zn-body-2 text-center'>{t("PLEASE WAIT A FEW MINUTES")}</p>
        <p className='zn-body-2 text-center'>{t("BEFORE YOU TRY AGAIN")}</p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 my-4'/>
        <div className="modle-button flex flex-row justify-center text-zn-red">
          <button className='zn-body-2 mb-2 ' onClick={()=>setErorrModle(false)}>
          {t("DISMISS")}
          </button>
        </div>
        </div> 
      </div>
      </div>}
    </>
  )
}

export default LogInForm

