import React,{useState} from 'react'
import Navbar from '../Sections/Navbar'
import Button from '../Components/Button';
import { useContext } from 'react'
import { dynamicHieght, dynamicWidth } from '../Constants'
import { CurrentWindowHeight, CurrentWindowWidth } from '../App'
const VerifyPage = () => {
const [erorrModle,setErorrModle] = useState(false);
const [successModle,setSuccessModle] = useState(false)
const windowWidth = useContext(CurrentWindowWidth)
const windowHeight = useContext(CurrentWindowHeight)
// console.log(windowHeight)
// console.log(windowWidth)
const boldh1 = dynamicWidth(windowWidth,280)
const height = dynamicHieght(windowHeight,260)
console.log(boldh1)
// console.log(height)
  return (
    <>
     <Navbar />
    <div className='w-full h-full bg-zn-white flex flex-col py-[50px] lg items-center'>
      <div className=''>
        <img src="/imgs/verficationImg.png" alt="EmailImg" className='2xl:w-[280px] 2xl:h-[260px] w-[155px] h-[155px]' />
      </div>
      <h2 className='zn-body-0-bold text-center 2xl:py-10 py-5'>PLEASE VERIFY YOUR ACCOUNT</h2>
      <p className='zn-body-2 text-center 2xl:w-[30%] lg:w-[40%] md:w-[50%] w-[60%] text-wrap ' >
         ENTER THE 6 DIGIT CODE (CONTAINS LETTERS AND NUMBERS) THAT WE SENT TO YOUR EMAIL ADDRESS TO VERIFY YOUR NEW PASSWORD
   
      </p>
      <div className="verification-code flex flex-row gap-x-4 py-5">
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green'/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green'/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green'/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green'/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green'/>
        <input type="number" maxLength={1} name='code' min={0} max={9} 
        className='code-input w-6 h-8 rounded-md bg-zn-gray-box text-center focus:border-zn-green'/>
      </div>
      <span className='zn-body-2 '>VALID FOR 3 MINUTES</span>
      <a href="/" className='zn-body-3 text-zn-blue-light py-4'>RESEND CODE</a>

      <div className="verify-btn">
        <Button>VERIFY AND CONTINUE</Button>
      </div>
    </div>
    {erorrModle&&<div className='modle'>
      <div className="overly"></div>
      <div className="modle-content">
        <h1 className='zn-h-4-semiBold text-center py-5'>ERROR</h1>
        <div className="modle-body px-12 text-zn-gray-3">
        <p className='zn-body-2 text-center'>PLEASE WAIT A FEW MINUTES</p>
        <p className='zn-body-2 text-center'>BEFORE YOU TRY AGAIN</p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 my-4'/>
        <div className="modle-button flex flex-row justify-center text-zn-red">
          <button className='zn-body-2 mb-2 '>
            DISMISS
          </button>
        </div>
        
      </div>
      </div>}
      {successModle&&<div className='modle'>
      <div className="overly"></div>
      <div className="modle-content">
        <h1 className='zn-h-4-semiBold text-center py-5'>SIGNED UP</h1>
        <div className="modle-body px-12 text-zn-gray-3">
        <p className='zn-body-2 text-center'>YOUR ACCOUNT SUCCESSFULLY VERIFIED</p>
        </div>
        <hr className=' bg-zn-gray-3 opacity-50 h-0.5 my-4'/>
        <div className="modle-button flex flex-row justify-center text-zn-green">
          <button className='zn-body-2 mb-2 '>
            CONTINUE
          </button>
        </div>
        
      </div>
      </div>}
    </>
  )
}

export default VerifyPage
