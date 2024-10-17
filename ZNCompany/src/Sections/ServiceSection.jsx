import React from 'react'
import ProductImg from '../Components/ProductImg'
import { floorSlides } from '../Constants'

const ServiceSection = ({title ,slides}) => {
  return (
    <>
      <div className=' 2xl:pt-[60px] pt-[40px] '>
        <div className="service-title flex flex-row gap-x-4 items-center ">
          <div className='w-10 h-6 bg-zn-blue-dark'></div>
          <p className='zn-h-3'>{title}</p>
        </div>

        <div className="overflow-x-auto imgSlider">
         <div className="ourProuducts 2xl:px-[65px] 2xl:py-[45px] px-10 py-5 flex flex-row snap-x snap-mandatory gap-x-10 w-fit ">
          {slides.map((floor,i)=>(<ProductImg img={floor.img} shade={floor.shade} type={floor.type} key={i}/>))} 
         </div>
         </div>

        </div>
    
    </>
  )
}

export default ServiceSection
