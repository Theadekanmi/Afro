import React from "react";

import CountUp from 'react-countup';

import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="md:w-[100vw] flex-col md:flex-row w-full ">
      <div className=" w-full  flex flex-col justify-center items-center  sm:flex-row ">
        <div className=" md:-[50%] w-[100vw] md:h-[800px] h-[600px] md:pl-[0px]  pl-0 bg-cover bg-center bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1736765072/home_slider_t2pa6c.jpg)]">
          <div className="md:w-[40%]  h-[700px] md:ml-[50px] ml-5 ">
            <h2 className=" md:text-4xl md:mt-[300px] text-light-green  text-[24px]  mt-[150px]  "  data-aos="zoom-in-up">
              #1 Plastic Surgery Clinic
            </h2>
            <h1 className="md:text-6xl text-dark text-4xl " data-aos="flip-left" >Love the new you</h1>{" "}
            <p className=" md:pt-7 pt-7 text-dark-grey" data-aos="fade-up" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
            <span className="md:gap-[30px] gap[10px] flex  mt-[50px]" data-aos="flip-left">
              <button className="md:w-[170px] md:hover:text-pinka w-[200px] h-[50px] md:text-white text-white hover:text-pinka mr-5 rounded-[100px] border-pinka border-2 hover:bg-white md:text-[16px] text-[] bg-pinka">
                READ MORE
              </button> 
              <Link to="/Contact"> <button className="md:w-[250px]  md:h-[50px] h-[50px] md:text-light-green md:text-[16px] text-[14px] text-light-green mr-5 rounded-[100px] md:border border-green-400  border-light-green border-2 border-green-20   md:hover:bg-light-green  hover:bg-light-green hover:text-white">
                MAKE AN APPOINTMENT
              </button></Link>
            </span>
   
          </div>
        </div>
      </div>

 
      <div className=" md:w-[100vw]  w-full md:flex flex-row md:ml-0 ml-0 justify-center items-center mt-[100px]">
        <div className="md:w-[600px] md:m-auto w-full h-[600px]">
          <h3 className="text-dark-light-grey md:pl-0 pl-5 text-1">This is Dr Pro</h3>
          <h4 className="md:text-6xl text-4xl md:pl-0 pl-5  mt-[50px] text-dark" data-aos="zoom-in">
            Welcome to our Clinic
          </h4>
          <p className="text-dark-grey md:text-[15px] md:pl-0 pl-5  mt-[50px]"  data-aos="flip-left">
            Integer aliquet congue libero, eu gravida odio ultrices ut. Etiam ac
            erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum
            orci, non elementum urna vestibulum in. Nulla facilisi. Nulla
            egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend
            tempor, nunc libero porttitor tellus, vel pharetra metus dolor.
          </p>

         <div className=" md:flex flex-row md:mt-0 mt-16 justify-around text-start  ">
          <span className="md:flex flex-col md:ml-0 ml-10 md:gap-0 gap-10 md:m-0 m-auto justify-around "> <CountUp end={5000} className=" md:text-6xl text-4xl pt-20 text-light-green "/>
          <h1 className=" md:pl-0 pl-10 md:pb-0 pb-10"  >Satisfied Patients</h1></span>
          <span className="md:flex flex-col  md:ml-0 ml-10 md:gap-0 gap-10 justify-around  "> <CountUp end={352} className=" md:text-6xl text-4xl pt-20 text-light-green  "/>
          <h1 className="md:pl-0 pl-10 md:pb-0 pb-10">Face Liftings</h1></span>
          <span className="md:flex flex-col  md:ml-0 ml-10 md:gap-0 gap-10 justify-around  "> <CountUp end={718} className="md:text-6xl text-4xl pt-20 text-light-green "/>
          <h1 className="md:pl-0 pl-10 md:pb-0 pb-10">Injectibles</h1></span>
         </div>

        </div>
        
        <div className="md:w-[600px] w-[360px] m-auto md:pl-[0px] md:mt-0 mt-48 pl-0   md:h-[500px] shadow-2xl" data-aos="flip-left">
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
      </div> 

       
       <div className="md:w-[100vw] md:h-[800px]  flex flex-col md:flex-row md:mt-0 mt-20 bg-dark-light-greey">
        <div className=" md:w-[40vw] order-2 md:order-1 md:h-[800px] w-[100vw] h-[400px] md:pl-[70px] bg-cover bg-center bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737111779/why_1.jpg_mtufyq.webp)]"></div>
        <div className="md:w-[600px] md:h-[600px] order-1 md:order-2 m-auto">
          <h3 className="text-dark-light-grey md:pl-0 pl-6 text-1">This is Dr Pro</h3>
          <h4 className="md:text-6xl text-4xl md:pl-0 pl-6 md:mt-[50px] text-dark "  data-aos="zoom-in-up">Why choose us?</h4>
          <p className="text-dark-grey md:pl-0 pl-6 mt-[50px]" data-aos="fade-up">
            Integer aliquet congue libero, eu gravida odio ultrices ut. Etiam ac
            erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum
            orci, non elementum urna vestibulum in. Nulla facilisi. Nulla
            egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend
            tempor, nunc libero porttitor tellus, vel pharetra metus dolor.
          </p>

          <span className="flex  mt-[50px] md:ml-0 ml-4  gap-[30px]"  data-aos="fade-up" data-aos-duration="3000">
            <div className="  bg-cover bg-center  md:w-[80px] w-[70px] h-[70px] md:h-[80px] rounded-[100%] bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737114633/141173930-medicine-bottle-block-gradient-style-icon-design-of-medical-care-health-emergency-aid-exam-clinic_qbifvj.jpg)]" ></div>{" "}
            <h4 className=" text-dark">
              Only Top Products{" "}
              <p className="text-dark-grey">
                Etiam ac erat ut enim maximus accumsan vel ac nisl
              </p>
            </h4>
          </span>
          <span className="flex  mt-[50px] md:ml-0 ml-4  gap-[30px]"  data-aos="fade-up" data-aos-duration="3000">
            <div className="  bg-cover bg-center  md:w-[80px] w-[70px] h-[70px] md:h-[80px] rounded-[100%] bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737114647/images_mdeical_nrmhzq.jpg)]"></div>{" "}
            <h4 className=" text-dark">
              The best Doctors{" "}
              <p className="text-dark-grey">
                Ac erat ut enim maximus accumsan vel ac
              </p>
            </h4>
          </span>
          <span className="flex md:ml-0 ml-4 mt-[50px] gap-[30px]"  data-aos="fade-up" data-aos-duration="3000">
            <div className="  bg-cover bg-center   md:w-[80px] w-[70px] h-[70px] md:h-[80px] rounded-[100%] bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737114618/download_medical_thm51l.jpg)]"></div>{" "}
            <h4 className=" text-dark">
              Great Feedback{" "}
              <p className="text-dark-grey">
                Etiam ac erat ut enim maximus accumsan vel{" "}
              </p>
            </h4>
          </span>
        </div>
      </div>

      <div className="md:w-[100%] md:h-[150px] h-[230px] md:flex flex-row bg-pinka text-white justify-evenly gap-[200px] text-center items-center">
        <h5 className="md:text-4xl text-3xl pt-10 md:pt-[10px]" data-aos="flip-left">
          Make your appointment today!{" "}
          <h6 className=" text-sm md:pt-0 pt-3">
            Etiam ac erat ut enim maximus accumsan vel ac nisl
          </h6>
        </h5>{" "}
        <button className="md:w-[300px] md:h-[55px] h-[60px] rounded-[20px] md:mt-0 mt-3 bg-pikka2  text-white text-3xl " data-aos="flip-left">
          +34 586 778 8892
        </button>
      </div> 



      <div className="md:w-[100vw] md:h-[700px] w-full items-center text-center">
        {" "}
        <h3 className="text-dark-light-grey text-[19px] pt-[100px]">
          This is Dr Pro
        </h3>
        <h4 className="text-5xl mt-[10px] text-dark ">Our Services</h4>
        <div className="md:flex md:w-full w-full md:justify-center flex-row ">
          {" "}
            <div className="text-center w-[380px]  md:m-[20px]  justify-center items-center border-b-pink" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="  m-auto bg-cover bg-center  w-[70px] h-[70px] rounded-[100%] bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737114618/download_medical_thm51l.jpg)]"></div>
              <h2 className=" text-dark text-2xl pt-[20px]">Breast Augmentation</h2>
              <p className="text-dark-light-grey pt-[20px]"> Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
            </div>
          <div className="text-center w-[380px]  md:m-[20px]  justify-center items-center border-b-pink" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="  m-auto bg-cover bg-center  w-[70px] h-[70px] rounded-[100%] bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737131398/images_knife_o6xp0e.png)]"></div>
            <h2 className=" text-dark text-2xl pt-[20px]">Breast Augmentation</h2>
            <p className="text-dark-light-grey pt-[20px]"> Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
          </div>
          <div className="text-center w-[380px]  md:m-[20px]  justify-center items-center border-b-pink"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="  m-auto bg-cover bg-center  w-[70px] h-[70px] rounded-[100%] bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737131426/images_pregnant_nvaqmo.jpg)]"></div>
            <h2 className=" text-dark text-2xl pt-[20px]">Breast Augmentation</h2>
            <p className="text-dark-light-grey pt-[20px]"> Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
          </div>
        </div>
        <div className="md:flex md:justify-center md:w-full w-full flex-row ">
          {" "}
            <div className="text-center w-[380px]  md:m-[20px]  justify-center items-center border-b-pink"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="  m-auto bg-cover bg-center  w-[70px] h-[70px] rounded-[100%] bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737131409/images_man_l8edq6.png)]"></div>
              <h2 className=" text-dark text-2xl pt-[20px]">Breast Augmentation</h2>
              <p className="text-dark-light-grey pt-[20px]"> Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
            </div>
          <div className="text-center w-[380px]  md:m-[20px]  justify-center items-center border-b-pink"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                
                <Link to="/Breast">            <div className="  m-auto bg-cover bg-center  w-[70px] h-[70px] rounded-[100%] bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737131388/256x256bb_idnd3b.jpg)]"></div>
                </Link>
                <h2 className=" text-dark text-2xl pt-[20px]">Breast Augmentation</h2>
            <p className="text-dark-light-grey pt-[20px]"> Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
          </div>
          <div className="text-center w-[380px]  md:m-[20px]  justify-center items-center border-b-pink"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="  m-auto bg-cover bg-center  w-[70px] h-[70px] rounded-[100%] bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737114618/download_medical_thm51l.jpg)]"></div>
            <h2 className=" text-dark text-2xl pt-[20px]">Breast Augmentation</h2>
            <p className="text-dark-light-grey pt-[20px]"> Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
          </div>
        </div>
      </div>



        <div className="   md:flex items-center justify-center m-auto flex-row w-[100vw] h-[750px] bg-fixed  md:pl-[70px] pl-0 bg-cover bg-center bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737197801/extra_jjsiqy.jpg)]" data-aos="zoom-in">
        <div className="md:w-[400px] w-[350px] md:h-[600px] h-[500px]   transform translate-y-10 ml-5 bg-white bg-fixed  shadow-2xl z-[5px] md:ml-[800px]"> <span><h1 className="md:text-6xl text-4xl text-light-green pt-10 pl-16">30%</h1></span> <h5 className="pl-16 text-dark-light-grey">Discount</h5> <h1 className="md:text-8xl text-6 text-dark pl-16">Only in August</h1>
        <p className="pl-16 pt-10 text-dark-light-grey">Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus.</p>
        <button className=" md:hover:text-pinka w-[180px] h-[50px] md:text-white text-white hover:text-pinka mr-5 rounded-[100px] border-pinka border-2 hover:bg-white md:text-[16px] text-[] bg-pinka  ml-16 mt-10 ">
          Read More
        </button>
      </div>
      </div>
      
      <div className="w-[100%] sticky items-center text-center justify-center h-[300px] bg-fixed bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1736765244/newsletter_qybmcg.jpg)]">
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

export default Home;
