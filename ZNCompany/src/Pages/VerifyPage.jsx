import React,{useEffect, useState} from 'react'
import Navbar from '../Sections/Navbar'
import Button from '../Components/Button';

import { useLocation, useNavigate } from 'react-router';
import { useGSAP } from '@gsap/react';
import { modleAnimation } from '../Utils/main';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useAuth } from '../Components/Auth';
import { useStore } from '../store';
import addNotification from 'react-push-notification';
const VerifyPage = () => {
const [erorrModle,setErorrModle] = useState(false);
const [successModle,setSuccessModle] = useState(false)
const location = useLocation()
const userInfo = location.state ||''
const auth = useAuth()
const userToken = useStore((store)=>store.userToken)
const {t} = useTranslation();
const setUserEmail = useStore((store)=>store.setUserEmail)
const userEmail = useStore((store)=>store.userEmail)

const navigate = useNavigate();

const verifyRegisterApi = async(data)=>{
  const url = "https://backendsec3.trainees-mad-s.com/api/verify-email"
  try {
    const response = await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json' // Set content type if needed
        },
        
    });
    if(response.data.message==="Email verified successfully"){
      console.log('Response:', response.data);
      console.log(response.status)
      const userInfo = JSON.parse(data)
      auth.signUp(response.data.token,userInfo.email)
      setSuccessModle(true)
    }
} catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    setErorrModle(true)
}
}
const ResetNewPassword = async(data,token)=>{
  const JsonData = JSON.stringify(data)
  console.log('reset Password')
  const url = "https://backendsec3.trainees-mad-s.com/api/user/password/reset-password"
  try {
    const response = await axios.post(url,JsonData, {
        headers: {
            'Content-Type': 'application/json',// Set content type if needed
            'Authorization':` Bearer ${token}`
        },
        
    });
    if(response.data.message==='Password reset successfully.'){
      console.log(response)
      console.log('Response:', response.data.token);
      console.log(response.status)
      setUserEmail(data.email)
      setSuccessModle(true)
       
    }
} catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    setErorrModle(true)
}
}
const verifyForgotPassApi = async(reqData)=>{
  const url = "https://backendsec3.trainees-mad-s.com/api/user/password/verify-forgot-Password-code"
    fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type':'application/json',
           // Include the bearer token
      },
      body: JSON.stringify(reqData),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed To verify PassWord');
      }
      return response.json();
  })
  .then(data => {
      console.log('password verifyed successful:', data);
      if(data.token!==null)
        ResetNewPassword(userInfo,data.token)
  })
