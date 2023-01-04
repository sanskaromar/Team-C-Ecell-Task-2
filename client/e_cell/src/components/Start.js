import React, { useState } from 'react'
import data from '../assets/startup'                     

const Start = () => {

    const [val1,setval1] = useState(false)
    const [val2,setval2] = useState(false)
    const [val3,setval3] = useState(false)
    const [val4,setval4] = useState(false)
    const [val5,setval5] = useState(false)

   
  return (
    <>
      <div className='bg-sec'>
        <div className='h-40 w-screen flex justify-center items-center'>
           <p className='text-white font-bold text-[34px]'>Startups</p>
        </div>
        <div className='pl-[50px] pr-[50px] flex flex-col md:flex-wrap lg:flex-wrap lg:flex-row justify-around items-center bg-sec'>
                  <a href='https://loco.gg/' target="_blank">
                 <div className='cursor-pointer mt-[20px] mr-[20px] Card mb-[50px] pb-2 border rounded-2xl bg-white w-[250px]'>
                     <div className='w-[250px] h-[250px]'>
                     <div className='w-full h-full rounded  info flex flex-col justify-center items-center' onMouseEnter={()=>setval1(!val1)} onMouseLeave={()=>setval1(!val1)}>
                        <div className={`w-full h-full rounded  -[250px]  hover:hidden ${val1?'hidden':''}` }>
                           <img className='w-full h-full rounded  w-[250px] '  src={data[0].images}></img>
                        </div>
                        
                        <div className={`${!val1?'hidden':'hover:scale-110 transition-all duration-1000'} rounded-xl bg-back w-[260px] h-[280px]  p-4 text-center text-white `}>
                          <p >{data[0].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>
                  </a>

                  <a href='https://drivezy.com/Bengaluru' target="_blank">
                  <div className='cursor-pointer  mt-[20px] mr-[20px]  Card mb-[50px] pb-2 border rounded-2xl bg-white w-[250px]'>
                     <div className='w-[250px] h-[250px]'>
                     <div className='w-full h-full rounded  info flex flex-col justify-center items-center' onMouseEnter={()=>setval2(!val2)} onMouseLeave={()=>setval2(!val2)}>
                        <div className={`w-full h-full rounded  w-[250px] hover:hidden ${val2?'hidden':''}` }>
                           <img className='w-full h-full rounded  w-[250px]' src={data[1].images}></img>
                        </div>
                        
                        <div className={`${!val2?'hidden':'hover:scale-110 transition-all duration-1000'} rounded-xl bg-back w-[260px] h-[280px] p-2 text-center text-white `}>
                          <p >{data[1].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>
                  </a>

                  <a href='http://everycrave.me/' target="_blank">
                  <div className='cursor-pointer  mt-[20px] mr-[20px] mb-[50px] Card  pb-2 border rounded-2xl bg-white w-[250px]'>
                     <div className='w-[250px] h-[250px]'>
                     <div className='w-full h-full info flex flex-col justify-center items-center' onMouseEnter={()=>setval3(!val3)} onMouseLeave={()=>setval3(!val3)}>
                        <div className={`w-full h-full w-[250px] hover:hidden ${val3?'hidden':''}` }>
                           <img className='w-full h-full rounded w-[250px]' src={data[2].images}></img>
                        </div>
                        
                        <div className={`${!val3?'hidden':'hover:scale-110 transition-all duration-1000'} rounded-xl bg-back w-[260px] h-[260px] p-2 text-center text-white `}>
                          <p >{data[2].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>
                  </a>

                  <a href='https://kratikal.com/' target="_blank">
                  <div className='cursor-pointer  mt-[20px] mr-[20px] mb-[50px] Card  pb-2 border rounded-2xl bg-white w-[250px]'>
                     <div className='w-[250px] h-[250px]'>
                     <div className='w-full h-full info flex flex-col justify-center items-center' onMouseEnter={()=>setval4(!val4)} onMouseLeave={()=>setval4(!val4)}>
                        <div className={`w-[250px] w-full h-full hover:hidden ${val4?'hidden':''}` }>
                           <img className='w-[250px] w-full h-full' src={data[3].images}></img>
                        </div>
                        
                        <div className={`${!val4?'hidden':'hover:scale-110 transition-all duration-1000'} rounded-xl bg-back w-[260px] h-[260px] p-2 text-center text-white `}>
                          <p >{data[3].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>
                  </a>

                  
                  <a href='https://www.pvrcinemas.com/' target="_blank">
                  <div className='cursor-pointer mt-[20px] mr-[20px] mb-[50px] Card  border rounded-2xl bg-white w-[250px]'>
                     <div className='  w-[250px] h-[250px]'>
                     <div className='w-full h-full info flex flex-col justify-center items-center' onMouseEnter={()=>setval5(!val5)} onMouseLeave={()=>setval5(!val5)}>
                        <div className={`w-[250px] h-full hover:hidden ${val5?'hidden':''} flex ` }>
                           <img className='w-[250px] hover:hidden h-full border rounded-2xl' src={data[4].images}></img>
                        </div>
                        
                        <div className={`${!val5?'hidden':'hover:scale-110 transition-all duration-1000'} rounded-xl bg-back w-[260px] h-[260px]  p-2 text-center text-white `}>
                          <p className="">{data[4].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>
                  </a>
          
        </div>
        </div>
    </>
  )
}

export default Start