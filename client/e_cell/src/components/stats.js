import React , {useState} from 'react'
import data from '../assets/Images/stats_data'

const Stats = () => {


  return (
    <>
    <div className='flex justify-center items-center'>
      <div className="w-full flex  flex-col  lg:flex-row m-[70px] justify-center items-center">
       
       {data.map((items)=>
       {
           return(
           <>
           <div className='w-32 h-32 mr-[50px] ml-[50px] bg-white mb-4 rounded-lg hover:scale-110  transition-all duration-1000'>
              <div className='h-20 flex justify-center items-center'><img className="w-10 h-10" src={items.image}></img></div>
              <div className='flex justify-center items-center font-bold'><p className='text-md'>{items.data}</p></div>
              <div className='flex justify-center items-center'><p>{items.name}</p></div>
           </div>
           </>
           )
       })}
         
       </div>
       </div>
       <div className='bg-sec'>
       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        class="shape-fill" fill="hsl(216, 19%, 16%)"></path>
        </svg>
       </div>
       
    </>
    
  )
}

export default Stats