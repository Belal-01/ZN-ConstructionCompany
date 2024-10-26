import React ,{useState} from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import Button from '../Components/Button';
import { useContext } from 'react'
import { dynamicHieght, dynamicWidth } from '../Constants'
import { CurrentWindowHeight, CurrentWindowWidth } from '../App'
import { IoPersonOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { useGSAP } from '@gsap/react';
import { modleAnimation } from '../Utils/main';



const SignUpForm = () => {
  const [erorrModle,setErorrModle] = useState(false);
  const [warrningModle,setWarrningModle] = useState(false);

  const {t} = useTranslation();
  const lan = Cookies.get('i18next')|| "en"
  const navigate = useNavigate()
  useGSAP(()=>{
    modleAnimation('.modle-content','.modle-body','340px')
    
  },[erorrModle])

  return (
    <>
    <section className="2xl:py-[100px] py-[30px] h-full bg-zn-white">
      <h1 className='zn-h-3-bold  text-center'>
        {t("SIGNUP")}
      </h1>
      <h2 className='text-center zn-body-2'>
         {t("PROFILE PICTURE")}
      </h2>
      <div className="flex flex-row justify-center py-5">
        <div className="profile w-[130px] h-[130px] rounded-full bg-zn-gray-box relative flex flex-row items-center justify-center">
          <IoPersonOutline className='text-[64px] text-zn-gray-2' />
          <IoAddSharp  className='bg-zn-green w-5 h-6 rounded-sm cursor-pointer text-white outline-2 outline-dotted outline-zn-black outline-offset-1 absolute bottom-0 right-1'/>
          
        </div>
      </div>
      <form action="" className='2xl:w-[478px] lg:w-[267px] w-[265px] m-auto' onSubmit={()=>navigate('/verifyPage')}>
        <div className="flex flex-col gap-y-2.5 py-2.5">
          <label htmlFor="email" className='zn-body-2'>{t("EMAIL ADDRESS")}</label>
          <div className="relative">
          <input type="email" id='email' className='zn-input-field' placeholder={'EXAMPLE@GMAIL.COM'} required/>
          <MdOutlineMail className={`absolute top-2.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 pb-2.5">
          <label htmlFor="userNumber" className='zn-body-2'>{t("PHONE NUMBER")}</label>
          <div className="relative">
          <input type="number" id='userNumber' className='zn-input-field' placeholder='+963 *** *** ***' required/>
          <FiPhone className={`absolute top-2.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 pb-2.5">
          <label htmlFor="userName" className='zn-body-2'>{t("USERNAME")}</label>
          <div className="relative">
          <input type="text" id='userName' className='zn-input-field' placeholder='@USER-Name' required/>
          <IoPersonOutline className={`absolute top-2.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 pb-2.5">
          <label htmlFor="password" className='zn-body-2'>{t("PASSWORD")}</label>
          <div className="relative">
          <input type="password" id='password' className='zn-input-field' placeholder='****************' required/>
          <IoKeyOutline className={`absolute top-2.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 pb-2.5">
          <label htmlFor="Re-password" className='zn-body-2'>{t("RE-ENTER PASSWORD")}</label>
          <div className="relative">
          <input type="password" id='Re-password' className='zn-input-field' placeholder='****************' required/>
          <IoKeyOutline className={`absolute top-2.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
        </div>
        <div className="flex flex-row gap-x-10">
          <div className="flex flex-col gap-y-2">
          <label htmlFor="Country" className='zn-body-2'>{t("COUNTRY")} </label>
          <select name="Country" id="Country" className='zn-input-field ' required>
            <option value="default" ></option>
            <option value="Syria">Syria</option>
            <option value="Iraq">Iraq</option>
            <option value="Jorden">Jorden</option>
            <option value="Egypt">Egypt</option>
            <option value="Saudi">Saudi Arab</option>

          </select>
          </div>
          <div className="flex flex-col gap-y-2">
          <label htmlFor="City" className='zn-body-2 '>{t("City")} </label>
          <select name="City" id="City" className='zn-input-field' required>
            <option value="default"></option>
            <option value="Syria">Damascus</option>
            <option value="Iraq">Homs</option>
            <option value="Jorden">Aleppo</option>
            <option value="Egypt">Latakia</option>
            <option value="Saudi">Tartous</option>
          </select>
          </div>
        </div>

          {warrningModle&&<div className='border-2 border-zn-red py-3 text-zn-red zn-body-2 text-center mt-4'>
            {t("INVAlLID FIELDS. TRY AGAIN")}
          </div>
          }
        
          <div className="flex justify-center">
            {/* {!warrningModle&&
            <button type='submit' className='zn-button' onClick={()=>navigate('/verifyPage')}>{t("SIGNUP")}</button>
            } */}
            <button type='submit' className='zn-button'>{t("SIGNUP")}</button>
          </div>
          <div className="text-center">
            <span className="zn-body-3">{t("HAVE AN ACCOUNT")} ?</span>
            <NavLink to={"/"} className="text-zn-blue-light"><span className="zn-body-3 "> {t("LOGIN")}</span></NavLink>
            
          </div>

      </form>
    </section>
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

export default SignUpForm
