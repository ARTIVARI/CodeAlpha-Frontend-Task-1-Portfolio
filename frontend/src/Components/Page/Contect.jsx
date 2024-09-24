import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data } from '../auth';

const Contect=()=> {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    

    emailjs
      .sendForm('service_vj5fq2m', 'template_l1bd5zp', form.current, {
        publicKey: '0g_tCQgQE-SNURKV_',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          // alert("message sended!")
          toast.success('message send successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            // transition: "Bounce"
            });
        },
        (error) => {
          toast.error('unhappend error!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        },
      );
  };

  
  return (
    <>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="colored"
            transition= "Bounce"
            />
    <div className='flex flex-col gap-4'>
      <div className='text-center gap-4'>
        <h1 className='font-sans sm:text-4xl text-3xl font-bold'>Contect Us</h1>
        <p className='font-sans sm:text-xl text-lg mt-3'>Got a Project in Mind? <samp className='font-medium italic text-yellow-500'>Let's Chat!</samp> </p>
      </div>
      <div className='flex sm:flex-row flex-col sm:px-4 p-5 py-2 justify-between'>
        <div className='basis-1/4 flex flex-col  gap-6  sm:ml-4 '>
           <div className='font-mono'>
           <lord-icon
                src="https://cdn.lordicon.com/surcxhka.json"
                trigger="hover"
                colors="primary:#e8b730,secondary:#e8b730">
            </lord-icon>
            <span className='sm:text-xl text-base font-medium'>Address:</span> 
            <h2 className='sm:text-base text-xs'>Vill: Hasanpur</h2>
            <h2 className='sm:text-base text-xs'>Dist: Gopalganj</h2>
            <h2 className='sm:text-base text-xs'>State: Bihar</h2>
            </div>
           <div className='font-mono'>
           <lord-icon
                src="https://cdn.lordicon.com/fdxqrdfe.json"
                trigger="hover"
                colors="primary:#e8b730">
            </lord-icon>
            <span className='sm:text-xl text-base font-medium'>Contect:</span> 
            <h2 className='sm:text-base text-xs'>Ph no: {data.phone}</h2>
            <h2 className='sm:text-base text-xs'>Email: {data.profemail} </h2>
            </div>
        </div>
        <div className='basis-3/4 sm:mt-0 mt-6'>
              <form ref={form} onSubmit={sendEmail}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                          <input type="text" id="first_name" name='user_name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arnava" required />
                      </div>
                      <div>
                          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                          <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tivari" required />
                      </div>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                          <input type="email" id="email" name='user_email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" required />
                      </div>  
                      <div>
                          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                          <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91xxxxxxxxxx" required />
                      </div> 
                  </div>
                  <div>
                    <div className="w-full mx-auto">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                      <textarea type="message" rows="4" name='user_message' className="block p-2.5 w-full text-sm text-white bg-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>
                  </div>
                  <button type="submit"  className="mt-5 text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-yellow-800">Submit</button>
              </form>
        </div>
      </div>

      
{/* footer */}
      <div className='sm:pl-0 pl-5'>
            <footer className=" rounded-lg shadow  bg-gray-950 flex flex-row">
                <div className="w-full mx-auto max-w-screen-xl p-2 md:flex sm:items-center sm:justify-center gap-3">
                    <img className='w-7' src="logo1.png" alt="" />
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Designed by : <a href="#" className="hover:underline">Arnava Tivari</a>. All Rights Reserved.
                  </span>
                </div>
            </footer>
      </div>
    </div>
    </>
  )
}

export default Contect