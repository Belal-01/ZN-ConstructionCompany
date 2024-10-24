import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaRegFolderOpen } from "react-icons/fa";

const ViewAllBtn = ({children ,color}) => {
  let textcolor=''
  if(color==='bg-zn-blue')
    textcolor = 'text-zn-white'
  else{
    textcolor='text-zn-black'
  }
 
 const {t} = useTranslation()
  return (
    <button className={` flex flex-row gap-x-4 items-center md:py-3 py-3 px-6 rounded-md border border-zn-black ${color} zn-body-2-bold  ${textcolor}`}>
    {t(children)}
    <span className='text-xl'> <FaRegFolderOpen /></span>
  </button>
  )
}

export default ViewAllBtn
