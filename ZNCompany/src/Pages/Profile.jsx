import React, { useState } from 'react'
import Navbar from '../Sections/Navbar'
import { useContext } from 'react'
import { dynamicHieght, dynamicWidth } from '../Constants'
import { CurrentWindowHeight, CurrentWindowWidth } from '../App'
import Header from '../Sections/Header'

const Profile = () => {
  const [logMessage,setLogMessage] = useState(true)
  const windowWidth = useContext(CurrentWindowWidth)
  const windowHeight = useContext(CurrentWindowHeight)
  // console.log(windowHeight)
  // console.log(windowWidth)
  const boldh1 = dynamicWidth(windowWidth,425)
  const height = dynamicHieght(windowHeight,57)
   console.log(boldh1)
    // console.log(height)
  return (
    <>
    <Header />
      <div className='flex flex-col h-full'>
        <div className="profileImg h-[300px]" >
          <img src="/imgs/profileImg.png" alt="Seaview" className='h-full w-full object-fill'/>
        </div>
        <div className="profileInfo flex flex-row h-full">
          <div className='flex flex-row 2xl:w-[630px] w-[400px] bg-zn-white bg-[url(/imgs/profileBG.png)] bg-no-repeat bg-left-bottom'>
            <div className="img flex-1 relative">
              <div className='2xl:w-[290px] 2xl:h-[290px] w-[161px] h-[161] rounded-full bg-zn-green-dark absolute -top-20 left-10 p-1 relative'>
                <img src="/imgs/myprofile.png" alt="userImg" className='overflow-hidden rounded-full object-fill' />
                <span className='absolute bg-zn-white border-2 border-zn-black rounded-md px-2 -bottom-5 left-4'>@bilal-mustafa</span>
              </div>
            </div>
            <div className="info flex-1 pl-20">
              <h2 className='zn-body-1-bold text-zn-green-dark py-10'>NAME</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10'>COUNTRY</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10'>EMAIL</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10'>PHONE</h2>
            </div>
          </div>
          <div className='flex-1 bg-zn-black relative'>
          <div className="info flex-1 pl-20">
              <h2 className='zn-body-1-bold text-zn-white py-10'>BILAL</h2>
              <h2 className='zn-body-1-bold text-zn-white pb-10'>SYRIA</h2>
              <h2 className='zn-body-1-bold text-zn-white pb-10'>belalkhobieh343@gmail.com</h2>
              <h2 className='zn-body-1-bold text-zn-white pb-10'>+963-000-000-000</h2>
            </div>
            <button className='md:py-2 py-3 px-9 rounded-md absolute bottom-2 right-8 border border-zn-black bg-zn-red zn-body-2-bold my-4' onClick={()=>setLogMessage(true)}>
              LOG OUT
            </button>
          </div>
        </div>
      </div>
      {logMessage&&<div className='modle'>
      <div className="overly"></div>
      <div className="modle-content">
        <div className="modle-body px-12 py-8 text-zn-gray-3">
        <p className='zn-body-2 text-center'>ARE YOU SURE YOU WANT </p>
        <p className='zn-body-2 text-center'>TO LOG OUT ?</p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 '/>
        <div className="modle-button flex flex-row justify-center py-2 text-zn-red">
          <button className=' flex-1 zn-body-2  text-zn-red py-2 text-center border-r-2'>
            YES
          </button>
          <button className='flex-1 zn-body-2  text-zn-green text-center' onClick={()=>setLogMessage(false)}>
            NO
          </button >
        </div>
        
      </div>
      </div>}
    </>
  )
}

export default Profile
