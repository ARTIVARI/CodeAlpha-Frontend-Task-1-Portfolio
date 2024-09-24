import React from 'react'
import Adminprojectcard from '../Cards/adminprojectcard'
import projectData from '../ProjectData'
import cardData from '../skilldata'
import Adminskillcard from '../Cards/Adminskillcard'


const Admin=()=> {
  
  return (
    
    <div className='flex flex-col gap-4 font-mono pl-4'>
      <h1 className='text-2xl font-bold mb-7'>Welcome to  Admin Page</h1>
      <div className='p-3 gap-4 p-3 sm:grid sm:grid-cols-2 flex-col sm:gap-4 gap-5 shadow-2xl shadow-slate-800 bg-black rounded-lg '>
          {/* admin data */}
            <div className=' p-3 gap-4 p-3'>
            <h1 className='text-xl font-semibold mb-6'>Admin Data</h1>
            <div className="flex flex-col gap-6 mb-6 ">
                <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Email</label>
                      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                </div>
                <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"  required />
                </div> 
            </div>
            
            </div>



          {/* Contact page */}
            <div className=' p-3 gap-4 p-3'>
            <h1 className='text-xl font-semibold mb-6'>Contact Page</h1>
            <div className="flex flex-col gap-6 mb-6 ">
                <div>
                      <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                      <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div> 
            </div>
           
            </div>


          {/* Home page */}
          <div className=' p-3 gap-4'>
            <h1 className='text-xl font-semibold mb-6'>Home Page</h1>
            <div className="flex flex-col gap-6 mb-6 ">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Resume upload </label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
            </div>
            <div>
                <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Home page discription input</label>
                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            </div>
            
          </div>


          {/* About page */}
          <div className=' p-3 gap-4 p-3'>
              <h1 className='text-xl font-semibold mb-6'>About Page</h1>
              <div className="flex flex-col gap-6 mb-6 ">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Photo</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                  </div>
                  <div>
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Work Designation</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                  </div>
                  <div>
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription</label>
                    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
              </div>
              
          </div>

          <div className='flex justify-between gap-4'>
            <button type="submit" className="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600">Submit</button>
                    {/* <button type="edit" className="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600">Edit</button> */}
          </div>

      </div>



     {/* other form */}
      <div className='sm:grid sm:grid-cols-2 flex-col sm:gap-4 gap-5 '>
                {/* Skill page */}
          <div className='shadow-2xl shadow-slate-800 bg-black rounded-lg p-3 gap-4 p-3'>
              <h1 className='text-xl font-semibold mb-6'>Skill Page</h1>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
                    </div>
                    <div>
                        <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Percantage</label>
                        <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="%" required />
                    </div>  
                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription</label>
                        <input type="text" id="large-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="discription"  required />
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                  <button type="submit" className="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600">Submit</button>

                </div>
          </div>



          {/* Project page */}
          <div className='shadow-2xl shadow-slate-800 bg-black rounded-lg p-3 gap-4 p-3'>
              <h1 className='text-xl font-semibold mb-6'>Project Page</h1>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
                    </div>
                    <div>
                        <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12/2/24" required />
                    </div> 
                    <div>
                        <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                        <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="react.js , native" required />
                    </div> 
                    <div>
                        <label for="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Url</label>
                        <input type="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="github.com" required />
                    </div> 
                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription</label>
                        <input type="text" id="large-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="discription"  required />
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                  <button type="submit" className="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600">Submit</button>
                 
                </div>
          </div>
          </div>


      



      {/* project data for delete */}
      <div className="shadow-2xl shadow-slate-800 bg-black rounded-lg p-3 gap-4">
        <h1 className="text-xl font-semibold mb-6">All Project</h1>
        <div>
        {projectData.map((card, index) =>(
          <Adminprojectcard key={index}  pimgSrc={card.pimgSrc} ptitle={card.ptitle} pdate={card.pdate} pteam={card.pteam}/>
        ))}
        </div>
      </div>


      {/* skill data for delete */}
      <div className='shadow-2xl shadow-slate-800 bg-black rounded-lg p-3 gap-4 p-3'>
         <h1 className='text-xl font-semibold mb-6'>All Sills </h1>
         <div>
        {cardData.map((cards, index) =>(
          <Adminskillcard key={index}  imgSrc={cards.imgSrc} title={cards.title} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Admin