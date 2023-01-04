import React from "react"; 
import { SlLocationPin } from "react-icons/sl";
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import { AiFillInstagram,AiFillLinkedin,AiFillFacebook,AiFillTwitterCircle } from "react-icons/ai";
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init()




const Get=()=>{
  return(
    <>
    <div id="Get" className='bg-back'>
       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill" fill="hsl(217, 10%, 25%)"></path>
        </svg>
       </div>
    
    <div className="flex justify-center items-center w-full">
    
      <div className="flex flex-col justify-center items-center">
        <p data-aos="zoom-in" className=" text-pblue mt-[20px] mb-[50px] text-4xl font-black aos-init aos-animate">Get In Touch</p>

        <div id="get" className="flex flex-col bg-sec mb-[50px] pl-[40px] pr-[40px] pt-[70px] pb-[70px] w-[400px] rounded md:w-[600px] md:rounded-tr-full md:rounded-bl-full lg:w-[700px] lg:rounded-tr-full lg:rounded-bl-full">
          <div className="flex justify-center items-center  mb-[20px]">
            <div className="flex w-[306px] ">
            <div className="flex justify-center items-center flex-[0.2] mr-[30px]"><SlLocationPin className="hover:scale-110" size="20px" color="hsl(179, 93%, 44%)"/></div>
            <p className="text-white">E-Cell,MNNIT Allahabad,India</p>
            </div>
          </div>

          <div className="flex justify-center items-center  mb-[20px]">
            <div className="flex">
            <div className="flex justify-center items-center flex-[0.2] mr-[30px]"><BsFillTelephoneFill className="hover:scale-110" size="20px" color="hsl(179, 93%, 44%)"/></div>
            <p className="text-white">+91 7726924556, +91 9630929939</p>
            </div>
          </div>

          <div className="flex justify-center items-center mb-[20px]">
            <div className="flex w-[306px] ">
            <div className="flex justify-center items-center flex-[0.2] mr-[30px] "><MdEmail className="hover:scale-110" size="20px" color="hsl(179, 93%, 44%)"/></div>
            <p className="text-white">support@ecellmnnit.com</p>
            </div>
          </div>
        </div>
        <div className="flex mb-[50px]">
        <div className="cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  hover:scale-110 transition-all duration-1000 "><AiFillFacebook  size="50px" color="hsl(179, 93%, 44%)"/></div>
        <div className="cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px] hover:scale-110 transition-all duration-1000 "><AiFillInstagram  size="50px" color="hsl(179, 93%, 44%)"/></div>
        <div className="cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  hover:scale-110 transition-all duration-1000 "><AiFillTwitterCircle  size="50px" color="hsl(179, 93%, 44%)"/></div>
        <div className="cursor-pointer  mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  hover:scale-110 transition-all duration-1000 "><AiFillLinkedin  size="50px" color="hsl(179, 93%, 44%)" /></div>
        
        </div>

        <p className="text-white mb-[30px] ">Copyright © E-Cell 2023. All rights reserved</p>
      </div>
    </div>
    </>
  )
}

export default Get;