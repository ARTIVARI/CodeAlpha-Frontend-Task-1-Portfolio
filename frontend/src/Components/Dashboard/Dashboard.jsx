import React from 'react'
import { BrowserRouter as Routers,Route, Routes } from 'react-router-dom';
import Navebar from '../Navbar/Navebar'
import Sidebar from '../Sidebar/Sidebar'
import Home from '../Page/Home'
import Skill from '../Page/Skill';
import About from '../Page/About';
import Project from '../Page/Project';
import Contect from '../Page/Contect';
import Error from '../Page/Error';


const Dashboard = () => {
  return (
    <Routers>
    <div className='flex flex-row bg-black min-h-screen text-white '>
         <div className=' fixed flex items-end max-h-screen min-h-screen'>
                <Sidebar/>
        </div>
       
        <div className=' sm:pl-12 pl-6 flex-col  min-h-screen  p-2 w-full'>
           <div className='sticky top-0'>
               <Navebar/>
           </div>
            <div className='pt-5'>
                <Routes>
                    <Route exact path="/" element = {<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route> 
                    <Route path='/skill' element={<Skill/>}></Route>
                    <Route path='/project' element={<Project/>}></Route>
                    <Route path='/contect' element={<Contect/>}></Route>
                    <Route path='/*' element={<Error/>}></Route>

                </Routes>
            </div>
        </div>
    </div>
    </Routers>
  )
}

export default Dashboard