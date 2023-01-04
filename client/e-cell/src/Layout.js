//put all your components and pages here in order decided

import React from 'react'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <div className='w-full h-full flex flex-col bg-back relative '>
      <div className='sticky top-0'>
         <Navbar/>
      </div>
    </div>
  )
}

export default Layout