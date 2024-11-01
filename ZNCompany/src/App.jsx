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
import { AuthProvider } from './Components/Auth'
import RequerAuth from './Components/RequerAuth'




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
  // localStorage.setItem('authToken',JSON.stringify({token:null}))


  const { t } = useTranslation();
  const lan = Cookies.get('i18next')|| "en"
 useEffect(()=>{

 },[])

 useEffect(()=>{
  window.document.dir = i18n.dir()
 },[lan])
  return (

    <> 
        <BrowserRouter>
          <AuthProvider>
          <Header />
            <Routes>
            
              <Route path='/' element={<LogInPage />} />
              <Route path='/signInPage' element={<SignUpPage />}>
                <Route index path='/signInPage/signInForm' element={<SignUpForm />} />
                <Route path='/signInPage/changePasswordForm' element={<ChangePassWordForm />} />
              </Route>
              <Route path='/verifyPage' element={<VerifyPage />}/>
              <Route path='/profilePage' element={
                <RequerAuth>
                  <Profile />
                </RequerAuth>
                }/>
              <Route path='/landingPage' element={
                <RequerAuth>
                <LandingPage />
                </RequerAuth>}/>
              <Route path='/viewAllPage' element={
                <RequerAuth >
                <ViewAllPage />
                </RequerAuth>}/>
              <Route path='/productInfo' element = {
                <RequerAuth>
                  <ProductInfo />
                </RequerAuth>} />          
            </Routes>
          </AuthProvider>
        </BrowserRouter>

    </>
  )
}

export default App
