import React, { useEffect, useState } from 'react'
import Button from '../Components/Button'
import { IoClose, IoKeyOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import { MdOutlineLightMode } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { useStore } from '../store';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const Header = () => {
  const [showMenu,setShowMenu] = useState(false);
  const [showSubMenu,setShowSubMenu] = useState(false)
  const [moodModle,setMoodModle] = useState(false)
  const [languagesMenu,setLanguagesMenu] = useState(false)
  const [navLinks,setNavLinks] = useState({
    home:false,
    about:false,
    projects:false

  })
  const nightMood = useStore((store)=>store.darkMood)
  const setNightMood = useStore((store)=>store.setDarkMood)

  const { t } = useTranslation();

  useEffect(()=>{
    if(nightMood){
      document.body.classList.add('nightbg')
    }else
      document.body.classList.remove('nightbg')

  },[nightMood])
  useGSAP(()=>{
    if(showMenu){
    gsap.to('.topMenu-icon',{
      rotate:45,
      y:10,
      duration:0.5
    })
    gsap.to('.bottomMenu-icon',{
      rotate:-45,
      y:-10,
      duration:0.5

    })
  }else{
    gsap.to('.topMenu-icon',{
      rotate:0,
      y:0,
      duration:0.5
    })
    gsap.to('.bottomMenu-icon',{
      rotate:0,
      y:0,
      duration:0.5

    })
  }
  },[showMenu])
  const handleNavLink = (link)=>{
      if(link==='home')
        setNavLinks({home:true,about:false,projects:false})
      else if(link === 'about')
        setNavLinks({home:false,about:true,projects:false})
      else
        setNavLinks({home:false,about:false,projects:true})
  }

  
  return (
  <header className='fixed flex flex-row justify-between items-center top-0 left-0 right-0 sm:h-[70px] h-[55px] bg-gradient-to-r from-zn-blue to-zn-blue-light z-10'>
    <div className="logo border-r-2 border-l-2 flex flex-row sm:justify-between justify-center max-sm:min-w-[60px] items-center gap-x-1 sm:px-4">
      <img src="imgs/logo.png" alt="logo" className='w-[50px]'/>
      <p className='zn-body-2 text-zn-white max-sm:hidden'>{t("COMPANYFIRSTNAME")}
        <br />
        {t("COMPANYSECONDNAME")}
      </p>
    </div>
    <div className="navList  shrink-0 flex-auto flex flex-row justify-around items-center w-[250px] max-lg:hidden">
      <NavLink to={'/landingPage'}>
        <span className={classNames('zn-body-0-bold text-zn-white',{clicked:navLinks.home})}  onClick={()=>handleNavLink('home')}>{t("HOME")}</span>
      </NavLink>
      <NavLink to={'/landingPage'}>
        <span className={classNames('zn-body-0-bold text-zn-white',{clicked:navLinks.about})}   onClick={()=>{handleNavLink('about')} }>{t("ABOUTUS")}</span>
      </NavLink>
      <NavLink to={'/landingPage'}>
       <span className={classNames('zn-body-0-bold text-zn-white',{clicked:navLinks.projects})} onClick={()=>handleNavLink('projects')}>{t("PROJECTS")}</span>
      </NavLink>

    </div>
    <div className="right-section  flex-auto flex flex-row gap-x-2 justify-around items-center w-[400px] max-md:px-3">
    <div className="relative">
          <input type="search" id='search' className=' rounded-md h-7 py-0 sm:w-full w-[70px] pl-8 2xl:pl-10 bg-zn-white border border-zn-black ' placeholder=''/>
          <IoSearch className='absolute top-1.5 left-1.5 ' />
    </div>
      <div className="menu flex flex-row items-center gap-x-3 relative">
        <span className='flex flex-col justify-between cursor-pointer min-h-6' onClick={()=>setShowMenu(prev=>!prev)}> 
          <div className={classNames('sm:w-10 w-8 sm:h-[4px] h-[3px] bg-zn-white rounded-full topMenu-icon')}></div>
          <div className={classNames('sm:w-6 w-5 sm:h-[4px] h-[3px] bg-zn-white rounded-full ',{'hidden':showMenu})}></div>
          <div className={classNames('sm:w-10 w-8 sm:h-[4px] h-[3px] bg-zn-white rounded-full bottomMenu-icon')}></div>
        </span>
        <span className='zn-body-0-bold text-zn-white cursor-pointer' onClick={()=>setShowMenu(prev=>!prev)}>{t("MENU")}</span>
       
        <div className={`bg-zn-white  ${showMenu&&"border"} border-black absolute top-[60px] right-0 rounded-tl-xl rounded-bl-xl menu-container ${showMenu&&"menu-container-show"} overflow-y-scroll shadow-lg z-50`}>
          <ul className=' py-4 px-2 2xl:w-[435px] w-[240px]'>
            <li className=' cursor-pointer w-full'><span  className='py-2 z-body-1 px-2  hover:bg-zn-green w-full h-full block font-bold' onClick={()=>setShowSubMenu(prev=>!prev)}>{t("MAINMENU")}</span>
              <div className={`subMenu-container  ${showSubMenu&&'subMenu-container-show'}`}>
                <div className={`subDrop ${!showSubMenu&&'hidden'}`}>
                    <ul 
                    className ={`header-menu px-8  w-full ${showMenu&&'header-menu-show'} `} >
                      
                      <NavLink to={'/landingPage'}><li className='py-2 z-body-1 pl-2  cursor-pointer hover:bg-zn-green-light lg:hidden'>{t("HOME")}</li></NavLink>
                      <NavLink to={'/landingPage'}><li className='py-2 z-body-1 pl-2  cursor-pointer hover:bg-zn-green-light lg:hidden'>{t("ABOUTUS")}</li></NavLink>
                      <NavLink to={'/landingPage'}><li className='py-2 z-body-1 pl-2  cursor-pointer hover:bg-zn-green-light lg:hidden'>{t("PROJECTS")}</li></NavLink>
                      <NavLink to={'/landingPage'}><li className='py-2 z-body-1 pl-2  cursor-pointer hover:bg-zn-green-light'>{t("LANDSCAPING")}</li></NavLink>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("DECKING")}</li>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("GARDENING")}</li>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("INTERLOCKING")}</li>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("FLORALDESIGN")}</li>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("POOLS")}</li>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("RAILINGS")}</li>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("WOODWORING")}</li>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("SHOWRROOM")}</li>
                      <NavLink to={'/profilePage'}><li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("PROFILE")}</li></NavLink>
                      <NavLink to={'/landingPage'}><li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light'>{t("CONTACTUS")}</li></NavLink>
                    </ul>
                </div>
              </div>  
            </li>
            <li className='  cursor-pointer w-full'><span className='h-full w-full py-2 z-body-1 px-2 hover:bg-zn-green block font-bold' onClick={()=>setLanguagesMenu(prev=>!prev)}>{t("LANGUAGES")}</span>
              <div className={`languagesMenu-container max-h-0  ${languagesMenu&&'max-h-40'} duration-300`}>
                <div className={`subDrop ${!languagesMenu&&'hidden'}`}>
                    <ul className='py-2 px-8 2xl:w-[435px] w-[240px]'>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light' onClick={()=>{
                      i18n.changeLanguage('ar')
                      setShowMenu(false)
                      }}><span >{t("ARABIC")}</span></li>
                      <li className='py-2 z-body-1 pl-2 cursor-pointer hover:bg-zn-green-light' onClick={()=>{
                      i18n.changeLanguage('en')
                      setShowMenu(false)
                      }}><span>{t("ENGLISH")}</span></li>
                    </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="switchMood relative">
        <span onClick={()=>setMoodModle(prev=>!prev)}>{nightMood? <GiNightSleep className='text-zn-dark text-3xl cursor-pointer'/>:<MdOutlineLightMode className='text-zn-white text-3xl cursor-pointer'/>
       }</span>
        {moodModle&&<div className="moodeModle bg-zn-white py-2 px-2 rounded-lg absolute top-16 -left-10">
          <ul>
            <li className='px-2 py-1 hover:bg-zn-green-light cursor-pointer flex flex-row items-center justify-between gap-x-4' onClick={()=>{
              setNightMood(false)
              setMoodModle(false)
              
              }}>
              <MdOutlineLightMode className='text-zn-dark text-3xl cursor-pointer'/>
              <span>Light</span>
            </li>
            <li className='px-2 py-1 hover:bg-zn-green-light cursor-pointer flex flex-row items-center justify-between gap-x-4' onClick={()=>{
              setNightMood(true)
              setMoodModle(false)
            }}>
              <GiNightSleep className='text-zn-dark text-3xl cursor-pointer'/>
              <span>Night</span>
            </li>
          </ul>
        </div>}
      </div>
      <div className="booking">
      <button className='md:py-2 py-3 lg:w-[160px] md:w-[140px] sm:w-[120px] w-[90px] rounded-md border border-zn-black bg-zn-green zn-body-2-bold my-4'>
        {t("BOOKNOW")}
      </button>
      </div>
    </div>
   
  </header>
  )
}

export default Header
