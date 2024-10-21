import React from 'react'
import ServiceSection from '../Sections/ServiceSection'
import { faucetsSlides, floorSlides, interiorCladdingSections, kitchenSlides, sinksSlides, wallsSlides } from '../Constants'
import { useStore } from '../store'

const Service = ({title,sections,color}) => {
  const nightMood = useStore((store)=>store.darkMood)

  let bgcolor=''
  if(color==='blue'&&nightMood)
    bgcolor = 'bg-zn-blue'
  else if(color==='blue'&&!nightMood)
    bgcolor = 'bg-zn-blue-light'
  else if(color==='green'&&nightMood)
    bgcolor = 'bg-zn-green-dark'
  else if(color==='green'&&!nightMood)
    bgcolor = 'bg-zn-green-light'




  return (
    <>
      <div className='service pb-8'>
        <div className={`service-title 2xl:h-[178px] sm:h-[110px] h-[80px] ${bgcolor} ${nightMood&&'text-zn-white'} flex flex-col justify-center` } id='title'>
          <h1 className='zn-h-3 pl-10'>{title}</h1>
        </div>
        {sections.map((service,i)=>(<ServiceSection title={service.title} slides={service.slides} color={color} key={i}/> ))}
      </div>
    </>
  )
}

export default Service
