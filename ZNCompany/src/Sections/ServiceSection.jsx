import React from 'react'
import ProductImg from '../Components/ProductImg'
import { floorSlides } from '../Constants'
import ViewAllBtn from '../Components/ViewAllBtn'
import { useNavigate } from 'react-router'

const ServiceSection = ({title ,slides,color}) => {
  let bgcolor=''
  if(color==='blue')
    bgcolor = 'bg-zn-blue'
  else{
    bgcolor='bg-zn-green'
  }
const navigate = useNavigate()
const dataToPass = {title,slides};
const handlePassingData = ()=>{
  navigate('/viewAllPage',{state:{title,slides}})
}
  return (
    <>
      <div className=' 2xl:pt-[60px] pt-[40px]'>
        <div className="service-title flex flex-row gap-x-4 items-center justify-between ">
          <div className='flex flex-row gap-x-4 items-center'>
            <div className={`w-10 h-6 ${bgcolor}`}></div>
            <p className='zn-h-3'>{title}</p>
          </div>
          <div className="viewAll pr-6">
            <span onClick={()=>handlePassingData()}>
            <ViewAllBtn color={color}>View All</ViewAllBtn>
            </span>
          </div>
        </div>
        <div className="overflow-x-auto imgSlider">
          <div className="ourProuducts 2xl:px-[65px] 2xl:py-[45px] px-10 py-5 flex flex-row snap-x snap-mandatory gap-x-10 w-fit  ">
          {slides.map((floor,i)=>(<ProductImg img={floor.img} shade={floor.shade} type={floor.type} key={i}/>))} 
          {slides.map((floor,i)=>(<ProductImg img={floor.img} shade={floor.shade} type={floor.type} key={i}/>))} 

          </div>
        </div>

      </div>
    
    </>
  )
}

export default ServiceSection
