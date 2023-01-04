import React,{useState} from "react";
import testimonial from '../assets/testimonial'
import {GrLinkPrevious,GrLinkNext} from "react-icons/gr"

const Testimonial =()=>{
    let x=0;
    let y=1;
    var len=testimonial.length;
    const [idx,nextIdx]=useState(x);
    const [idx1,nextIdx1]=useState(y);

    const next=()=>{
        // console.log(len);
        if(idx<2) nextIdx(idx+1);
        else nextIdx(0);

        if(idx1<2) nextIdx1(idx1+1);
        else nextIdx1(0);
    }
    const prev=()=>{
        if(idx>0) nextIdx(idx-1);
        else nextIdx(len-1);

        if(idx1>0) nextIdx1(idx1-1);
        else nextIdx1(len-1);
    }
    return(
        <>
        <div className="bg-back">
        <div className=" p-[20px] bg-back flex justify-center items-center"><h1 className="mt-4 pt-8 text-pblue font-bold text-3xl ">Lines Of Appreciation</h1></div>
        <div className=" bg-back pt-[30px] pb-[50px] w-full flex justify-center items-center ">
            
            <div onClick={prev} className="hidden md:block md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center lg:block cursor-pointer mr-[40px] h-[30px] w-[30px] bg-blue flex justify-center items-center rounded-[5000px]">
            <GrLinkPrevious color="white"/>
            </div>
            

            <div className="rounded h-[580px] w-[382px] bg-sec mr-[40px] flex flex-col p-[7px]">
                <div className="h-[300px] w-[364px]">
                    <div className="h-[300px] w-[364px] absolute  bg-pblue opacity-40 z-5 hover:opacity-0 transition-all duration-1000"></div>
                    <img className="w-full h-full mb-[10px]" src={testimonial[idx].img}></img>
                </div>
                <div className="mb-[10px] flex flex-col justify-center items-center text-center relative ">
                    <p className="text-blue text-3xl font-bold">{testimonial[idx].name}</p>
                    <p className="text-white text-sm">{testimonial[idx].pos}</p>
                </div>
                <div className="flex flex-col text-center items-center m-[10px] bg-back p-[10px]">
                    <h1 className="text-pblue text-xl">{testimonial[idx].head}</h1>
                    <p className="text-white text-[13px]">
                    {testimonial[idx].data}
                    </p>
                </div>
            </div>

            <div className="rounded h-[580px] w-[382px] bg-sec flex flex-col p-[9px]  hidden lg:block ">
                <div className="h-[300px] w-[364px]">
                    <div className="h-[300px] w-[364px] absolute bg-pblue opacity-40 z-5 hover:opacity-0 transition-all duration-1000"></div>
                    <img className="w-full h-full mb-[10px]" src={testimonial[idx1].img}></img>
                    
                </div>
                <div className="mb-[10px] flex flex-col justify-center items-center text-center relative ">
                    <p className="text-blue text-3xl font-bold">{testimonial[idx1].name}</p>
                    <p className="text-white text-sm">{testimonial[idx1].pos}</p>
                </div>
                <div className="flex flex-col text-center items-center m-[10px] bg-back p-[10px]">
                    <h1 className="text-pblue text-xl">{testimonial[idx1].head}</h1>
                    <p className="text-white text-[13px]">
                    {testimonial[idx1].data}
                    </p>
                </div>
            </div>  

            <div onClick={next}   className="hidden md:block md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center lg:block cursor-pointer ml-[40px]  h-[30px] w-[30px] bg-blue flex justify-center items-center rounded-[5000px]">
            <GrLinkNext color="white" />
            </div>

            

        </div>

        <div className="w-full flex justify-center items-center mb-[30px] ">
        <div className="lg:hidden md:hidden flex">
            <div onClick={prev} className="cursor-pointer  mr-[30px] h-[30px] w-[30px] bg-blue flex justify-center items-center rounded-[5000px]">
            <GrLinkPrevious color="white"/>
            </div>

            <div onClick={next}   className="cursor-pointer   h-[30px] w-[30px] bg-blue flex justify-center items-center rounded-[5000px]">
            <GrLinkNext color="white" />
            </div>
            </div>
        </div>
        
        </div>
        </>
    )
}
export default Testimonial