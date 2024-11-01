import React from 'react'
import { useAuth } from './Auth'
import { Navigate, useLocation } from 'react-router'

const RequerAuth = ({children}) => {
  const auth = useAuth()
  const location = useLocation()
  if(!auth.userToken)
    return <Navigate to={'/'} state={{path:location.pathname}}/>
  else
    return children
}

export default RequerAuth
