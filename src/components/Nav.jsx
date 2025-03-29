import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import BeforeAfterSlider from 'react-before-after-slider-component'
 import { Menu, X } from 'lucide-react'
import '../index.css'


const Nav = () => {
  const fbStyle ={
      fontSize:'25px',
      color:'grey',
      gap:'none',
      margin:'none'
    }
    const[isMenuOpen, setIsMenuOpen] = useState(false)
     const toggleMenu = () => {
       setIsMenuOpen(!isMenuOpen)
   }
  
  return (
  
  <div className='md:w-[100vw] w-[100vw] md:h-[95px] h-[95px] z-30 fixed top-0  flex justify-between bg-white shadow-xl md:fixed md:top-0 items-center text-center px-4 lg:px-16'>
    {/* Left Section */}
    <div className="flex items-center gap-4 lg:gap-[50px]" >
      <h1 className='text-2xl md:text-3xl pt-4' data-aos="fade-down-right">
      <Link className="pt-5 text-light-green hover:text-light-green" to="/"> Dr<span className='text-light-green'>PRO</span></Link>
   
        <p className='text-[11px] md:text-[13px] text-dark-grey'>plastic surgery</p>
      </h1>
  
      <div className="hidden lg:flex gap-20" data-aos="flip-left" >
        <Link className="pt-5 text-light-green hover:text-light-green" to="/">Home</Link>
        <Link className="pt-5 hover:text-light-green" to="/about">About</Link>
        <Link className="pt-5 hover:text-light-green" to="/blog">Blog</Link>
        <Link className="pt-5 hover:text-light-green" to="/contact">Contact</Link>
      </div>
    </div>
    
    {/* Right Section */}
    <div className="flex items-center gap-5" data-aos="flip-up" >
     <Link to="/Contact">
     <button className='hidden md:block w-[200px] lg:w-[300px] text-center h-[40px] lg:h-[47px] rounded-[20px] hover:bg-white hover:text-pinka border-b-pinka bg-pinka text-white'  >
        MAKE AN APPOINTMENT
      </button>
  </Link>
      <div className="hidden lg:flex items-center gap-5" data-aos="flip-down"  >
        <a className="myicon mt-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={fbStyle} />
        </a>
        <a className="myicon mt-2" href="https://X.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={fbStyle} />
        </a>
        <a className="myicon mt-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={fbStyle} />
        </a>
      </div>
  
      <button className="sm:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-10 w-16" /> : <Menu className="h-10 w-16" />}
        </button>
    </div>
  
    {isMenuOpen && (
        <div className="sm:hidden   flex flex-col   gap-4 py-4 bg-white border-b-[1px] fixed top-20 w-full" onClick={() => setIsMenuOpen(false)}>
      <Link className="pt-5 text-light-green hover:text-light-green" to="/">Home</Link>
        <Link className="pt-5 hover:text-light-green" to="/about">About us</Link>
        <Link className="pt-5 hover:text-light-green" to="/blog">Blog</Link>
        <Link className="pt-5 hover:text-light-green" to="/contact">Contact</Link>
        </div>
        
      )}
  </div>
  
  )}  

export default Nav
