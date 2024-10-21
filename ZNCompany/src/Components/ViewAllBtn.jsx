import React from 'react'
import { FaRegFolderOpen } from "react-icons/fa";

const ViewAllBtn = ({children ,color}) => {
  let textcolor=''
  if(color==='bg-zn-blue')
    textcolor = 'text-zn-white'
  else{
    textcolor='text-zn-black'
  }
 

  return (
    <button className={` flex flex-row gap-x-4 items-center md:py-3 py-3 px-6 rounded-md border border-zn-black ${color} zn-body-2-bold  ${textcolor}`}>
    {children}
    <span className='text-xl'> <FaRegFolderOpen /></span>
  </button>
  )
}

export default ViewAllBtn
