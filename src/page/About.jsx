import { div } from "framer-motion/client";
import React from "react";
import CountUp from "react-countup";
import bg2 from "../assets/bg2.svg";


const About = () => {
  const bgStyle = `background:url(${bg2})`;
  return (
    <div>
      {/* <div styel={'background:url(bg2.svg)'} className=" w-[100vw] h-[600px] bg-cover bg-no-repeat ">
      
      </div> */}

      <div className="md:w-[100vw] w-[100%] md:h-[600px] h-[400px] bg-cover  bg-center md:bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1737549499/about.jpg_tvhxrj.webp)]">
      <div className="md:w-[700px] w-full  md:text-center justify-center flex-col"> <h1 className="md:pt-40 pt-40 text-4xl md:text-6xl md:pl-0 pl-7 ">About us</h1> <p className="md:text-center md:pl-0 pl-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
      </div>


       <div className=" md:w-[100vw] w-full md:flex flex-row justify-around items-center md:mt-[100px]">
        <div className="md:w-[600px] w-full  md:h-[600px]"  data-aos="zoom-out">
          <h3 className="text-dark-light-grey text-1 md:pl-0 pl-10 ">This is Dr Pro</h3>
          <h4 className="md:text-6xl text-5xl mt-[50px] md:pl-0 pl-10  text-dark">
            Welcome to our Clinic </h4>
          <span className="md:flex   flex-row md:gap-10 text-dark-grey text md:pl-0 pl-10  text-[15px] mt-[50px] ">
            <p className="text-dark-grey text md:pl-0 pl-10 ]">
            orci elementum. Etiam ac erat ut enim maximus accumsan vel acnisl.
            Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla
            facilisi. Nulla egestas vel lacus sed interdum
            </p>
         
            
            <p className="text-dark-grey text md:pl-0 pl-10 ]">
              Integer aliquet congue libero, eu gravida odio ultrces ut. Etiam
              ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat
              bibendum orci, non elementum urna vestibulum in. Nulla facilisi.
              Nulla egestas vel lacus sed interdum. Sed mollis,
            </p>
          </span>

          <div className=" md:flex flex-row  mt-16 justify-around md:mt-20 text-start "  data-aos="fade-up"
     data-aos-duration="1000" >
            <span className="md:flex flex-col md:ml-0 ml-10 md:gap-0 gap-10 md:m-0 m-auto justify-around">
              {" "}
              <CountUp end= {+5000} className="text-4xl text-light-green" />
              <h1 className=" md:pl-0 pl-10 md:pb-0 pb-10">Satisfied Patients</h1>
            </span>
            <span className="md:flex flex-col md:ml-0 ml-10 md:gap-0 gap-10 md:m-0 m-auto justify-around">
              {" "}
              <CountUp end={352} className="text-4xl text-light-green" />
              <h1 className=" md:pl-0 pl-10 md:pb-0 pb-10">Face Liftings</h1>
            </span>
            <span className="md:flex flex-col md:ml-0 ml-10 md:gap-0 gap-10 md:m-0 m-auto justify-around">
              {" "}
              <CountUp end={918} className="text-4xl text-light-green" />
              <h1 className=" md:pl-0 pl-10 md:pb-0 pb-10">Injectibles</h1>
            </span>
            <span className="md:flex flex-col md:ml-0 ml-10 md:gap-0 gap-10 md:m-0 m-auto justify-around">
              {" "}
              <CountUp end={300} className="text-4xl text-light-green" />
              <h1 className=" md:pl-0 pl-10 md:pb-0 pb-10">Injectibles</h1>
            </span>
          </div>
        </div>

        <div className="md:w-1/4 w-full md:h-[400px] h-[400px] bg-no-repeat  bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1738066594/intro_1.jpg_smpra4.webp)]" ></div>
      </div>



      <div className="md:w-[100vw] w-full h-[700px] justify-center items-center text-center bg-dark-light-greey  " data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
        <div className=" justify-center text-center">
          <h3 className="text-dark-light-grey text-1 pt-[100px]">
            This is Dr Pro
          </h3>
          <h4 className="text-5xl mt-[20px] text-dark">Clients Testimonials</h4>
          <div className="md:w-[100px] w-[100px] h-[100px] m-auto mt-10 rounded bg-border bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1738070828/download_quote_moryiq.jpg)]"></div>
          <div className="md:w-[70vw] w-full m-auto h-[300px] justify-center items-center text-center flex-col ">
            <p className="text-center text-dark-grey pt-[50px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              temporibus error accusamus provident corrupti! Perspiciatis at,
              cum cumque voluptatibus ipsa iusto. Minus placeat similique eius
              earum eligendi! Doloremque consequatur placeat sed? Accusantium
              itaque dolores dolorum ipsa hic totam adipisci. Cumque delectus
              conse veniam incidunt!
            </p>
            <div className="md:flex flex  m-auto md:w-[30%] md:gap-0 gap-6 w-[90%]" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
              {" "}
              <div className=" md:m-auto md:mt-10 mt-10 md:ml-0 ml-10 bg-cover bg-center md:flex flex-row w-[60px] h-[60px] rounded-[100%]  bg-no-repeat bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1738074203/test.jpg_pic_qidsl8.webp)]">
                {" "}
              </div>{" "}
              <span className="flex pt-14 font-bold">
                Maria William, <p className="text-light-green ">Patient</p>
              </span>
            </div>
          </div>

          <div className="md:w-[100%] md:h-[150px] h-[230px] md:flex md:flex-row  flex-row bg-pinka text-white justify-evenly gap-[200px] md:mt-0 mt-20 md:text-center md:items-center items-start">
        <h5 className="md:text-4xl text-start md:pl-0 pl-5 text-3xl pt-10 md:pt-[10px]">
          Make your appointment today!{" "}
          <h6 className=" text-sm md:pt-0 pt-3">
            Etiam ac erat ut enim maximus accumsan vel ac nisl
          </h6>
        </h5>{" "}
        <button className="md:w-[300px] md:h-[55px] md:mr-0 mr-24 h-[60px] rounded-[20px] md:mt-0 mt-3 bg-pikka2  text-white text-3xl ">
          +34 586 778 8892
        </button>
      </div>


      <div className="md:w-[100vw] w-full  justify-center items-center ">
      <div className=" w-full justify-center text-center">
          <h3 className="text-dark-light-grey text-1 pt-[100px]">
            This is Dr Pro
          </h3>
          <h4 className="text-5xl mt-[20px] text-dark">Meet the Surgeons</h4>
      </div>
      <div className="md:w-[100vw] w-full md:flex flex-row gap-10 md:m-auto justify-center pt-16 items-center"  data-aos="fade-right">
      <div className=" md:w-[400px] w-full flex-col h-[400px] bg-contain bg-center bg-no-repeat  bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1738127369/team_1.jpg_idcmjk.webp)]" >
       <h2 className="md:pt-[430px] pt-[420px] font text-3xl text-dark ">Michael Smith</h2>
       <p className=" pt-3 text-[17px]  text-light-green ">Plastic Surgeon</p>
       <p className="pt-3 text-dark-light-grey">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
      </div>

      <div className="  md:w-[400px] w-full flex-col md:mt-0 mt-52 h-[400px] bg-contain bg-center bg-no-repeat  bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1738127369/team_2.jpg_gpsv8u.webp)]" >
       <h2 className="pt-[430px] font text-3xl text-dark ">Samantha Doe</h2>
       <p className=" pt-3 text-[17px]  text-light-green ">Plastic Surgeon</p>
       <p className="pt-3 text-dark-light-grey">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
      </div>

      <div className="  md:w-[400px] w-full md:mt-0 mt-52 flex-col h-[400px] bg-contain bg-center bg-no-repeat  bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1738127370/team_3.jpg_ycupum.webp)]" >
       <h2 className="pt-[430px] font text-3xl text-dark ">James Carl</h2>
       <p className=" pt-3 text-[17px]  text-light-green ">Plastic Surgeon</p>
       <p className="pt-3 text-dark-light-grey">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
      </div>

      </div>
      </div>
        </div>
      </div>



      <div className="w-[100%] md:mt-[1000px] mt-[2500px]  sticky items-center text-center justify-center h-[300px] bg-fixed bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1736765244/newsletter_qybmcg.jpg)]">
      <h1 className="md:text-4xl text-3xl text-center text-white pt-10">Subscribe to our newsletter</h1>
      <form action="" className="flex justify-center items-center ">
        <input type="text" placeholder="Your E-mail" className="md:w-[600px] w-full flex text-start p-[20px] md:ml-0 ml-5 h-[40px]  border-white outline-none border-[2px] mt-10 bg-transparent "/>
        <button className="md:w-[180px] w-[300px] text-center  mt-10 -translate-x-10 h-[47px] rounded-[20px] border-b-pinka bg-pinka text-white"> SUBSCRIBE</button>
        </form>
        </div>
        
         <div className="md:w-[100vw] md:h-[500px] bg-darkin md:flex flex-row items-center md:gap-5 gap-0 justify-center ">
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

export default About;
