import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import Button from '../Components/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const ChangePassWordForm = () => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  const lan = Cookies.get('i18next')|| "en"
  
  return (
    <>
    <section className="2xl:py-[150px] md:py-[120px] h-full bg-zn-white">
    <h1 className='zn-h-3-bold py-[35px] text-center'>
      {t("CHANGEPASSWORD")}
    </h1>
    <form action="" className='2xl:w-[478px] lg:w-[267px] w-[265px] m-auto'>
      <div className="flex flex-col gap-y-2.5 py-2.5">
        <label htmlFor="email" className='zn-body-2'>{t("EMAIL ADDRESS")}</label>
        <div className="relative">
        <input type="email" id='email' className='zn-input-field ' placeholder={'EXAMPLE@GMAIL.COM'}/>
        <MdOutlineMail className={`absolute top-1.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
        </div>
      </div>
      <div className="flex flex-col gap-y-2.5 pb-2.5">
        <label htmlFor="password" className='zn-body-2'>{t("PASSWORD")}</label>
        <div className="relative">
        <input type="password" id='password' className='zn-input-field' placeholder='****************'/>
        <IoKeyOutline className={`absolute top-1.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
        </div>
        </div>
      <div className="flex flex-col gap-y-2.5 pb-2.5">
        <label htmlFor="Re-password" className='zn-body-2'>{t("RE-ENTER PASSWORD")}</label>
        <div className="relative">
        <input type="password" id='Re-password' className='zn-input-field' placeholder='****************'/>
        <IoKeyOutline className={`absolute top-1.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
        </div>
      </div>
      <div className="text-center">
        <span className="zn-body-3">{t("WE WILL SEND YOU A 6 DIGIT CODE TO VERIFY YOUR ACCOUNT")}</span>
      </div>
        <div className="flex justify-center">
          <span onClick={()=>{navigate('/verifyPage')}}>
          <Button >{t("SEND CODE")}</Button>
          </span>
        </div>

    </form>
  </section>
  </>
  )
}

export default ChangePassWordForm
