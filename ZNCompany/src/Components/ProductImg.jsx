import React from 'react'
import { useNavigate } from 'react-router'

const ProductImg = ({img,shade,type}) => {
  const navigate = useNavigate()
  return (
    <>  
      <div className='productImg 2xl:w-[330px] 2xl:h-[290px] xl:h-[264px] xl:w-[272px] lg:w-[200px] lg:h-[192px] max-lg:h-[210px] max-lg:w-[220px] max-md:h-[240px] max-md:w-[258px] max-sm:h-[280px] max-sm:w-[300px] snap-start snap-always relative'
      onClick={()=>navigate('/productInfo',{state:{img,shade}})}>
        <img src={img} alt="productImg" className='w-full h-full'/> 
        <div className="slid-info flex flex-col absolute bottom-3 left-3">
          <span className='zn-body-1-bold'>{shade}</span>
          <span className='zn-body-1-bold'>{type}</span>
        </div>     
      </div>
    </>
  )
}

export default ProductImg
