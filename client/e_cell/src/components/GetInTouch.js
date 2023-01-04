import React from "react";


const Form = ()=>{

    const check=()=>{
      var name=document.getElementById('input_name').value;
      var email=document.getElementById('input_email').value;
      var msg=document.getElementById('input_msg').value;
      if(name==="" || msg===" " || email===""){
        alert("All Enteries Must Be Filled!!");
      }
      else{
        alert("Form Submitted Successfully!!");
        document.getElementById('input_name').value="";
        document.getElementById('input_email').value="";
        document.getElementById('input_msg').value="";
      }
    }

    return(
        
        <div className="p-[30px] bg-sec flex  justify-center  ">

        <div className="bg-sec justify-around  ">

              
            <div className="mt-[50px] mb-[30px] flex justify-center">
                 <h2 className="font-bold flex m-3 p-2 md:justify-center items-center text-white text-2xl">FEEL FREE TO CONTACT IN CASE OF QUERIES</h2>
            </div>
            
            <div className="w-full lg:flex p-4">
            
              <div> 
                <div className="  bg-back flex flex-col justify-center items-center md:justify-center items-center font-bold mx-auto p-5 h-90 border rounded-xl md:flex flex-col justify-center items-center ">
              <div className="w-full">
              <label className="text-white p-2 "> NAME  </label>
                <input id="input_name" type="text" className="border rounded p-2 m-2 w-full" placeholder="Enter your name" /> 
                </div>
                <br />
                <div className="w-full">
               <label className="text-white p-2 "> EMAIL  </label>
                <input id="input_email" type="email" className="border rounded p-2 m-2 w-full " placeholder="Enter your email"/> 
                </div>
                <br />
                <div className="w-full">
                <label className="text-white p-2 "> MESSAGE  </label>
                <br/>
                {/* <input type="text"  className="border rounded p-2 m-2 w-full"  placeholder="Enter your comment here" /> */}
                <textarea id="input_msg" className="border rounded p-2 m-2 w-full " placeholder="Enter your message" rows="4" cols="70">
    </textarea>
                </div>
                <div onClick={check} className="pr-3 pl-3 pt-2 pb-2 cursor-pointer rounded-xl bg-blue hover:bg-lblue">
                <p type="submit" className="text-[13px]  text-white " >SUBMIT</p>
                </div>
                
                </div>

              </div>

              <div className=" p-8 m-5 w-0 md:w-1/4 hidden lg:w-1/2 lg:flex lg:justify-center">
                <img className="animate-bounce duration-700 delay-200 transition-shadow ease-in-out border rounded-full " src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=360&t=st=1672580651~exp=1672581251~hmac=3f25c9801dcdb0da17ecc451c1025f20ea083854f3ce7f85b9e907b678b15e95"></img>
              </div>

            </div>
           
        </div>
        </div>
    )
}
export default Form;