import React from 'react'

const Navebar = () => {
  const leetcodeon  = () => {
    window.open('https://leetcode.com/u/Arnavativari/', '_blank')
  }

  const linkdianon  = () => {
    window.open('https://www.linkedin.com/in/arnava-tivari-063352292/', '_blank')
  }

  const githubon  = () => {
    window.open('https://github.com/ARTIVARI', '_blank')
  }

  return (
    <div className=' bg-black flex justify-between '>
        <div className=' flex flex-row gap-3 sm:gap-5'>
            <img className='w-9' src="logo1.png" alt="atr logo" />
            <h1 className='pt-2 font-mono text-base sm:text-2xl font-bold'>Portfolio<span className='text-yellow-500 pt-2'>.</span></h1>
        </div>
        <div className=' flex flex-row gap-2 '>
          {/* leetcode link in navbar */}
            <div className='flex justify-center '>
              <button className='flex item-center  p-1 sm:w-8 w-7' onClick={leetcodeon}>
              <lord-icon
                  src="https://cdn.lordicon.com/eodeknny.json"
                  trigger="hover"
                  colors="primary:#e8b730">
              </lord-icon>
              </button>
            </div>

            {/* linkedin link */}
            <div className='flex justify-center'>
              <button className='flex item-center  p-1 sm:w-7 w-7' onCanPlay={linkdianon}>
              <lord-icon
                   src="https://cdn.lordicon.com/ftgjzwjn.json"
                    trigger="hover"
                    colors="primary:#e8b730,secondary:#ebe6ef">
              </lord-icon>
                  
              </button>
            </div>

            {/* github link */}
            <div className='flex justify-center'>
              <button className='flex item-center  p-1 sm:w-9 w-8 ' onClick={githubon}>
              <lord-icon
                  src="https://cdn.lordicon.com/fzgrewpn.json"
                  trigger="hover"
                  colors="primary:#e8b730,secondary:#ffffff">
              </lord-icon>
                  
              </button>
            </div>
        </div>
    </div>
  )
}

export default Navebar