import React, { useState } from 'react'
import { useContext } from 'react'
import { dynamicHieght, dynamicWidth} from '../Constants'
import { CurrentWindowHeight, CurrentWindowWidth } from '../App'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useLocation } from 'react-router';
const ProductInfo = () => {
  const [fillHeart,setFillHeart] = useState(false)
  const location = useLocation()
  const {img,shade} = location.state ||{}

  const windowWidth = useContext(CurrentWindowWidth)
  const windowHeight = useContext(CurrentWindowHeight)
  // console.log(windowHeight)
  // console.log(windowWidth)
  const boldh1 = dynamicWidth(windowWidth,215)
  const height = dynamicHieght(windowHeight,215)
  console.log(height)
  console.log(boldh1)
  return (
    <div className='productInfo flex flex-col pb-[150px]'> 
       <div className="overflow-hidden profileImg  2xl:h-[250px] h-[197px]" >
          <img src="/imgs/productInfobg.png" alt="Seaview" className='h-full w-full object-cover' loading='lazy'/>
        </div>
       <div className='flex-1'>
        <div className={`service-title 2xl:h-[100px] sm:h-[60px] h-[60px]  bg-zn-blue  flex flex-row justify-center items-center`} >
          <div className='lg:w-[500px] md:w-[450px] sm:w-[400px] relative'>
          
          </div>
          <h1 className='flex-1 zn-h-3 lg:pl-10 text-center text-zn-white'>PRODUCT CODE : 11173102</h1>
        </div>
        <div className='body flex sm:flex-row flex-col max-sm:items-center min-h-[300px]'>
          <div className='lg:w-[500px] md:w-[450px] sm:w-[400px] max-sm:pt-4 relative'>
          <div className='sm:absolute sm:-top-[200px] lg:left-14 left-8 flex flex-col gap-y-2 md:w-[400px] w-[350px]'>
              <div className='productImg w-full md:h-[320px] h-[300px] relative'>
                <img src={img} alt="productImg" className='w-full h-full' loading='lazy'/> 
                <div className="slid-info flex flex-col absolute bottom-3 right-3">
                  <span className='zn-body-1-bold bg-zn-green-light p-2 rounded-full cursor-pointer'
                  onClick={()=>setFillHeart(prev=>!prev)}>
                    {fillHeart?<FaHeart className='text-zn-green-dark text-2xl'/>:
                    <FaRegHeart  className='text-zn-blue text-2xl'/>}
                    </span>
                </div>     
              </div>
              <div className='flex flex-row gap-x-2 w-full'>
              <div className='productImg flex-1 h-[130px] relative'>
                <img src='/imgs/floor-1.png' alt="productImg" className='w-full h-full' loading='lazy'/>      
              </div>
              <div className='productImg flex-1 h-[130px] relative'>
                <img src='/imgs/productInfoImg-2.png' alt="productImg" className='w-full h-full' loading='lazy'/>      
              </div>
              <div className='productImg flex-1 h-[130px] relative'>
                <img src='/imgs/productInfoImg-3.png' alt="productImg" className='w-full h-full' loading='lazy'/>      
              </div>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col md:items-center'>
            <h2 className="bodyTitle zn-body-0-bold py-6 lg:w-[70%] w-[100%] pr-1 max-sm:pl-6">Kronostep Z209 SPC flooring, 4 mm, light shade, butterscotch oak, traffic class AC4, 1280 x 192 mm
            </h2>
            <div className="details flex flex-col lg:ml-2 md:px-8 px-5 gap-y-6">
              <div className='flex flex-row gap-x-3'>
                <span className='w-5 h-5'>
                  <img src="/imgs/productInfoIcon-1.svg" alt="icon" className='w-full h-full'/>
                </span>
                <p className='zn-body-1'>Product type: SPC flooring</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <span className='w-5 h-5'><img src="/imgs/productInfoIcon-2.svg" alt="icon" className='w-full h-full'/></span>
                <p className='zn-body-1'>DECOR : BUTTERSCOTCH OAK</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <span className='w-5 h-5'><img src="/imgs/productInfoIcon-3.svg" alt="icon" className='w-full h-full'/></span>
                <p className='zn-body-1'>SHADE : {shade}</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <span className='w-5 h-5'><img src="/imgs/productInfoIcon-4.svg" alt="icon" className='w-full h-full'/></span>
                <p className='zn-body-1'>BRAND : KRONOSPAN</p>
              </div>
        
            </div>
          </div>

        </div>
        <div className="product-details sm:ml-[95px] ml-8 mt-10 max-sm:mt-8 2xl:w-[950px] xl:w-[850px]  md:w-[700px] sm:w-[500px] w-[350px]">
          <div className='phrass pb-6'>
                <h2 className='zn-body-0-bold py-4'>PRODUCT DESCRIPTION</h2>
                <p className='zn-body-1'>
                  Kronostep Z209 SPC flooring  is a practical and decorative flooring alternative. The model integrates easily into any type of arrangement and offers an elegant and welcoming appearance.
                  Being made of quality  SPC , with traffic class 32  and AC4 wear  , it is a durable and resistant choice, both for homes and commercial spaces with medium traffic.
                  The tiles are  4 mm thick  and  1280 x 192 mm in size , and their joining creates a durable floor that can support heavy furniture, without being damaged or discolored.
                  The package contains 8 boards with  butterscotch oak  decoration , in a light shade, covering an area  of ​​1.96 square meters
                </p>
          </div>

          <div className=" ">
              <h2 className="title zn-body-1-bold pb-3 ">ADVANTAGES:</h2>
                <ul className='list-disc pl-5 zn-body-1'>
                  <li className='pb-1 zn-body-1'><a href="">
                  resistance to long-term use</a></li>
                  <li className='pb-1'><a href="">does not require scraping or varnishing</a></li>
                  <li className='pb-1'><a href="">easy to maintain</a></li>
                  <li className='pb-1'><a href="">fast assembly</a></li>
               
              </ul>
           </div>
        </div>
      

        </div>
    </div>
  )
}

export default ProductInfo
