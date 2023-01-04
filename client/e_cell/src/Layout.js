//Put all your pages here in decide order 

import React from 'react'
import Home from './components/Home'
import Stats from './components/stats'
import About from './components/about'
import Form from './components/GetInTouch'
import Get from './components/Get'
import Navbar from './components/Navbar'
import Events from './components/Events'
import Testimonial from './components/Testimonial'
import Start from './components/Start'


const Layout = () => {

 const auto = () =>{
  
 }

  

 
  return (
    <div className='w-full h-full flex flex-col bg-back relative '>
     
     <div className='top-0'>
     <Navbar/>
     </div>

     <div id="page" className='w-full'>
     
     <Home/>
     <Stats/>
     <About/>
     <Events/>
     <Start/>
     <Testimonial/>
     <Form />
     <Get/>
     
     </div>
     
     
    </div>
  )
}

export default Layout