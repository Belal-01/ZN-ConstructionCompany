import React from 'react'
import { exteriorSlides, interiorSlides } from '../Constants'
import ProductImg from '../Components/ProductImg'
import ViewAllBtn from '../Components/ViewAllBtn'
import { useNavigate } from 'react-router'

const BusinessExhibtion = () => {
  const navigate = useNavigate()

const handlePassingData = (title ,slides)=>{
  navigate('/viewAllPage',{state:{title,slides}})
}
  return (
    <>
    <div>
        <div className="service-title 2xl:h-[178px] sm:h-[110px] h-[80px] bg-zn-blue-light flex flex-col justify-center">
          <h1 className='zn-h-3 pl-10'>BUSINESS EXHIBTION</h1>
        </div>

        <div className="flex flex-row flex-wrap justify-between max-sm:justify-center py-8 gap-x-4 gap-y-8 px-[40px]">
          <div className=' left-section flex-auto max-lg:px-6 md:px-4 pb-5 bg-zn-gray-box max-sm:max-w-[360px]'>
            <div className="title py-4  flex flex-row flex-wrap gap-x-4 items-center justify-between ">
              <h2 className='zn-body-1-bold '>INTERIOR</h2>
              <div className="viewAll ">
                <span onClick={()=>handlePassingData('INTERIOR',interiorSlides)}>
                <ViewAllBtn color={'blue'}>View All</ViewAllBtn>
                </span>
              </div>
            </div>
            <div className="gallery grid justify-items-center max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-2 max-lg:grid-cols-3  max-2xl:gap-x-4 gap-x-7 gap-y-8">
            {interiorSlides.map((slide,i)=>(<ProductImg img={slide.img} shade={''} type={''} key={i}/>))} 
            </div>
          </div>
          <div className='right-section flex-auto max-lg:px-6 px-4 pb-5 bg-zn-gray-box max-sm:max-w-[360px]'>
          <div className="title py-4  flex flex-row gap-x-4 items-center justify-between">
              <h2 className='zn-body-1-bold '>EXTERIOR</h2>
              <div className="viewAll">
              <span onClick={()=>handlePassingData('INTERIOR',interiorSlides)}>
                <ViewAllBtn color={'blue'}>View All</ViewAllBtn>
              </span>

              </div>
            </div>
              <div className="gallery grid justify-items-center max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1 grid-cols-2 max-2xl:gap-x-4 gap-x-7 gap-y-8">
              {exteriorSlides.map((slide,i)=>(<ProductImg img={slide.img} shade={''} type={''} key={i}/>))} 
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default BusinessExhibtion
