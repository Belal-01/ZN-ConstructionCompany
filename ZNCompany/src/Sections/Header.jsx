import React, { useState } from 'react'
import Button from '../Components/Button'
import { IoClose, IoKeyOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';


const Header = () => {
  const [showMenu,setShowMenu] = useState(false);
  const [navLinks,setNavLinks] = useState({
    home:false,
    about:false,
    projects:false

  })
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
    <div className="logo border-r-2 flex flex-row justify-between items-center gap-x-1 px-4">
      <img src="imgs/logo.png" alt="logo" className='w-[50px]'/>
      <p className='zn-body-2 text-zn-white max-sm:hidden'>THE CONSTRUCTION AND <br /> LANDSCAPING COMPANY</p>
    </div>
    <div className="navList  shrink-0 flex-auto flex flex-row justify-around items-center w-[250px] max-lg:hidden">
      <NavLink to={'/landingPage'}>
        <span className={classNames('zn-body-0-bold text-zn-white',{clicked:navLinks.home})}  onClick={()=>handleNavLink('home')}>HOME</span>
      </NavLink>
      <NavLink to={'/landingPage'}>
        <span className={classNames('zn-body-0-bold text-zn-white',{clicked:navLinks.about})}   onClick={()=>handleNavLink('about')}>ABOUT US</span>
      </NavLink>
      <NavLink to={'/landingPage'}>
       <span className={classNames('zn-body-0-bold text-zn-white',{clicked:navLinks.projects})} onClick={()=>handleNavLink('projects')}>PROJECTS</span>
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
        <span className='zn-body-0-bold text-zn-white cursor-pointer' onClick={()=>setShowMenu(prev=>!prev)}>MENU</span>
       
        <div className={`bg-zn-white  ${showMenu&&"border"} border-black absolute top-[50px] right-0 rounded-tl-xl rounded-bl-xl menu-container ${showMenu&&"menu-container-show"} overflow-y-scroll shadow-lg z-50`}>
        <ul 
        className ={`header-menu pt-8 pb-4 px-2 2xl:w-[435px] w-[240px] ${showMenu&&'header-menu-show'} `} >
          <IoClose className='absolute top-[8px] right-[20px] text-2xl cursor-pointer z-10' onClick={()=>setShowMenu(false)}/>
          <NavLink to={'/landingPage'}><li className='py-2 z-body-1  text-center cursor-pointer hover:bg-zn-green-light lg:hidden'>HOME</li></NavLink>
          <NavLink to={'/landingPage'}><li className='py-2 z-body-1  text-center cursor-pointer hover:bg-zn-green-light lg:hidden'>ABOUT US</li></NavLink>
          <NavLink to={'/landingPage'}><li className='py-2 z-body-1  text-center cursor-pointer hover:bg-zn-green-light lg:hidden'>PROJECTS</li></NavLink>
          <NavLink to={'/landingPage'}><li className='py-2 z-body-1  text-center cursor-pointer hover:bg-zn-green-light'>LANDSCAPING</li></NavLink>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>DECKING</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>GARDENING</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>INTERLOCKING</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>FLORALDESIGN</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>POOLS</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>RAILINGS</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>WOODWOORKING</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>SHOWROOM</li>
          <NavLink to={'/profilePage'}><li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>PROFILE</li></NavLink>
          <NavLink to={'/landingPage'}><li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>CONTACT US</li></NavLink>
        </ul>
        </div>
        
      </div>
      <div className="booking">
        <Button>BOOK NOW</Button>
      </div>
    </div>
   
  </header>
  )
}

export default Header
