import React from 'react'
import Service from './Service'
import { useContext } from 'react'
import { dynamicHieght, dynamicWidth } from '../Constants'
import { CurrentWindowHeight, CurrentWindowWidth } from '../App'
const LandingPage = () => {
  const windowWidth = useContext(CurrentWindowWidth)
  const windowHeight = useContext(CurrentWindowHeight)
  // console.log(windowHeight)
  // console.log(windowWidth)
  const boldh1 = dynamicWidth(windowWidth,73)
  const height = dynamicHieght(windowHeight,49)
   console.log(boldh1)
    console.log(height)
  return (
    <>
      <div className='landingPage'>
        <div className="landingImg flex flex-row items-center justify-center">
          <img src="/imgs/LandingImg.png" alt="LandingImg"  className='brightness-50'/>
          <div className="img-text absolute">
            <p className='zn-h-3-bold text-white text-center'>
              TRANSROM YOUR VISION INTO REALITY WITH OUR <br />EXPERT CONSTRUCTION AND LANDING SERVICES <br /> WHERE QUALITY MEETS CREATIVITY .

            </p>
          </div>
        </div>  
        <Service />     
      </div>
    </>
  )
}

export default LandingPage
