import React from 'react'
import ServiceSection from '../Sections/ServiceSection'
import { faucetsSlides, floorSlides, interiorCladdingSections, kitchenSlides, sinksSlides, wallsSlides } from '../Constants'

const Service = ({title,sections,color}) => {
  let bgcolor=''
  if(color==='blue')
    bgcolor = 'bg-zn-blue-light'
  else
    bgcolor = 'bg-zn-green-light'

  return (
    <>
      <div className='service pb-8'>
        <div className={`service-title 2xl:h-[178px] sm:h-[110px] h-[80px]  ${bgcolor}  flex flex-col justify-center`} id='title'>
          <h1 className='zn-h-3 pl-10'>{title}</h1>
        </div>
        {sections.map((service,i)=>(<ServiceSection title={service.title} slides={service.slides} color={color} key={i}/> ))}
      </div>
    </>
  )
}

export default Service
