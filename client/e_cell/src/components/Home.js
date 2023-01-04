import React,{useEffect,useState} from 'react'
import {BiMenu,BiChevronsDown} from "react-icons/bi";


const Home = () => {
   
   
 
  return (

<>
    <div className='w-full'>
       
       <div className=" bg-[url('https://c4.wallpaperflare.com/wallpaper/413/925/249/minimalism-abstract-pattern-digital-art-wallpaper-preview.jpg')] h-[900px] bg-cover bg-fixed flex flex-col  items-center">
       
       
        <div className='Main Icon h-60 w-40 flex justify-center items-center'>
         <img className="w-40 rounded-[500px]" src='https://ecellmnnit.com//images/footer/ECellLogo.jpeg'></img>
        </div>
       
       

        <div className='Home w-full'> 
          
        <div  className='Main Text text-white ml-5 mr-5 h-[250px] flex flex-col justify-center items-center '>
      
      <p  className='text-[25px] animate-ping-2'>Unfolding Advancement</p>
      <p className='text-[38px] font-bold underline underline-offset-8 animate-ping-1'>Entrepreneurship Cell</p>
      <p className='text-[25px] font-bold mt-5 animate-ping-2'>MNNIT ALLAHABAD</p>


   </div>

          <div className='h-[325px] flex justify-center items-center'>

             <div className='Ren bg-gray-800 w-3/4 h-60 m-2 rounded-lg flex flex-col  items-center lg:w-80'>
                   <div className='text-[20px] h-20 flex items-center text-white font-semibold '>
                      Registeration Open
                   </div>

                  <div className=' h-40 '>
                     <img className='w-44' src="https://renaissance.ecellmnnit.com/Images/LOGOPNGWEB-01.png"></img>
                  </div>

                  <div className='flex items-center h-20 text-xl'>
                   <p className='cursor-pointer bg-[url("https://c4.wallpaperflare.com/wallpaper/316/72/963/lion-art-vector-lines-wallpaper-preview.jpg")]  text-white rounded-full pt-1 pb-1 pr-2 pl-2 font-bold hover:scale-110'>Register Now</p>
                  </div>
             </div>
  
          </div>

          <div className='text-white text-[40px]   flex justify-center items-center  animate-bounce'>
            <div className='bg-teal-300 rounded-full '>
               <div className='bg-black rounded-full m-1 cursor-pointer hover:bg-white hover:text-black'>
                  <BiChevronsDown/>
                </div>
            </div>
          </div> 

        </div>


       </div>


       

    </div>
</>
  )
}



export default Home