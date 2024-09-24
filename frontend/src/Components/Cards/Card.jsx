import React,{useState} from 'react'

function Card({pimgSrc,ptitle,pdate,pteam,pdiscription, purl}) {
    const [showPopup, setShowPopup] = useState(false);
    const handleMouseOver = () => {
        setShowPopup(true);
      };
    const handleMouseLeave = () => {
        setShowPopup(false);
      };

  return (
    <div  onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}>
        <div class="max-w-auto max-h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  p-3 flex flex-col items-center justify-center" >
            <a href={purl}>
                <img class="rounded-lg w-32 h-32" src={pimgSrc} alt="" />
            </a>
            <div class="p-2">
                <a href={purl}>
                    <h5 class="text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{ptitle}</h5>
                </a>
            </div>
        </div>
        {showPopup && (
        <div className="hidden sm:block fixed top-1/3 left-1/3 w-2/5 h-auto bg-white bg-opacity-50 flex justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5"> 
          <div className='flex flex-col'>
            <img class="rounded-t-lg w-8 h-8" src={pimgSrc} alt="" />
            <h2>Title:{ptitle}</h2>
            <h2>Date: {pdate}</h2>
            <h2>Team: {pteam}</h2>
            <p>Discription: {pdiscription}</p>
          </div>
        </div>
        )}
    </div>
  )
}

export default Card