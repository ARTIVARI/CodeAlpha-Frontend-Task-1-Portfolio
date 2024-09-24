import React from 'react'
import cardData from '../skilldata'
import Skillhover from '../Cards/Skillhover'

const Skill=()=> {
 
  return (
    <div className='flex flex-col gap-8'>
        <div className='text-center gap-4'>
          <h1 className='font-sans sm:text-4xl text-3xl font-bold'>Skills</h1>
          <p className='font-sans sm:text-xl text-lg mt-3'>Innovative Solutions Through Cutting-Edge <samp className='font-medium italic text-yellow-500'>Technology!</samp> </p>
       </div>
        <div className='flex flex-col sm:grid sm:grid-cols-4 gap-4 sm:gap-10 mx-auto'>
          {cardData.map((card, index) =>(
            <Skillhover key={index} imgSrc={card.imgSrc} title={card.title} discription={card.discription} percent={card.percent}/>

          ))}
       </div>
      
    </div>
  )
}

export default Skill