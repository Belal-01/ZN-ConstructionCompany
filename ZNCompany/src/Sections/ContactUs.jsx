import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useStore } from '../store';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const nightMood = useStore((store)=>store.darkMood)
 const {t} = useTranslation()
  return (
    <>
      <div className={`h-[100px] flex flex-row flex-wrap justify-between items-center px-[40px] gap-y-3 max-sm:min-h-[180px] ${nightMood&&'text-zn-white'}`}>
        <div className="contact-title">
          <h1 className='zn-h-3 '>{t("CONTACT US")}</h1>
        </div>
         <div className="contact-location flex flex-row items-center gap-x-2">
          <span ><MdOutlineLocationOn className='text-2xl max-sm:text-lg'/></span>
          <p className='zn-body-1'>1234 Greenway Drive <br /> Springfield, IL 62701</p>
         </div>
         <div className="contact flex flex-row items-center gap-x-2">
          <span><FaWhatsapp className='text-2xl max-sm:text-lg'/></span>
          <p className='zn-body-1'>(+963) 123-456-789</p>
         </div>
         <div className="contact-email flex flex-row items-center gap-x-2">
          <span><MdOutlineEmail className='text-2xl max-sm:text-lg'/></span>
          <p className='zn-body-1'>INFO@ZANDNCONSTRUCTION.COM</p>
         </div>
      </div>
    </>
  )
}

export default ContactUs
