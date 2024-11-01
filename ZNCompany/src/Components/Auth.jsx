import React, { createContext, useContext, useState } from 'react'
import { useStore } from '../store'

const authProvider = createContext(null)

export const AuthProvider = ({children}) => {

 
  const userToken = useStore((store)=>store.userToken)
  const setUserToken = useStore((store)=>store.setUserToken)

  const LoadTokenFromStorage = ()=>{
   console.log(userToken)
  }
  LoadTokenFromStorage()

  // const Token = JSON.parse(localStorage.getItem('authToken'))


  const logIn = (logInToken)=>{
    setUserToken(logInToken)
  }
  const signUp = (signUpToken)=>{
    setUserToken(signUpToken)
  }
  return (
    <div className='h-full'>
      <authProvider.Provider  value={{userToken,logIn,signUp}} >
        {children}
      </authProvider.Provider>
      
    </div>
  )
}

export const useAuth = ()=> useContext(authProvider)


