import React from 'react'
import ProductImg from '../Components/ProductImg'
import { useLocation } from 'react-router'
import Header from '../Sections/Header'
import { useStore } from '../store'

const ViewAllPage = () => {
  const nightMood = useStore((store)=>store.darkMood)
  const location = useLocation()
  const {title,slides} = location.state ||{}
  console.log(title)
  console.log(slides)
  return (
    <>
    {/* <Header/> */}
    <div className='viewAll pt-4'>
       <div className={`service-title 2xl:h-[178px] sm:h-[90px] h-[80px] ${nightMood?'bg-zn-blue':'bg-zn-blue-light'} ${nightMood&&'text-zn-white'} flex flex-col justify-center`} id='title'>
          <h1 className='zn-h-3 pl-10'>{title}</h1>
        </div>

        <div className="products-Gallary flex flex-row max-sm:justify-center flex-wrap gap-10 py-10 px-10">
        {slides.map((floor,i)=>(<ProductImg img={floor.img} shade={floor.shade} type={floor.type} key={i}/>))}  
        </div>

    </div>
    </>
  )
}

export default ViewAllPage
