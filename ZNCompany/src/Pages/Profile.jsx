import React from 'react'
import Navbar from '../Sections/Navbar'
import { useContext } from 'react'
import { dynamicHieght, dynamicWidth } from '../assets/Constants'
import { CurrentWindowHeight, CurrentWindowWidth } from '../App'

const Profile = () => {
  const windowWidth = useContext(CurrentWindowWidth)
  const windowHeight = useContext(CurrentWindowHeight)
  // console.log(windowHeight)
  // console.log(windowWidth)
  const boldh1 = dynamicWidth(windowWidth,290)
  const height = dynamicHieght(windowHeight,491)
   console.log(boldh1)
    // console.log(height)
  return (
    <>
    <Navbar />
      <div className='flex flex-col h-full'>
        <div className="profileImg h-[300px]" >
          <img src="/imgs/profileImg.png" alt="Seaview" className='h-full w-full object-fill'/>
        </div>
        <div className="profileInfo flex flex-row h-full">
          <div className='flex flex-row 2xl:w-[630px] w-[400px] bg-zn-white bg-[url(/imgs/profileBG.png)] bg-no-repeat bg-left-bottom'>
            <div className="img flex-1 relative">
              <div className='2xl:w-[290px] 2xl:h-[290px] w-[161px] h-[161] rounded-full bg-zn-green-dark absolute -top-20 left-10 p-1'>
                <img src="/imgs/myprofile.png" alt="userImg" className='overflow-hidden rounded-full object-fill' />
              </div>
            </div>
            <div className="info flex-1 pl-20">
              <h2 className='zn-body-1-bold text-zn-green-dark py-10'>NAME</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10'>COUNTRY</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10'>EMAIL</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10'>PHONE</h2>
            </div>
          </div>
          <div className='flex-1 bg-zn-black'>
          <div className="info flex-1 pl-20">
              <h2 className='zn-body-1-bold text-zn-white py-10'>BILAL</h2>
              <h2 className='zn-body-1-bold text-zn-white pb-10'>SYRIA</h2>
              <h2 className='zn-body-1-bold text-zn-white pb-10'>belalkhobieh343@gmail.com</h2>
              <h2 className='zn-body-1-bold text-zn-white pb-10'>+963-000-000-000</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
