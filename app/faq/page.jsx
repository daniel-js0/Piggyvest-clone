"use client"
import React, { useState } from 'react'
import Navbar from '../compnents/Navbar'
import ButtonLite from '../compnents/ButtonLite'
import Image from "next/image";


const FaqPage = () => {
                const [clickfaq, setClickfaq] = useState('faq');

                const handleClickfaq = (e) => {
                e.preventDefault();
                setClickfaq('faq');
                }
  return (
     <main>
        <Navbar clickfaq={clickfaq} handleClickfaq={handleClickfaq}/>
        <div className='mt-36 w-screen h-36 mb-36'>
            <h1 className='text-center text-4xl lg:text-5xl font-bold text-gray-800 lg:pt-20'>Frequently Asked Questions (FAQs)</h1>
            <div className='w-[80%] md:w-[90%] lg:w-[85%] xl:w-[60%] h-16 bg-slate-00 mx-auto mt-8'>
             <input type="text"
             className='w-[100%] h-[90%] border border-gray-500 rounded-xl placeholder:text-xl placeholder:px-5 placeholder:text-gray-300'
             placeholder='search for a question...'
             />
             </div>
        </div>

        <div className='md:mt-72 mb-28 lg:flex lg:flex-row-reverse lg:justify-start '>
           <div className='lg:h-[24rem] lg:w-[70%] '>
              <h1 className='font-bold text-3xl text-center text-gray-800 px-4 md:px-36 lg:text-start lg:px-8 lg:pt-28 xl:pt-32 xl:text-4xl'>Join 4+ million people who <br className='max-[1023px]:hidden' /> save and invest with us </h1>
              <div>
                <ButtonLite />
              </div>
           </div>

           <div className='w-screen lg:w-[50%] h-[21rem] lg:h-[24rem] xl:h-[27rem]'>
             <Image className='w-[90%] sm:w-[50%] lg:w-[92%] lg:ml-[7%] xl:w-[80%] xl:ml-[19%]  lg:mt-0 h-[100%] mx-auto mt-20 rounded-3xl' width={318} height={522} quality={100} src="/story1.png" alt="download-apple" /> 
           </div>
        </div>





     </main> 
  )
}

export default FaqPage