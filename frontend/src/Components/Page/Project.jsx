import React from 'react'
import projectData from '../ProjectData'
import Card from '../Cards/Card'

const Project=()=> {
  return (
    <div className='flex flex-col gap-8'>
        <div className='text-center gap-4'>
          <h1 className='font-sans sm:text-4xl text-3xl font-bold'>Projects</h1>
          <p className='font-sans sm:text-xl text-lg mt-3'>Design-Driven Development, <samp className='font-medium italic text-yellow-500'>Impactful Solutions</samp> </p>
       </div>
        <div className='flex flex-col sm:grid sm:grid-cols-4 gap-4 sm:gap-10 mx-auto'>
          {projectData.map((card, index) =>(
            <Card key={index} pimgSrc={card.pimgSrc} ptitle={card.ptitle} pdate={card.pdate} pteam={card.pteam} pdiscription={card.pdiscription} purl={card.purl} />
          ))}
       </div>
    </div>
  )
}

export default Project