import './App.css'

import Register from './Pages/LogInPage'
import { useState ,useEffect, createContext } from 'react'
import { dynamicHieght,dynamicWidth } from './assets/Constants'
import Navbar from './Sections/Navbar'
import SignUpPage from './Pages/SignUpPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from './Pages/LogInPage'
import SignUpForm from './Sections/SignUpForm'
import ChangePassWordForm from './Sections/ChangePassWordForm'
import VerifyPage from './Pages/VerifyPage'
import Profile from './Pages/Profile'
export const  CurrentWindowWidth = createContext()
export const CurrentWindowHeight = createContext()


function App() {
  const [windowWidth,setWindowWidth] = useState(window.innerWidth)
  const [windowHeight,setWindowHeight] = useState(window.innerHeight)

 useEffect(()=>{
window.addEventListener('resize',()=>{
  setWindowWidth(window.innerWidth)
  setWindowHeight(window.innerHeight)
})
 },[])
  return (

    <>
    <CurrentWindowHeight.Provider value={windowHeight}>
      <CurrentWindowWidth.Provider value={windowWidth}>
        <BrowserRouter>
          <Routes>
          
            <Route path='/' element={<Profile />} />
            {/* <Route path='/signInPage' element={<SignUpPage />}>
              <Route index path='/signInPage/signInForm' element={<SignUpForm />} />
              <Route path='/signInPage/changePasswordForm' element={<ChangePassWordForm />} />
            </Route>
            <Route path='/verifyPage' element={<VerifyPage />}/> */}

          
          </Routes>
        
        </BrowserRouter>
        {/* <Navbar />
        <SignUpPage /> */}
      </CurrentWindowWidth.Provider>
    </CurrentWindowHeight.Provider>
    </>
  )
}

export default App
