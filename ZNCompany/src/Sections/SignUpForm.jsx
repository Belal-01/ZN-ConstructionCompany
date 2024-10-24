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
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';



const SignUpForm = () => {
  const [erorrModle,setErorrModle] = useState(false);
  const [warrningModle,setWarrningModle] = useState(false);

  const {t} = useTranslation();
  const lan = Cookies.get('i18next')|| "en"
  

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
        <div className="profile w-[110px] h-[110px] rounded-full bg-zn-gray-box relative">
          <IoPersonOutline className='absolute top-5 left-6 text-[64px] text-zn-gray-2' />

          <IoAddSharp  className='bg-zn-green w-5 h-6 rounded-sm cursor-pointer text-white outline-2 outline-dotted outline-zn-black outline-offset-1 absolute bottom-0 right-1'/>
          
        </div>
      </div>
      <form action="" className='2xl:w-[478px] lg:w-[267px] w-[265px] m-auto'>
        <div className="flex flex-col gap-y-2.5 py-2.5">
          <label htmlFor="email" className='zn-body-2'>{t("EMAIL ADDRESS")}</label>
          <div className="relative">
          <input type="email" id='email' className='zn-input-field' placeholder={'EXAMPLE@GMAIL.COM'}/>
          <MdOutlineMail className={`absolute top-1.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 pb-2.5">
          <label htmlFor="userNumber" className='zn-body-2'>{t("PHONE NUMBER")}</label>
          <div className="relative">
          <input type="number" id='userNumber' className='zn-input-field' placeholder='+963 *** *** ***'/>
          <FiPhone className={`absolute top-1.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 pb-2.5">
          <label htmlFor="userName" className='zn-body-2'>{t("USERNAME")}</label>
          <div className="relative">
          <input type="text" id='userName' className='zn-input-field' placeholder='@USER-Name'/>
          <IoPersonOutline className={`absolute top-1.5  ${lan==='ar'? 'right-1.5':'left-1.5'} `} />
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
        <div className="flex flex-row gap-x-10">
          <div className="flex flex-col gap-y-2">
          <label htmlFor="Country" className='zn-body-2'>{t("COUNTRY")} </label>
          <select name="Country" id="Country" className='zn-input-field '>
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
          <select name="City" id="City" className='zn-input-field'>
            <option value="default"></option>
            <option value="Syria">Syria</option>
            <option value="Iraq">Iraq</option>
            <option value="Jorden">Jorden</option>
            <option value="Egypt">Egypt</option>
            <option value="Saudi">Saudi Arab</option>
          </select>
          </div>
        </div>

          {warrningModle&&<div className='border-2 border-zn-red py-3 text-zn-red zn-body-2 text-center mt-4'>
            INVAlLID FIELDS. TRY AGAIN
          </div>
          }
        
          <div className="flex justify-center">
            {!warrningModle&&<NavLink to={'/verifyPage'}><Button >{t("SIGNUP")}</Button></NavLink>}
          </div>
          <div className="text-center">
            <span className="zn-body-3">{t("HAVE AN ACCOUNT")} ?</span>
            <NavLink to={"/"} className="text-zn-blue-light"><span className="zn-body-3 "> {t("LOGIN")}</span></NavLink>
            <a href="#" className="text-zn-blue-light"></a>
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

export default SignUpForm
