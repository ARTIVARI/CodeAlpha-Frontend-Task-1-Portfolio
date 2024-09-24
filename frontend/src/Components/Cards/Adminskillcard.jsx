import React from 'react'

const Adminskillcard=({imgSrc,title})=> {
  return (
    <div className="w-auto table-auto">
    <table className=" w-full rounded-md overflow-hidden  text-sm  text-gray-500 dark:text-gray-400">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th  className="px-6 py-3 w-2/4">Title</th>
         
          <th  className="px-6 py-3 w-2/4"> Action</th>
        </tr>
      </thead>

      <tbody>
        <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          
          <td className="w-2/4  flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img
              className="sm:w-8 w-6 sm:h-8 h-6 rounded-full"
              src={imgSrc}
              alt="image"
            />
            <div className="">
              <div className="sm:text-base text-xs font-semibold">{title}</div>
            </div>
          </td>
          
          
          <td className='w-2/4 text-center'>
            <button>
            <lord-icon
                src="https://cdn.lordicon.com/rbbnmpcf.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{"width":"25px","height":"25px"}}>
            </lord-icon>
            </button>
            <button className='ml-6'>
            <lord-icon
                src="https://cdn.lordicon.com/wpyrrmcq.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{"width":"25px","height":"25px"}}>
            </lord-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
</div>
  )
}

export default Adminskillcard