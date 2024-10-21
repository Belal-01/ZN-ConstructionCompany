import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useGSAP } from '@gsap/react'
import { modleAnimation } from '../Utils/main'

const Profile = () => {
  const [logMessage,setLogMessage] = useState(false)
  useGSAP(()=>{
    modleAnimation('.modle-content','.modle-body','340px')

  },[logMessage])

    const navigate = useNavigate();
  return (
    <>
    {/* <Header /> */}
      <div className='flex flex-col h-full'>
        <div className="flex-1 overflow-hidden profileImg min-h-[300px]" >
          <img src="/imgs/profileImg.png" alt="Seaview" className='h-full w-full object-cover' loading='lazy'/>
        </div>
        <div className="flex-1 profileInfo flex flex-row h-fit w-full overflow-visible">
          <div className='flex flex-row max-md:flex-col 2xl:w-[630px] md:w-[400px] sm:w-[200px] w-[120px] bg-zn-white bg-[url(/imgs/profileBG.png)] bg-no-repeat bg-left-bottom'>
            <div className="img lg:flex-1 max-md:h-[100px] relative">
              <div className='2xl:w-[290px] 2xl:h-[290px] w-[161px] h-[161px] rounded-full bg-zn-green-dark absolute 2xl:-top-[145px] -top-[80px] sm:left-10 left-6 p-1 relative z-0'>
                <img src="/imgs/myprofile.png" alt="userImg" className='rounded-full object-fill w-full h-full' loading='lazy' />
                <span className='absolute bg-zn-white border-2 border-zn-black rounded-md px-2 -bottom-5 left-4'>@bilal-mustafa</span>
              </div>
            </div>
            
            <div className="info flex-1 flex flex-row ">
            <div className='sm:flex-auto max-sm:w-5'> </div>
            <div className=' md:w-[150px] sm:w-[100px] w-[100px]'>
              <h2 className='zn-body-1-bold text-zn-green-dark py-10 max-md:text-start'>NAME</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10 max-md:text-start'>COUNTRY</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10 max-md:text-start'>EMAIL</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10 max-md:text-start'>PHONE</h2>
              </div>
            </div>
          </div>
          <div className='sm:flex-auto  md:bg-zn-black max-md:lg-zn-white max-md:pb-10 md:pl-20 sm:pl-10 pl-4 md:pr-16 '>
          <div className="info max-md:pt-[100px]">
              <h2 className='zn-body-1-bold text-zn-white max-md:text-zn-black py-10'>BILAL MUSTAFA</h2>
              <h2 className='zn-body-1-bold text-zn-white max-md:text-zn-black pb-10'>SYRIA-DAMASCUS</h2>
              <p className='zn-body-1-bold text-zn-white max-md:text-zn-black pb-10 '>belalkhobieh343@gmail.com</p>
              <h2 className='zn-body-1-bold text-zn-white max-md:text-zn-black pb-10'>+963-000-000-000</h2>
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
      <div className="modle-body">
        <div className="modle-body px-12 py-8 text-zn-gray-3">
        <p className='zn-body-2 text-center'>ARE YOU SURE YOU WANT </p>
        <p className='zn-body-2 text-center'>TO LOG OUT ?</p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 '/>
        <div className="modle-button flex flex-row justify-center py-2 text-zn-red">
          <button className=' flex-1 zn-body-2  text-zn-red py-2 text-center border-r-2' onClick={()=>navigate('/')}>
            YES
          </button>
          <button className='flex-1 zn-body-2  text-zn-green text-center' onClick={()=>setLogMessage(false)}>
            NO
          </button >
        </div>
      </div>
        
      </div>
      </div>}
    </>
  )
}

export default Profile
