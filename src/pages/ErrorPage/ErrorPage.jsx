import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const ErrorPage = () => {
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
        <div className='flex-1 flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold'>404</h1>
          <h2 className='text-2xl font-semibold'>Page Not Found</h2>
          </div>
        </div>
        <Footer></Footer>
    </div>
    </div>
  )
}

export default ErrorPage    