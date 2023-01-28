import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from "react-icons/ai"
import {GrClose} from "react-icons/gr"

function Header() {
 const [open, setOpen] = useState(false) 
 
  return (
    
    <>
    <div className='flex items-center justify-between mt-2 px-2'>
{/* logo */}
    <div>
      <Link to="/" className='text-3xl font-bold text-gray-900 ' >Daadaa</Link>
    </div>
    {/* large screen */}
    <div className='hidden md:flex items-center text-gray-600  justify-center gap-6 font-medium'>
         <Link to="/" >Home</Link>
         <Link to="/" >About</Link>
         <Link to="/" >Projects</Link>
         <Link className=' text-white py-1 px-3 hover:-translate-y-1 duration-100  rounded-[8px] bg-blue-500' to="/" >Contact</Link>
    </div>
    {/* mobile screen */}
    <div className={`md:hidden fixed top-0 z-50  bg-white w-60 h-screen 
    shadow-2xl ${open ? "right-0" : "right-[-100%]" } flex flex-col space-y-10 font-medium text-gray-600 pt-20 p-7  duration-100`}>
    <Link to="/" >Home</Link>
         <Link to="/" >About</Link>
         <Link to="/" >Projects</Link>
         <Link className=' text-white py-1 px-3 hover:-translate-y-1 duration-100  rounded-[8px] bg-blue-500 w-24' to="/" >Contact</Link>
    </div>
    {/* menu button */}
    <div onClick={() => setOpen(!open)} className='text-2xl md:hidden z-50 '>
     
      {
        open ? (
          <GrClose />
        ) : (
          <AiOutlineMenu  className='h-7 cursor-pointer '/>
        )
      }
      
    </div>
    </div>
  
  
  </>
)
}

export default Header