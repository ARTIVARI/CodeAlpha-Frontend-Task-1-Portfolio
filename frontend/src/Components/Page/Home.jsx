import React from 'react'
import './Home.css'
import { data } from '../auth'

const Home =() => {
  const onButtonClick =()=>{
    const pdfUrl = "ARNAVA RESUME.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "ARNAVA RESUME.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }
  
  return (
    <div className='flex sm:flex-row flex-col-reverse sm:gap-3 gap-12'>
      <div className='flex-col basis-1/2 sm:mt-28 mt-1 sm:ml-10 ml-4'>
        <h1 className='font-mono pl-1'>Hi, I am Arnava Tivari</h1>
        <h1 className='font-sans sm:text-6xl text-4xl font-extrabold'><span className='text-fuchsia-700'>Front</span>end / App
          <h1>Developer</h1>
        </h1>
        <p  className='font-mono pt-1 mt-3 sm:text-lg text-base'>
        {data.homediscrip}
        </p>
        <div className='mt-6 '>
          <button onClick={onButtonClick} className='flex item-center border-2 border-fuchsia-700 hover:bg-fuchsia-700 rounded-full sm:px-6 px-2 sm:py-2 sm:gap-1 sm:w-fit w-max'>
          <span className="w-10"><lord-icon 
              src="https://cdn.lordicon.com/rbbnmpcf.json"
              trigger="hover"
              colors="primary:#ffffff">
          </lord-icon></span>
          <span className='mt-1'>Resume</span>
          </button>
        </div>
      </div>
      <div className='basis-1/2 '>
        <div className='bg-amber-500 absolute sm:h-28 h-16 sm:w-28 w-16  rounded-full sm:m-24 m-8'></div>
        <div className='sm:mt-20 mt-1 sm:justify-end justify-center  relative flex items-center justify-center sm:h-80 h-60 sm:w-80 w-60 sm:ml-20 ml-1 '>
            <img className='sm:w-96 w-60 sm:h-80 h-56' src="hero.png" alt="" />
            <div className='bg-amber-500 absolute h-8 w-8  rounded-full circular-motion'></div>
            <div className='bg-fuchsia-700 absolute h-8 w-8  rounded-full c-mot'></div> 
        </div>
      </div>
    </div>
  )
}

export default Home