.catch(error => console.error('Error:', error));
     
    

}
const resendCode = async(data,token)=>{
  const url = "https://backendsec3.trainees-mad-s.com/api/resend-verification-code"
  try {
    const response = await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json', // Set content type if needed
            'Authorization':`Bearer ${token}`
        },
        
    });
    
    console.log('Response:', response.data);
    console.log(response.status)
    console.log(response.to)

} catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);

}
}
  useEffect(()=>{
    document.getElementById('verifyForm').addEventListener('submit',(e)=>{
      e.preventDefault()
      const code1 = document.getElementById('code1').value
      const code2 = document.getElementById('code2').value
      const code3 = document.getElementById('code3').value
      const code4 = document.getElementById('code4').value
      const code5 = document.getElementById('code5').value
      const code6 = document.getElementById('code6').value
      const data = {
        email:userInfo.email,
        code:code1+code2+code3+code4+code5+code6
      }
      
      if(userInfo.requestType==='verifyForgotPassword'){
        verifyForgotPassApi(data)      
      }
      else
        verifyRegisterApi(data)
    })
    document.getElementById('resendCode').addEventListener('click',()=>{
      const data = JSON.stringify({email:userInfo.email})
      if(userInfo.requestType!=='verifyForgotPassword')
        resendCode(data,userInfo.token)

    })
  },[])
  useGSAP(()=>{
      modleAnimation('.modle-content','.modle-body','340px')
  },[successModle,erorrModle])



  return (
    <>
     <Navbar />
    <div className='w-full h-full bg-zn-white flex flex-col py-[50px] lg items-center'>
      <div className=''>
        <img src="/imgs/verficationImg.png" alt="EmailImg" className='2xl:w-[280px] 2xl:h-[260px] w-[155px] h-[155px]' />
      </div>
      <h2 className='zn-body-0-bold text-center 2xl:py-10 py-5'>{t("PLEASE VERIFY YOUR ACCOUNT")}</h2>
      <p className='zn-body-2 text-center 2xl:w-[30%] lg:w-[40%] md:w-[50%] w-[60%] text-wrap ' >
         {t("ENTER THE 6 DIGIT CODE (CONTAINS LETTERS AND NUMBERS) THAT WE SENT TO YOUR EMAIL ADDRESS TO VERIFY YOUR NEW PASSWORD")}
   
      </p>
      <form action="" id='verifyForm' >
      <div className="verification-code flex flex-row gap-x-4 py-5">
        <input type="text" id='code1' maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="text" id='code2' maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="text" id='code3' maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="text" id='code4' maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="text" id='code5' maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="text" id='code6' maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
      </div>
      <div className="flex flex-col justify-center items-center">
      <span className='zn-body-2 '>{t("VALID FOR 3 MINUTES")} </span>
      <a id='resendCode'  className='zn-body-3 text-zn-blue-light py-4 cursor-pointer' > {t("RESEND CODE")}</a>
      </div>
      <div className="verify-btn">
       <button type='submit' className='zn-button'>{t("VERIFY AND CONTINUE")}</button>
      </div>
    </form>
    </div>
    {erorrModle&&<div className='modle'>
      <div className="overly"></div>
      <div className="modle-content">
        <div className="modle-body">
        <h1 className='zn-h-4-semiBold text-center py-5'>{t("ERROR")}</h1>
        <div className="modle-body px-12 text-zn-gray-3">
        <p className='zn-body-2 text-center'>
        {userInfo.requestType==='verifyForgotPassword'?'Validation error': t("Failed to verify your account")}
        </p>
        <p className='zn-body-2 text-center'>
          {t("TRY AGAIN AFTER FEW MENUTES")}
          </p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 my-4'/>
        <div className="modle-button flex flex-row justify-center text-zn-red">
          <button className='zn-body-2 mb-2 ' onClick={()=>{
            setErorrModle(false)
          }}>
            {t("DISMISS")}
          </button>
          </div>
        </div>
        
      </div>
      </div>}
      {successModle&&<div className='modle'>
      <div className="overly"></div>
      <div className="modle-content">
        <div className="modle-body">
        <h1 className='zn-h-4-semiBold text-center py-5'>{userInfo.requestType==='verifyForgotPassword'?'Password Changed': t("SIGNED UP")}</h1>
        <div className="modle-body px-12 text-zn-gray-3">
        <p id='successModleMessage' className='zn-body-2 text-center'>
          {userInfo.requestType==='verifyForgotPassword'?'Your password verifyed successfull y:': t("YOUR ACCOUNT SUCCESSFULLY VERIFIED")}
         </p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 my-4'/>
        <div className="modle-button flex flex-row justify-center text-zn-green">
          <button className='zn-body-2 mb-2 ' onClick={()=>{
            if(userInfo.requestType==='verifyForgotPassword'){
              navigate('/',{replace:true})
              addNotification({
                title: 'ZN COMPANY ',
                subtitle: `CONGRATES ${userEmail}✨`,
                message: 'YOUR PASSWORD HAS CHANGED SUCCESSFULLY LOG IN WITH THE NEW PASSWORD',
                theme: 'darkblue',
                backgroundTop: 'green',
                duration:10000,
               
            });
            }else{
              navigate('/profilePage',{state:{token:userToken}})
              if(auth.userToken!==null)
                addNotification({
                  title: 'ZN COMPANY ',
                  subtitle: `${t("WELCOME")} ${userEmail} ✨`,
                  message: 'YOU HAVE SIGNED UP SUCCESSFULLY',
                  theme: 'darkblue',
                  backgroundTop: 'green',
                  duration:10000,
              });
            }
            }}>
           {t("CONTINUE")}
          </button>
          </div>
        </div>
        
      </div>
      </div>}
    </>
  )
}

export default VerifyPage
