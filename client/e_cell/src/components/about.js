import React ,{useState}from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init()

const  About = () =>
{
  const [read,setRead] = useState(true)
  

  const readmore=()=>{
     setRead(!read)
  }
  return (

    <>
       <div className='' >
        <div className="About bg-sec">

        <div className='flex flex-col justify-center'>

              {/* <div className='h-80 bg-cover bg-center bg-[url("https://ecellmnnit.com//icons/AboutUs/rectangle.png")] border-2 rounded-xl ' >
                  
              </div> */}

              <div className='flex flex-col'>
                <div className='flex-[0.4] mb-[30px] flex justify-center items-center'>
                <p  data-aos="zoom-in" className='text-3xl font-bold text-white p-2 animate-pulse aos-init aos-animate'>More About Us</p>
                </div>
                
                <div className='flex flex-col lg:flex-row  lg:justify-around'>
                  
                  <div className='flex flex-col lg:w-1/2 justify-around'>
                    <div data-aos='' className=' m-8 lg:m-0 lg:w-full rounded-xl bg-cover h-40 lg:h-80 bg-[url("https://ecellmnnit.com//icons/AboutUs/rectangle.png")] aos-init aos-animate'>
                  
                    </div>
                   
                    <div className={`m-8 lg:m-0 lg:w-full rounded-xl bg-cover h-40 lg:h-80 bg-[url("https://ecellmnnit.com//icons/AboutUs/rectangle.png")] hidden  ${read?'lg:block':'lg:hidden'}`}>
                  
                    </div>
                


                  </div>

                
                  <div className='mr-[30px] ml-[30px] flex-[0.6] bg-back text-white p-[50px] mt-2 mb-[20px]  text-justify rounded-xl'>
                    <p>Entrepreneurship Cell started its functioning in October 2014 to inculcate the passion and spirit among students to pursue entrepreneurship and bring together the hustling minds having innovative solutions to the common societal problems and create scalable business ideas. E-Cell MNNIT comprises content, design, web, marketing, videography and networking teams for the collaborative and holistic work approach. E-Cell MNNIT actively hosts innumerous events and acts as a catalyst between young minds and brilliant ideas.</p>
                    <p className={`${read?'':'text-[0px]'} transfrom duration-700`}>Apart from this ECell MNNIT organizes RENAISSANCE, it's annual flagship entrepreneurial summit that provides a platform for aspiring entrepreneurs to encourage the entrepreneurial journey of translating thoughts into action through events like E PLAN, E TALK, PANEL DISCUSSION, MOCK IPL AUCTION, GAME OF STOCKS, INTERNSHIP FAIR and BUSINESS QUIZ.</p>
                    
                    <div className=' mt-10 flex justify-center items-center'>
                      <button onClick={readmore} className='text-md bg-blue text-wh  pl-[7px] pr-[7px] pt-[4px] pb-[4px] cursor-pointer rounded-lg'>Read {!read?'More':'Less'}</button>
                    </div>
                  </div>

                </div>
                
                <div className="bg-back">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="hsl(217, 10%, 25%)" fillOpacity="1" d="M0,192L1440,288L1440,0L0,0Z"></path>
                </svg>
                </div>
                
                
              </div>
           
               

        </div>

        </div>
       </div>
    </>
    
  )
}

export default About