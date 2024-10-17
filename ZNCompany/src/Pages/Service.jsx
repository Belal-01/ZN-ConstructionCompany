import React from 'react'
import ServiceSection from '../Sections/ServiceSection'
import { faucetsSlides, floorSlides, kitchenSlides, sinksSlides, wallsSlides } from '../Constants'

const Service = () => {
  return (
    <>
      <div className='service'>
        <div className="service-title 2xl:h-[178px] h-[110px] bg-zn-blue-light flex flex-col justify-center">
          <h1 className='zn-h-3 pl-10'>INTERIOR CLADDING</h1>
        </div>
        <ServiceSection title={'FLOORS'} slides={floorSlides}/> 
        <ServiceSection title ={'WALLS'} slides={wallsSlides}/>
        <ServiceSection title ={'SINKS'} slides={sinksSlides}/>
        <ServiceSection title ={'FAUCETS'} slides={faucetsSlides}/>
        <ServiceSection title ={'KITCHENS'} slides={kitchenSlides}/>



        {/* <ServiceSection title ={'SINKS'} />
        <ServiceSection title ={'FAUCETS'} />
        <ServiceSection title ={'KITCHENS'} /> */}


      </div>
    </>
  )
}

export default Service
