import React from "react";


import data from "../assets/startup";
import { BiRepost } from "react-icons/bi";

const Startups=(props)=>{
  return(
    <>
    
    <div className=" h-80 border flex  rounded-2xl group bg-white m-4 p-2 mb-10 pb-16 ">
      <div className=" hover:scale-110 flex flex-row lg:block">
    {/* <h1 className="text-white text-3xl font-bold">{props.title}</h1> */}
    <div className=" flex mb-0 justify-center self-center w-80 h-80   absolute ">
    <img className="hover:hidden  w-full mx-auto md:visible h-full flex self-center md:basis-1/4 p-2 hover:opacity-50 hover: transition ease-out duration-300" src={props.images} alt={props.title}/>
    </div>
    <div className=" hover:visible relative collapse lg:visible md:basis-1/4 h-full w-80 bg-black -z-index-1 hover:z-index-3 flex items-center justify-center hover:-mb-80 opacity-0 group-hover:opacity-100 overflow-hidden transition-all border rounded-3xl duration-300 text-cyan-400 font-xl font-bold">
    <p className=" p-2 m-2 -z-index-1 hover:z-index-3 flex  w-full h-full ">{props.about}</p>
    
    </div>
    </div>
    </div>
    </>
  )
}

export default Startups;






// Not under use right now go to start.js































// const Startups=()=>{
    
//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//     return (
        
//         <div>
//             <h1 className="text-white font-bold text-3xl mx-auto flex align-self-center ">Various Startups byy MNNITians</h1>
//             <div>
//         <Slider {...settings}>
//             <div>
//                {data.map((item)=>(
//                 <div>
//                     <div>
//                     <div> <img src={item.images} alt={item.title}/> </div>
//                        <div> <h1 className="text-white">{item.about}</h1></div>
//                        </div>
//                 </div>
//                ))}
//             </div>
//             </Slider>
//             </div>
//             </div>
       
//     )
// }

