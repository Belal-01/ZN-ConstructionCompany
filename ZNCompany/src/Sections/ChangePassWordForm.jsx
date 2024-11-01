import React, { useEffect } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import Button from '../Components/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useStore } from '../store';

const ChangePassWordForm = () => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  const lan = Cookies.get('i18next')|| "en"
  const darkMood = useStore((store)=>store.darkMood)

// change password api
  const changePasswordApi = async(data)=>{
    const url = "https://backendsec3.trainees-mad-s.com/api/user/password/forgot-password"
    try {
      const response = await axios.post(url, data, {
          headers: {
              'Content-Type': 'application/json' // Set content type if needed
          },
          
      });
      if(response.ok){
        console.log(response.ok)
      }
      console.log('Response:', response.data);
      console.log(response.status)
      if(response.status===200){
        const email = JSON.parse(data).email
        const password = document.getElementById('password').value
        const password_confirmation = document.getElementById('Re-password').value
        const verifyState = {email:email,password,password_confirmation,requestType:'verifyForgotPassword'}
        navigate('/verifyPage',{state:verifyState})
      }

  } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);

  }
  }

  useEffect(()=>{
    document.getElementById('changePasswordForm').addEventListener('submit',(e)=>{
      e.preventDefault()
      const email = document.getElementById('email').value
      const data = JSON.stringify({email})
      changePasswordApi(data)
      
    })
  },[])
  
  return (
    <>
    <section className="2xl:py-[250px] md:py-[60px] h-full ">
    <h1 className={`zn-h-3-bold py-[35px] text-center ${darkMood?'text-white':''}`}>
      {t("CHANGEPASSWORD")}
    </h1>
    <form action="" id='changePasswordForm' className='2xl:w-[478px] xl:w-[350px] lg:w-[267px] w-[265px] m-auto flex flex-col xl:gap-y-5'>
      <div className="flex flex-col gap-y-2.5 py-2.5">
        <label htmlFor="email" className={`zn-body-2 ${darkMood?'text-white':''}`}>{t("EMAIL ADDRESS")}</label>
        <div className="relative">
        <input type="email" id='email' className='zn-input-field ' placeholder={'EXAMPLE@GMAIL.COM'} required/>
        <MdOutlineMail className={`absolute top-2.5 2xl:pt-4 2xl:text-2xl  ${lan==='ar'? 'right-1.5':'left-1.5'} ${darkMood?'text-white':''}  `} />
        </div>
      </div>
      <div className="flex flex-col gap-y-2.5 pb-2.5">
        <label htmlFor="password" className={`zn-body-2 ${darkMood?'text-white':''}`}>{t("PASSWORD")}</label>
        <div className="relative">
        <input type="password" id='password' className='zn-input-field' placeholder='****************' required/>
        <IoKeyOutline className={`absolute top-2.5 2xl:pt-4 2xl:text-2xl   ${lan==='ar'? 'right-1.5':'left-1.5'} ${darkMood?'text-white':''} `} />
        </div>
        </div>
      <div className="flex flex-col gap-y-2.5 pb-2.5">
        <label htmlFor="Re-password" className={`zn-body-2 ${darkMood?'text-white':''}`}>{t("RE-ENTER PASSWORD")}</label>
        <div className="relative">
        <input type="password" id='Re-password' className='zn-input-field' placeholder='****************' required/>
        <IoKeyOutline className={`absolute top-2.5 2xl:pt-4 2xl:text-2xl   ${lan==='ar'? 'right-1.5':'left-1.5'} ${darkMood?'text-white':''} `} />
        </div>
      </div>
      <div className="text-center">
        <span className={`zn-body-3 ${darkMood?'text-white':''}`}>{t("WE WILL SEND YOU A 6 DIGIT CODE TO VERIFY YOUR ACCOUNT")}</span>
      </div>
        <div className="flex justify-center">
          <span >
          <Button >{t("SEND CODE")}</Button>
          </span>
        </div>

    </form>
  </section>
  </>
  )
}

export default ChangePassWordForm
