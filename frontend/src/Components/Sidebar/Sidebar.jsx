import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar =() => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col  gap-1 sm:pl-2 sm:pr-2 pl-1 max-h-full justify-end '>
          {/* home page link */}
            <div className='flex justify-center ' title='Home'>
              <button className='flex item-center  p-1 w-7 ' onClick={() => navigate('/')}>
              <lord-icon
                  src="https://cdn.lordicon.com/wmwqvixz.json"
                  trigger="hover"
                  colors="primary:#e8b730">
              </lord-icon>
              </button>
            </div>

          
          {/* About page link */}
          <div className='flex justify-center ' title='About us'>
              <button className='flex item-center  p-1 w-7' onClick={() => navigate('/about')}>
              <lord-icon
                  src="https://cdn.lordicon.com/jnzhohhs.json"
                  trigger="hover"
                  colors="primary:#e8b730">
              </lord-icon>
              </button>
            </div>
          
          {/* skill page link */}
          <div className='flex justify-center ' title='Skill'>
              <button className='flex item-center  p-1 w-7' onClick={() => navigate('/skill')}>
              <lord-icon
                  src="https://cdn.lordicon.com/wkvacbiw.json"
                  trigger="hover"
                  colors="primary:#e8b730">
              </lord-icon>
              </button>
            </div>
          

          {/* project page link */}
          <div className='flex justify-center ' title='Projects'>
              <button className='flex item-center  p-1 w-7' onClick={() => navigate('/project')}>
              <lord-icon
                  src="https://cdn.lordicon.com/lxrsqlrx.json"
                  trigger="hover"
                  colors="primary:#e8b730">
              </lord-icon>
              </button>
            </div>
          

          {/* contect page link */}
          <div className='flex justify-center ' title='Contect'>
              <button className='flex item-center  p-1 w-7' onClick={() => navigate('/contect')}>
              <lord-icon
                  src="https://cdn.lordicon.com/srsgifqc.json"
                  trigger="hover"
                  colors="primary:#e8b730">
              </lord-icon>
              </button>
            </div>
    </div>
  )
}

export default Sidebar