import React from 'react'

const ProductImg = ({img,shade,type}) => {
  return (
    <>  
      <div className='productImg 2xl:w-[460px] 2xl:h-[430px] w-[260px] h-[250px] snap-start snap-always relative'>
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
