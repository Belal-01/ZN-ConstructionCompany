import React, { useState } from 'react'
import Button from '../Components/Button'
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
  <header className='fixed flex flex-row justify-between items-center top-0 left-0 right-0 h-[55px] bg-gradient-to-r from-zn-blue to-zn-blue-light z-10'>
    <div className="logo border-r-2 flex flex-row justify-between items-center gap-x-1 px-4">
      <img src="imgs/logo.png" alt="logo" className='w-[50px]'/>
      <p className='zn-body-2 text-zn-white'>THE CONSTRUCTION AND <br /> LANDSCAPING COMPANY</p>
    </div>
    <div className="navList  shrink-0 flex-auto flex flex-row justify-around items-center w-[250px]">
      <span className='zn-body-0-bold text-zn-white'>HOME</span>
      <span className='zn-body-0-bold text-zn-white'>ABOUT US</span>
      <span className='zn-body-0-bold text-zn-white'>PROJECTS</span>
    </div>
    <div className="right-section  flex-auto flex flex-row justify-around items-center w-[400px] ">
      <div className="search">
        <input type="search" />
      </div>
      <div className="menu relative">
        <span className='zn-body-0-bold text-zn-white cursor-pointer' onClick={()=>setShowMenu(prev=>!prev)}>MENU</span>
        <div className={`bg-zn-white absolute top-[50px] right-0 rounded-tl-xl rounded-bl-xl menu-container ${showMenu&&"menu-container-show"} `}>
        <ul 
        className ={`header-menu pt-8 pb-4 px-2  2xl:w-[435px] w-[240px] ${showMenu&&'header-menu-show'} `} >
          <IoClose className='absolute top-[8px] right-[20px] text-2xl cursor-pointer' />
          <li 
          className='py-2 z-body-1  text-center cursor-pointer hover:bg-zn-green-light'>LANDSCAPING</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>DECKING</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>GARDENING</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>INTERLOCKING</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>FLORALDESIGN</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>POOLS</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>RAILINGS</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>WOODWOORKING</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>SHOWROOM</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>PROFILE</li>
          <li className='py-2 z-body-1 text-center cursor-pointer hover:bg-zn-green-light'>CONTACT US</li>
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
