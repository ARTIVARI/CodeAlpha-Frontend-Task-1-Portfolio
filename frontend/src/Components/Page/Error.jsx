import React from 'react'
import { Link } from 'react-router-dom'

const Error=()=> {
  return (
    <div className='flex flex-col '>
        <div>
        <section >
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                </div>   
            </div>
        </section>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Link to ='/'>
            <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-red-500 px-8 py-4 font-medium transition-all">
                <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-red-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-red-600 transition-all delay-200 duration-500 ease-in-out group-hover:mb-16 group-hover:translate-x-0"></span>
                <lord-icon
                    src="https://cdn.lordicon.com/usownftb.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#ffffff">
                </lord-icon>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Go Back</span>
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Error