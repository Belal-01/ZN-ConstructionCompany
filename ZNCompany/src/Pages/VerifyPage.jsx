import React,{useState} from 'react'
import Navbar from '../Sections/Navbar'
import Button from '../Components/Button';
import { useContext } from 'react'
import { dynamicHieght, dynamicWidth } from '../Constants'
import { CurrentWindowHeight, CurrentWindowWidth } from '../App'
import { useNavigate } from 'react-router';
import { useGSAP } from '@gsap/react';
import { modleAnimation } from '../Utils/main';
import { useTranslation } from 'react-i18next';
const VerifyPage = () => {
const [erorrModle,setErorrModle] = useState(false);
const [successModle,setSuccessModle] = useState(false)

useGSAP(()=>{
  modleAnimation('.modle-content','.modle-body','340px')
  
},[successModle])

const {t} = useTranslation();

const navigate = useNavigate();
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
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
        setSuccessModle(true)}}>
      <div className="verification-code flex flex-row gap-x-4 py-5">
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green' required/>
      </div>
      <div className="flex flex-col justify-center items-center">
      <span className='zn-body-2 '>{t("VALID FOR 3 MINUTES")} </span>
      <a  className='zn-body-3 text-zn-blue-light py-4 cursor-pointer'> {t("RESEND CODE")}</a>
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
        <p className='zn-body-2 text-center'>{t("PLEASE WAIT A FEW MINUTES")}</p>
        <p className='zn-body-2 text-center'>{t("BEFORE YOU TRY AGAIN")}</p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 my-4'/>
        <div className="modle-button flex flex-row justify-center text-zn-red">
          <button className='zn-body-2 mb-2 '>
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
        <h1 className='zn-h-4-semiBold text-center py-5'>{t("SIGNED UP")}</h1>
        <div className="modle-body px-12 text-zn-gray-3">
        <p className='zn-body-2 text-center'>{t("YOUR ACCOUNT SUCCESSFULLY VERIFIED")}</p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 my-4'/>
        <div className="modle-button flex flex-row justify-center text-zn-green">
          <button className='zn-body-2 mb-2 ' onClick={()=>navigate('/profilePage')}>
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
