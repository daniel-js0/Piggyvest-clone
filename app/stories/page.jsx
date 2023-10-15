"use client"

import React, { useState } from 'react';
import Navbar from '../compnents/Navbar'
import Image from "next/image";


const Stories = () => {
          const [showStory, setShowStory] = useState(false)

  return (
    <main>
        <Navbar setShowStory={setShowStory} />

        <div className='mt-32'>
            <div>
                <h1 className='font-bold text-5xl text-center text-gray-800 md:text-6xl'>Loved by our</h1> 
                <div className='flex justify-center mt-2'>
                    <h1 className='font-bold text-5xl text-gray-800 md:text-6xl'>Customers</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className=" ml-1 w-12 h-12 text-blue-600 animate-pulse "><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /> </svg>
                </div>
                <p className='text-center mt-4 text-lg text-gray-600 px-10 md:px-28 md:text-xl'>Stories of happy savers who PiggyVest has helped or is helping save for what truly matters to them.</p>
                
                <div className=' flex justify-center mt-10'>
                <button className='h-14 w-40  bg-gray-800 text-white rounded-xl font-semibold'>Add your story </button>  
                </div>
            </div>

            <div className='relative w-[100%] h-[30rem] mt-20'>
            
              <Image width={360} height={390} quality={100} className={`absolute top-5 w-[90%] h-[60%] ml-[3%] ${showStory ? 'z-0':'z-10'}`} src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/stories_header_60853c6e93/stories_header_60853c6e93.png" alt="header image" />
             
              <Image width={360} height={390} quality={100} className='absolute w-[88%] h-[70%] z-0  end-2' src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/square_5a70d6f07c/square_5a70d6f07c.png" alt="PiggyVest" />
             

            </div>
        </div>




        <div className='mt-44'>
        <svg class="dot right headerIcon" width="33" height="108" viewBox="0 0 35 110" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="30" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="55" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="80" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="105" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="5" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="30" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="55" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="80" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="105" r="5" fill="#2295F2" fill-opacity="0.31"></circle></svg>
        <svg className="" width="75" height="75" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" ><g opacity="0.2"><path d="M34.5601 36.8001H8.64014V28.4001H26.2401V10.5601H34.5601V36.8001Z" fill="#7913E5"></path><path d="M72.1602 36.8001H46.2402V10.5601H54.5602V28.4001H72.1602V36.8001Z" fill="#7913E5"></path><path d="M35.6798 69.6001H27.3598V51.7601H9.75977V43.3601H35.6798V69.6001Z" fill="#7913E5"></path><path d="M54.5602 69.6001H46.2402V43.3601H72.1602V51.7601H54.5602V69.6001Z" fill="#7913E5"></path></g></svg>
        
        <svg className="bi bi-record-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
        </div>

    </main>
  )
}

export default Stories