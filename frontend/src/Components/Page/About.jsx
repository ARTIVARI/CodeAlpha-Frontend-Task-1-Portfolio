import React from 'react'
import { data } from '../auth'

const About=()=> {
  return (
    <div className='sm:m-1 m-4'>
      <div className='sm:m-10 mt-4 flex sm:flex-row flex-col sm:gap-10 gap-5'>
        <div className='basis-2/5 flex justify-center '>
          <img className='sm:w-80 w-32 rounded-lg' src={data.img} alt="" />
        </div>
        <div className='sm:pl-0 pl-3 basis-4/5 font-mono flex  flex-col justify-center'>

          <h1 className='sm:text-5xl text-2xl font-bold'>About Us</h1>
          <h2 className='font-medium sm:text-base text-sm mt-4 text-yellow-500'>Arnava Tivari - {data.workdiscrip} </h2>
          <p className='font-medium sm:text-base text-sm mt-4'>
          {data.aboutdiscrp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About