import React from 'react'

const Navebar = () => {
  return (
    <div className=' bg-black flex justify-between '>
        <div className=' flex flex-row gap-3 sm:gap-5'>
            <img className='w-9' src="logo1.png" alt="atr logo" />
            <h1 className='pt-2 font-mono text-base sm:text-2xl font-bold'>Portfolio<span className='text-yellow-500 pt-2'>.</span></h1>
        </div>
        <div className=' flex flex-row gap-2 '>
          {/* leetcode link in navbar */}
            <div className='flex justify-center '>
              <button className='flex item-center  p-1 sm:w-8 w-7'>
              <lord-icon
                  src="https://cdn.lordicon.com/eodeknny.json"
                  trigger="hover"
                  colors="primary:#e8b730">
              </lord-icon>
              </button>
            </div>

            {/* linkedin link */}
            <div className='flex justify-center'>
              <button className='flex item-center  p-1 sm:w-7 w-7'>
              <lord-icon
                  src="https://cdn.lordicon.com/mdyiqybm.json"
                  trigger="hover"
                  colors="primary:#e8b730,secondary:#e8b730">
              </lord-icon>
                  
              </button>
            </div>

            {/* instagram link */}
            <div className='flex justify-center'>
              <button className='flex item-center  p-1 sm:w-9 w-8 '>
              <lord-icon
                  src="https://cdn.lordicon.com/kqvibaec.json"
                  trigger="hover"
                  colors="primary:#e8e230,secondary:#ebfad1">
              </lord-icon>
                  
              </button>
            </div>
        </div>
    </div>
  )
}

export default Navebar