import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useGSAP } from '@gsap/react'
import { modleAnimation } from '../Utils/main'
import { useStore } from '../store'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import axios from 'axios'
import addNotification from 'react-push-notification'

const Profile = () => {
  const [logMessage,setLogMessage] = useState(false)
  const nightMood = useStore((store)=>store.darkMood)
  const location = useLocation()
  const LogToken = location.state || ""
  const setUserToken = useStore((store)=>store.setUserToken)
  const userToken = useStore((store)=>store.userToken)
  const userEmail = useStore((store)=>store.userEmail)
  useGSAP(()=>{
    modleAnimation('.modle-content','.modle-body','340px')
  },[logMessage])

  const { t } = useTranslation();
  const lan = Cookies.get('i18next')|| "en"
    const navigate = useNavigate();
    const LogOutApi = async()=>{
      console.log(userToken)

      const url = "https://backendsec3.trainees-mad-s.com/api/logout"
      try {
        const response = await axios.get(url, {
            headers: {
                 //Set content type if needed
                'Authorization':`Bearer ${userToken}`
            },
            
        });
        
        console.log('Response:', response.data);
        console.log(response.status)
        if(response.data.message==="Logged out successfully."){
          setUserToken(null)
          addNotification({
            title: t("COMPANYFIRSTNAME") + t("COMPANYSECONDNAME"),
            subtitle:`${t("GOODBYE") +" "+ userEmail} 😢`,
            message: t("YOU HAVE LOGGED OUT OF YOUR ACCOUNT SUCCESSFULLY"),
            theme: 'darkblue',
            backgroundTop: 'red',
            duration:10000,
           
        });
        }
        
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        
    }
    }
  return (
    <>
    {/* <Header /> */}
      <div className='flex flex-col h-full'>
        <div className="flex-1 overflow-hidden profileImg min-h-[250px]" >
          <img src="/imgs/profileImg.png" alt="Seaview" className='min-h-[250px] w-full object-cover' loading='lazy'/>
        </div>
        <div className="flex-1 profileInfo flex flex-row h-fit w-full overflow-visible">
          <div className='flex flex-row max-md:flex-col 2xl:w-[630px] md:w-[400px] sm:w-[200px] w-[120px] bg-[url(/imgs/profileBG.png)] bg-no-repeat bg-left-bottom'>
            <div className="img lg:flex-1 max-md:h-[100px] relative">
              <div className={`2xl:w-[290px] 2xl:h-[290px] w-[161px] h-[161px] rounded-full bg-zn-green-dark absolute 2xl:-top-[145px] -top-[80px] ${lan==='ar'?'sm:right-10 right-6':'sm:left-10 left-6'}  p-1 relative z-0`}>
                <img src="/imgs/myprofile.png" alt="userImg" className='rounded-full object-fill w-full h-full' loading='lazy' />
                <span className='absolute bg-zn-white border-2 border-zn-black rounded-md px-2 -bottom-5 left-4'>@bilal-mustafa</span>
              </div>
            </div>
            
            <div className="info flex-1 flex flex-row ">
            <div className='sm:flex-auto max-sm:w-5'> </div>
            <div className=' md:w-[150px] sm:w-[100px] w-[100px]'>
              <h2 className='zn-body-1-bold text-zn-green-dark py-10 max-md:text-start'>{t("NAME")}</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10 max-md:text-start'>{t("COUNTRY")}</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10 max-md:text-start'>{t("EMAIL")}</h2>
              <h2 className='zn-body-1-bold text-zn-green-dark pb-10 max-md:text-start'>{t("PHONE")}</h2>
              </div>
            </div>
          </div>
          <div className='sm:flex-auto  md:bg-zn-black max-md:lg-zn-white max-md:pb-10 md:pl-20 sm:pl-10 pl-4 md:pr-16 relative'>
          <div className="info max-md:pt-[100px] mb-6">
              <h2 className={`zn-body-1-bold text-zn-white ${nightMood?'max-md:text-zn-white':'max-md:text-zn-black'} py-10`}>{userEmail}</h2>
              <h2 className={`zn-body-1-bold text-zn-white ${nightMood?'max-md:text-zn-white':'max-md:text-zn-black'} pb-10`}>SYRIA-DAMASCUS</h2>
              <p className={`zn-body-1-bold text-zn-white ${nightMood?'max-md:text-zn-white':'max-md:text-zn-black'} pb-10`}>{userEmail}</p>
              <h2 className={`zn-body-1-bold text-zn-white ${nightMood?'max-md:text-zn-white':'max-md:text-zn-black'} pb-10`}>+963-000-000-000</h2>
          </div>
            <button className={`md:py-2 py-3 px-9 rounded-md absolute bottom-2 ${lan==='ar'?'sm:left-8 left-0':'sm:right-8 right-0'}  border border-zn-black bg-zn-red zn-body-2-bold my-4`} onClick={()=>setLogMessage(true)}>
              {t("LOGOUT")}
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
          <button className=' flex-1 zn-body-2  text-zn-red py-2 text-center border-r-2' onClick={()=>{
            LogOutApi()
            }}>
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
