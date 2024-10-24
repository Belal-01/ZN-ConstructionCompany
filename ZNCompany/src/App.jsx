import './App.css'

import Register from './Pages/LogInPage'
import { useState ,useEffect, createContext } from 'react'
import { dynamicHieght,dynamicWidth } from './Constants'
import Navbar from './Sections/Navbar'
import SignUpPage from './Pages/SignUpPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from './Pages/LogInPage'
import SignUpForm from './Sections/SignUpForm'
import ChangePassWordForm from './Sections/ChangePassWordForm'
import VerifyPage from './Pages/VerifyPage'
import Profile from './Pages/Profile'
import LandingPage from './Pages/LandingPage'
import Header from './Sections/Header'
import ViewAllPage from './Pages/ViewAllPage'
import ProductInfo from './Pages/ProductInfo'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Cookies from 'js-cookie'

export const  CurrentWindowWidth = createContext()
export const CurrentWindowHeight = createContext()


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection :{
      order: [
        'cookie', 
        'htmlTag',
         'localStorage',
        'sessionStorage',
          'navigator',
         'querystring',
          'path',
           'subdomain'
          ],
      caches:['cookie']
    },
    backend:{
        loadPath: '/locale/{{lng}}/translation.json',
    }

  });


function App() {
  const [windowWidth,setWindowWidth] = useState(window.innerWidth)
  const [windowHeight,setWindowHeight] = useState(window.innerHeight)
  const { t } = useTranslation();
  const lan = Cookies.get('i18next')|| "en"
 useEffect(()=>{
window.addEventListener('resize',()=>{
  setWindowWidth(window.innerWidth)
  setWindowHeight(window.innerHeight)
})
 },[])

 useEffect(()=>{
  window.document.dir = i18n.dir()
 },[lan])
  return (

    <>

      {/* <h2>{t('HOME')}</h2>
      <button onClick={()=>{i18n.changeLanguage('ar')}}>ara</button>
      <button onClick={()=>{i18n.changeLanguage('en')}}>eng</button> */}
    <CurrentWindowHeight.Provider value={windowHeight}>
      <CurrentWindowWidth.Provider value={windowWidth}>
      
        <BrowserRouter>
        <Header />
          <Routes>
          
            <Route path='/' element={<LogInPage />} />
            <Route path='/signInPage' element={<SignUpPage />}>
              <Route index path='/signInPage/signInForm' element={<SignUpForm />} />
              <Route path='/signInPage/changePasswordForm' element={<ChangePassWordForm />} />
            </Route>
            <Route path='/verifyPage' element={<VerifyPage />}/>
            <Route path='/profilePage' element={<Profile />}/>
            <Route path='/landingPage' element={<LandingPage />}/>
            <Route path='/viewAllPage' element={<ViewAllPage />}/>
            <Route path='/productInfo' element = {<ProductInfo />} />          
          </Routes>
        
        </BrowserRouter>

      </CurrentWindowWidth.Provider>
    </CurrentWindowHeight.Provider>
    </>
  )
}

export default App
