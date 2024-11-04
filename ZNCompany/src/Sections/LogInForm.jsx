import React, { useEffect, useState} from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import Button from '../Components/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { modleAnimation } from '../Utils/main';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useAuth } from '../Components/Auth';
import { useStore } from '../store';
import addNotification from 'react-push-notification';

const LogInForm = ({routPath}) => {
  const [erorrModle,setErorrModle] = useState(false);
  const [warrningModle,setWarrningModle] = useState(false)

  useGSAP(()=>{
    modleAnimation('.modle-content','.modle-body','340px')
  },[erorrModle])
  const lan = Cookies.get('i18next')|| "en"
  const {t} = useTranslation()
  const navigate = useNavigate()
  const auth = useAuth()

  // LogIn api request methode
  const logInApi = async(data)=>{
    const url = "https://backendsec3.trainees-mad-s.com/api/login"
    try {
      const response = await axios.post(url, data, {
          headers: {
              'Content-Type': 'application/json' // Set content type if needed
          }
      });
      
      console.log('Response:', response.data);
      console.log(response.status)
      console.log(response.data.access_token) 
      const userInfo = JSON.parse(data)
      auth.logIn(response.data.access_token,userInfo.email)
      navigate(routPath,{state:{token:response.data.access_token}})
      if(auth.userToken1!==null)
        addNotification({
          title:t("COMPANYFIRSTNAME") + t("COMPANYSECONDNAME"),
          subtitle: `${t("WELCOME")} ${userInfo.email} ✨`,
          message: t("YOU HAVE LOGED IN SUCCESSFULLY"),
          theme: 'blue',
          backgroundTop: 'green',
          duration:10000,
         
      });
      
  } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setWarrningModle(true) 
     setTimeout(()=>{
      setWarrningModle(false)
     },3000)
  }
  }
  useEffect(()=>{
    document.getElementById('logInForm').addEventListener('submit',(e)=>{
      e.preventDefault()
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
     const data = JSON.stringify({email,password})

    logInApi(data)     
    // navigate('/profilePage')
    })
  },[])
  const darkMood = useStore((store)=>store.darkMood)
 

  return (
    <>
    <section className="2xl:py-[150px] xl:py-[60px] md:py-[60px] py-[40px] h-full   ">
      <div className='max-md:absolute top-12 left-0 right-0 max-md:h-[300px] z-20 flex justify-center items-center'>
        <div className='max-md:flex max-md:flex-col max-md:justify-center max-md:w-[250px] max-md:h-[250px] max-md:rounded-full max-md:bg-zn-gray-box  text-[64px] z-10'>       
          <div className="flex flex-row justify-center md:py-5 max-md:pb-5 md:hidden">
            <img src="/imgs/logo.png" alt="logo" className='2xl:w-[143px] md:w-[88px] md:h-[70px] max-md:w-[88px] max-md:h-[70px]'/>
          </div>
          <h2 className={`text-center zn-body-1-bold md:hidden `}>
          {t("REINVENTYOURSPACEWITHUS")}
          </h2>
        </div>
      </div>

      <h1 className={`zn-h-1-bold pb-5 text-center ${darkMood?'text-white':''}`}>
      {t("WELCOME")}
        </h1>
      <h2 className={`text-center zn-h-3-bold max-md:hidden ${darkMood?'text-white':''}`}>
      {t("REINVENTYOURSPACEWITHUS")}
      </h2>
      <div className="flex flex-row justify-center md:py-5 max-md:pb-5 max-md:hidden">
          <img src="/imgs/logo.png" alt="logo" className='2xl:w-[143px] lg:w-[80px] md:w-[58px] w-[74px] 2xl:h-[100px] md:h-[71px] h-[70px] '/>
        </div>
      <form action="" id='logInForm' className='2xl:w-[478px] xl:w-[350px] lg:w-[267px] w-[260px] m-auto' >
        <div className="flex flex-col gap-y-2.5 py-2.5">
          <label htmlFor="email" className={`zn-body-2 ${darkMood?'text-white':''}`}>{t("EMAILADDRESS")}</label>
          <div className="relative ">
          <input type="email" id='email' className='zn-input-field' placeholder={'EXAMPLE@GMAIL.COM'} required />
          <MdOutlineMail className={`absolute top-2.5 2xl:pt-4 2xl:text-2xl  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5">
          <label htmlFor="password" className={`zn-body-2 ${darkMood?'text-white':''}`}>{t("PASSWORD")}</label>
          <div className="relative ">
          <input type="password" id='password' className='zn-input-field' placeholder='****************' required/>
          <IoKeyOutline className={`absolute top-2.5 2xl:pt-4 2xl:text-2xl  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
          </div>
          {warrningModle&&<div className='border-2 border-zn-red py-3 text-zn-red zn-body-2 text-center mt-4'>
            {t("YOUR EMAIL/PASSWORD ARE INVALID")} 
          </div>
          }
          <div className="mt-4">
          <div className="text-center">
            <span className={`zn-body-3 ${darkMood?'text-white':''}`}>{t("DON'THAVEANACCOUNT")} ? </span>
            <NavLink to={'/signInPage/signInForm'} className="text-zn-blue-light"><span className="zn-body-3 ">{t("SIGNUP")} </span></NavLink>
            
          </div>
          <div className='text-center'>
            <span className={`zn-body-3 ${darkMood?'text-white':''}`}>{t("FORGOTPASSWORD")} ? </span>
            <NavLink to={'/signInPage/changePasswordForm'} className="text-zn-blue-light"><span className="zn-body-3 ">{t("CHANGEPASSWORD")} </span></NavLink>
            <a href="#" ></a>
          </div>
          </div>
          <div className="flex justify-center xl:py-5">
            <button className='zn-button'>{t("LOGIN")}</button>
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

