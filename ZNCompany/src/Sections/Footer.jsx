import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer className='flex flex-col justify-between gap-y-6 h-[300px] bg-zn-blue-dark sm:px-[45px] px-[20px] pt-[40px] pb-5 '>
      <div className='grid md:grid-cols-4 max-md:grid-cols-2 gap-y-6 max-sm:gap-x-3 justify-between items-top'>
        <div className="logo self-start flex md:flex-row max-md:flex-col flex-wrap justify-center items-center gap-x-2 max-w-[200px]">
          <img src="imgs/logo.png" alt="logo" className='w-[70px] '/>
          <p className='zn-body-2 text-zn-white '>{t("COMPANYFIRSTNAME")}<br /> {t("COMPANYSECONDNAME")}</p>
        </div>
        <div className="hours text-zn-white max-w-[240px] max-sm:self-end">
          <h2 className="title zn-body-2-bold pb-3">{t("BUSINESS HOURS")}:</h2>
          <p className='zn-body-2'>{t("MONDAY-FRIDAY8AM-6PM")}</p>
          <p className='zn-body-2'>{t("SATURDAY:9AM - 4PM")}</p>
          <p className='zn-body-2'>{t("SUNDAYCLOSED")}</p>
        </div>
        <div className="sectionsLinks text-zn-white max-w-[240px] max-md:pl-8">
        <h2 className="title zn-body-2-bold pb-3 ">{t("QUICK LINKS")}:</h2>
          <ul className='list-disc pl-5 zn-body-2'>
            <li className='pb-1'><a href="">{t("HOME")}</a></li>
            <li className='pb-1'><a href="">{t("ABOUTUS")}</a></li>
            <li className='pb-1'><a href="">{t("SERVICES")}</a></li>
            <li className='pb-1'><a href="">{t("PROJECTS")}</a></li>
            <li className='pb-1'><a href="">{t("CONTACT")}</a></li>

          </ul>
        </div>
        <div className="certifications text-zn-white max-w-[240px]">
          <h2 className="title zn-body-2-bold pb-3">{t("AWARDS AND CERTIFICATIONS")}:</h2>
          <ul className='list-disc pl-5 zn-body-2'>
            <li className='pb-1'>
            {t("PROUD MEMBER OF THE MATIONAL ASSOCIATION OF LANDSCAPE PROFESSIONALS")} 
            </li>
            <li className='pb-1'>
            {t("CERTIFIED GREEN BUILDER")} 
            </li>
            </ul>
        </div>
      </div>
      <div className="text-center">
        <p className='text-center zn-body-2 text-zn-white'>
          {t("© 2024 Z AND CONTSTRUCTION AND LANDSCAPING .ALL RIGHTS ARE RESERVED")}
        </p>
      </div>

    </footer>
  )
}

export default Footer
