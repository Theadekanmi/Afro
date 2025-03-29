// import { div } from "framer-motion/m";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaInbox } from "react-icons/fa";

export const Contact = () => {
  const fbStyle ={
    fontSize:'25px',
    color:'grey',
    gap:'none',
    margin:'none'
  }
  return (
    <div>
      <div className="md:w-[100vw] w-full md:h-[600px] h-[500px] md:bg-center bg-center bg-no-repeat bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1739878070/contact.jpg_1_coi1gv.webp)]">
        <h3 className="md:text-7xl text-5xl pl-7 md:pl-[100px]  text-darkin pt-[300px]" data-aos="zoom-in-up" >Contact</h3>
        <p className="text-dark-grey md:pl-[100px] pl-7" data-aos="zoom-in">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="md:w-[100vw] w-full md:flex flex-row justify-center mt-[150px]  ">

        
      <div className="md:w-[600px] w-[360px] m-auto md:pl-[0px] md:mt-0 mt-48 pl-0   md:h-[500px] shadow-2xl">
          <div className=" md:w-[350px] h-[80px] bg-light-green text-white text-center items-center text-3xl ">
            {" "}
            <h6 className="p-[20px]">Make an Appointment</h6>
          </div>
          <form className="md:w-full  flex mt-[50px] text-start md:m-[50px] m-auto gap-5 ">
            <label className="md:flex md:flex-col flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your Name"
                className=" h-[65px] md:w-[250px] md:m-0 ml-5 w-[150px] md:mt-[10px] px-4 border-2 rounded border-gray-light hover:border-light-green"
              />
              <input
                type="text"
                placeholder="Your phone"
                className="h-[65px] md:w-[250px] w-[150px] md:m-0 ml-5  md:mt-[10px] px-4 border-2 rounded border-gray-light hover:border-light-green"
              />
              <input
                type="text"
                placeholder="Doctor"
                className="   h-[65px] md:w-[250px] w-[150px] md:m-0 ml-5  md:mt-[10px] px-4 border-2 rounded border-gray-light hover:border-light-green" />
            </label>
            <label className="md:flex md:flex-col flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your E-mail"
                className=" h-[65px] md:w-[250px] w-[150px] md:mt-[10px] px-4 border-2 rounded border-gray-light hover:border-light-green"
              />
              <input
                type="text"
                placeholder="Speciality"
                className="h-[65px] md:w-[250px] w-[150px] md:mt-[10px] px-4 border-2 rounded border-gray-light hover:border-light-green"
              />
              <input
                type="text"
                placeholder="Date"
                className="   h-[65px] md:w-[250px] w-[150px] md:mt-[10px] px-4 border-2 rounded border-gray-light hover:border-light-green"
              />
            </label>
          </form>
          
          <button className=" md:ml-[50px] mb-2 md:w-[510px] w-[350px] md:mt-0 mt-10 h-[45px] text-white md:mr-5 rounded-[100px] border-pinka border-[2px] hover:text-pinka hover:bg-white hover:b-[20px]-b-pinka bg-pinka">
            MAKE AN APPOINTMENT
          </button>
        </div>
      


        <div className="md:w-[500px] w-full h-[500px] md:mt-0 mt-20 md:ml-0 ml- md:m-auto items-center justify-center ">
          <h2 className=" text-3xl md:pl-0 pl-4   text-darkin ">Get in touch with us</h2>
          <p className="text-dark-grey  md:pl-0 pl-4 pt-6"> 
            Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
            nisl. Duis feug iat bibendum orci, non elementum urna. Cras sit amet
            sapien aliquam.</p>
        
        <div className="md:w-[500px] w-[360px] h-[47px] md:ml-0 ml-4 mt-10 rounded-[100px] flex "><div className="bg-pinka pt-2 text-white rounded-l-[30px] w-[150px] text-center">Direct Line</div> <div className="md:text-3xl text-2xl text-white w-[90%] rounded-r-[30px] items-center pt-1 text-center bg-light-green">+533457953324</div>
       
        </div>
        <div className="md:w-[50%] w-[90%]  mt-[50px]">   <span className="flex gap-10 md:pl-0 pl-5 text-[20px] text-light-green">Address <p className="text-dark-grey text-[15px]">1481 Creekside Lane Avila Beach, CA 931</p></span>
        <span className="flex md:pl-0 pl-5  gap-10 text-[20px] pt-6 text-light-green">Phone<p className="text-dark-grey text-[15px]">+53 345 7953 32453</p></span>
        <span className="flex md:pl-0 pl-5  gap-10 text-[20px] pt-6 text-light-green">E-mail<p className="text-dark-grey text-[15px]">yourmail@gmail.com</p></span>
        </div>


        <div className="hidden lg:flex items-center gap-10 mt-[30px]">
        <a className="myicon mt-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={fbStyle} />
        </a>
        <a className="myicon mt-2" href="https://X.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={fbStyle} />
        </a>
        <a className="myicon mt-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={fbStyle} />
        </a>
        <a className="myicon mt-2" href="https://inbox.com" target="_blank" rel="noopener noreferrer">
          <FaInbox style={fbStyle} />
        </a>
      </div>
        </div>
  
      </div>
    

      <div className="w-[100%] sticky items-center text-center justify-center h-[300px] md:mt-20 mt-10 bg-fixed bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1736765244/newsletter_qybmcg.jpg)]">
      <h1 className="md:text-4xl text-3xl text-center text-white pt-10">Subscribe to our newsletter</h1>
      <form action="" className="flex justify-center items-center ">
        <input type="text" placeholder="Your E-mail" className="md:w-[600px] w-full flex text-start p-[20px] md:ml-0 ml-5 h-[40px]  border-white outline-none border-[2px] mt-10 bg-transparent "/>
        <button className="md:w-[180px] w-[300px] text-center  mt-10 -translate-x-10 h-[47px] rounded-[20px] border-b-pinka bg-pinka text-white"> SUBSCRIBE</button>
        </form>
        </div>
        
         <div className="md:w-[100vw] md:h-[500px] bg-darkin md:flex flex-row items-center md:gap-5 gap-0 justify-center " data-aos="zoom-in">
          <div className="w-[300px] h-[400px] md:ml-0 ml-5  ">  <h1 className="text-3xl text-white md:pt-10 pt-20 ">Dr<span className="text-light-green">PRO</span> <h5 className="text-[13px] text-dark-grey">plastic surgery</h5></h1>
          <p className="text-dark-grey md:pt-11 pt-5">Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci eleme ntum eleifend tempor, nunc libero porttitor tellus.</p></div>
          <div className="w-[200px] h-[400px] "><h3 className="text-white md:pt-14 md:pl-0 pl-5 pt-0">Contact Info</h3> <p className="md:pt-20 pt-5 md:pl-0 pl-5 text-dark-grey">+53 345 7953 32453
yourmail@gmail.com
contact@gmail.com</p></div>
          <div className="w-[200px] h-[400px] md:pl-0 pl-5  "><h3 className="text-white md:pt-14 pt-0 md:pl-0 ">Our Locations</h3> 
          <p className=" pt-20 text-light-green">Miami</p>
          <p className=" pt-5 text-dark-grey">45 Creekside Av FL 931</p>
          <p className=" pt-5 text-light-green">Los Angeles</p>
          <p className=" pt-5 text-dark-grey">1481 Creekside Lane Avila Beach, CA 931</p>
          </div>
          <div className="w-[350px] h-[300px] md:ml-0 ml-5  border-2 border-dark-grey"><h3 className="text-white pt-7 text-center">Opening Hours</h3>
          <span className="flex justify-around text-dark-grey pt-16">Monday: <p>8:00am - 9:00pm</p></span> 
          <span className="flex justify-around text-dark-grey pt-3">Thuesday:<p>8:00am - 9:00pm</p></span>
          <span className="flex justify-around text-dark-grey pt-3">Wednesday:<p>8:00am - 9:00pm</p></span>
          <span className="flex justify-around text-dark-grey pt-3">Thursday:<p>8:00am - 9:00pm</p></span>
          <span className="flex justify-around text-dark-grey pt-3">Friday:<p>8:00am - 7:00pm</p></span>
          </div>
             
        </div>     
    </div>
  );
};
