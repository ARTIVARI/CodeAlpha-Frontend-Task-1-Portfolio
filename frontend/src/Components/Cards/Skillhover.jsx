import React, {useState} from 'react'

function Skillhover({title,imgSrc,discription,percent}) {
    const [showPopup, setShowPopup] = useState(false);
    const handleMouseOver = () => {
        setShowPopup(true);
      };
    const handleMouseLeave = () => {
        setShowPopup(false);
      };
  return (
    <div onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}>
        <div class="max-w-48 max-h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 flex flex-col items-center justify-center" >
            <a href="#">
                <img class="rounded-lg w-16 h-16 m-4" src={imgSrc} alt="" />
            </a>
            <div class="p-2">
                <a href="#">
                    <h5 class="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
            </div>
        </div>
        {showPopup && (
        <div className="hidden sm:block fixed top-1/3 left-1/3 w-2/5  h-auto  bg-white bg-opacity-10 flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
           <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <h1 className='font-mono text-xl font-bold text-yellow-500'>{title}</h1>
              <h2 className='font-mono text-yellow-500'>{percent}</h2>
            </div>
            <p className='font-mono'>{discription}</p>
           </div>
        </div>
        )}
    </div>
  )
}

export default Skillhover