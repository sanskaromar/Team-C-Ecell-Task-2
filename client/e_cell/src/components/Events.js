import React ,{useState} from 'react'
import event from '../assets/event'
import {AiOutlineDoubleLeft ,AiOutlineDoubleRight } from "react-icons/ai";
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init()

const Events = () => {

  const [card,setCard] = useState(0)

  const slideLeft =() =>
  {
     var slider = document.getElementById('slider')
     slider.scrollLeft = slider.scrollLeft - 220
     if(card>0)
      setCard(card - 1)
     else
     {
      slider.scrollLeft = slider.scrollLeft + 1500
      setCard(7)
     }
     

  } 

  const slideRight =()=>
  {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 220

    if(card<7)
     setCard(card + 1)
     else
     {
     slider.scrollLeft = slider.scrollLeft - 1500
     setCard(0)
     }
   
     
  }

  const setter =(val) =>
  {
    setCard(val);
  }
  return (
   <>
   <div className='Event Main flex flex-col items-center mb-[60px]'>
        <h1 data-aos="zoom-in" className='text-blue font-bold text-3xl mb-[40px] aos-init aos-animate'>Events</h1>
       <div className='Info Box w-full p-4 flex flex-col justify-around   lg:items-center lg:flex-row '>
            
           <div className='flex flex-col  lg: lg:w-1/2 mb-4 lg:mb-0 lg:items-center'>
              <img className=' rounded-xl h-[200px] lg:w-[600px] lg:h-[360px]' src={event[card].images}></img>
            
           </div>
           <div className='About Event h-[240px] pl-4 pr-4 pb-4 rounded-lg bg-black bg-opacity-10 border-2 flex flex-col justify-around items-center text-justify lg:w-[600px] lg:h-[360px] '>
             <div className=''>
                 <p className={`text-gray-100 font-bold bg-sec pr-10 pl-10 border-2 border-teal-300  lg:text-[24px] ${card%2==0?'rounded-br-full rounded-tl-full':'rounded-tr-full rounded-bl-full '}  duration-300 `}>{event[card].name}</p>
             </div>
             <div className=''>
                
                <p className='text-white lg:text-[16px] '>{event[card].about}</p>
             </div>
           </div>
          
       </div>

       
        
       <div className='p-1 w-[300px] lg:w-[400px]  flex justify-between items-center bg-black bg-opacity-0 m-2 '>
           <div className=' bg-teal-300 rounded-full p-1 hover:scale-110'>
                 <AiOutlineDoubleLeft className='bg-black text-white p-1 rounded-full text-[25px]' onClick={slideLeft}/>
           </div>

           <div className=' bg-teal-300 rounded-full p-1 hover:scale-110' >
              <AiOutlineDoubleRight className='bg-black text-white p-1 text-[25px] rounded-full' onClick={slideRight}/>
           </div>
       </div>

       <div className='flex justify-center items-center '>
        
        
        
       <div id='slider' className='bg-back overflow-x-scroll h-[230px] scroll-smooth whitespace-nowrap scrollbar-hide '>
           
           <div className='w-50 h-40 inline-block text-center '><img className={`${card==0 ? 'border-4  border-teal-300':''} w-50 h-40 m-2 inline-block cursor-pointer hover:scale-110 transition-all duration-1000  rounded-lg`} src={event[0].images} onClick={() => setter(0)}></img><p className='bg-back text-white pt-1 pb-1  m-2 rounded border-2'>{event[0].name}</p></div>
           <div className='w-50 h-40 inline-block text-center '><img className={`${card==1 ? 'border-4  border-teal-300':''} w-52 h-40 m-2 inline-block cursor-pointer hover:scale-110 transition-all duration-1000  rounded-lg`} src={event[1].images} onClick={() => setter(1)}></img><p className='bg-back text-white pt-1 pb-1  m-2 rounded border-2'>{event[1].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className={`${card==2 ? 'border-4  border-teal-300':''} w-52 h-40 m-2 inline-block cursor-pointer hover:scale-110 transition-all duration-1000  rounded-lg`} src={event[2].images} onClick={() => setter(2)}></img><p className='bg-back text-white pt-1 pb-1 m-2 rounded border-2'>{event[2].name}</p></div>
           <div className='w-50 h-40 inline-block text-center '><img className={`${card==3 ? 'border-4  border-teal-300':''} w-52 h-40 m-2 inline-block cursor-pointer hover:scale-110 transition-all duration-1000  rounded-lg`} src={event[3].images} onClick={() => setter(3)}></img><p className='bg-back text-white pt-1 pb-1  m-2 rounded border-2'>{event[3].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className={`${card==4 ? 'border-4  border-teal-300':''} w-52 h-40 m-2 inline-block cursor-pointer hover:scale-110 transition-all duration-1000  rounded-lg`} src={event[4].images} onClick={() => setter(4)}></img><p className='bg-back text-white pt-1 pb-1 m-2 rounded border-2'>{event[4].name}</p></div>
           <div className='w-50 h-40 inline-block text-center '><img className={`${card==5 ? 'border-4  border-teal-300':''} w-52 h-40 m-2 inline-block cursor-pointer hover:scale-110 transition-all duration-1000  rounded-lg`} src={event[5].images} onClick={() => setter(5)}></img><p className='bg-back text-white pt-1 pb-1 m-2 rounded border-2'>{event[5].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className={`${card==6 ? 'border-4  border-teal-300':''} w-52 h-40 m-2 inline-block cursor-pointer hover:scale-110 transition-all duration-1000  rounded-lg`} src={event[6].images} onClick={() => setter(6)}></img><p className='bg-back text-white pt-1 pb-1  m-2 rounded border-2'>{event[6].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className={`${card==7 ? 'border-4  border-teal-300':''} w-52 h-40 m-2 inline-block cursor-pointer hover:scale-110 transition-all duration-1000  rounded-lg`} src={event[7].images} onClick={() => setter(7)}></img><p className='bg-back text-white pt-1 pb-1  m-2 rounded border-2'>{event[7].name}</p></div>
    
       </div>
       

       

       
       
       </div>

    </div>
     
     
   </>
  )
}

export default Events