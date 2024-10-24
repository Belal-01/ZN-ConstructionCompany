import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

const ProductImg = ({img,shade,type}) => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  return (
    <>  
      <div className='productImg 2xl:w-[330px] 2xl:h-[290px] xl:h-[264px] xl:w-[272px] lg:w-[200px] lg:h-[192px] max-lg:h-[210px] max-lg:w-[220px] max-md:h-[240px] max-md:w-[258px] max-sm:h-[270px] max-sm:w-[275px] snap-start snap-always relative'
      onClick={()=>navigate('/productInfo',{state:{img,shade}})}>
        <img src={img} alt="productImg" className='w-full h-full' loading='lazy'/> 
        <div className="slid-info flex flex-col absolute bottom-3 left-3">
          <span className='zn-body-1-bold'>{t(shade)}</span>
          <span className='zn-body-1-bold'>{t(type)}</span>
        </div>     
      </div>
    </>
  )
}

export default ProductImg
