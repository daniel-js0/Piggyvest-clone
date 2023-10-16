"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../compnents/Navbar'
import Image from "next/image";
import ButtonLite from '../compnents/ButtonLite';
import SlideInText from '../compnents/SlideInText';


const Stories = () => {
          const [showStory, setShowStory] = useState()
          const [scroll, setScroll ] = useState(false);
          const [click, setClickNav] = useState('story');
          const [isVisible, setIsVisible] = useState(false);


               const handleClick = (e) => {
                 e.preventDefault();
                 setClickNav('story');
               }

              useEffect(() => {
                const handleScroll = () => {
                  const scrollPosition = window.scrollY;
            
                  const threshold = 100; 
            
                  if (scrollPosition > threshold) {
                    setScroll(true);
                  } else {
                    setScroll(false);
                  }
                };
            
                const timeout = setTimeout(() => {
                  setIsVisible(true);
                }, 400);
            
                return () => {
                  clearTimeout(timeout)
                  window.removeEventListener('scroll', handleScroll);
                };

                
              }, []);

  return (
    <main>
        <Navbar setShowStory={setShowStory} showStory={showStory} scroll={scroll} click={click}
                handleClick={handleClick}/>

        <div className='mt-32 xl:flex'>
            <div>
                <h1 className='font-bold text-5xl text-center text-gray-800 md:text-6xl xl:text-start xl:px-20 xl:pt-16'> <SlideInText text="Loved by our"/> </h1> 
                <div className='flex justify-center xl:justify-start xl:px-20 mt-2'>
                    <h1 className='font-bold text-5xl text-gray-800 md:text-6xl '> <SlideInText text="Customers"/> </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className={`ml-1 w-12 h-16 text-blue-600 animate-pulse rotate-12 delay-200 duration-[1500ms] 
                     ${isVisible ? 'translate-y-0 opacity-100 scale-110' : 'translate-y-6 opacity-0 scale-0'}`}><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /> </svg>
                </div>
                <p className={`text-center mt-4 text-lg text-gray-600 px-10 md:px-28 md:text-xl xl:text-start xl:px-10 xl:ml-10
                    delay-150 duration-500 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'}`}>Stories of happy savers who PiggyVest has helped or is helping save for what truly matters to them.</p>
                
                <div className=' flex justify-center xl:justify-start xl:ml-20 mt-10'>
                  <button className={`h-14 w-40  bg-gray-800 text-white rounded-xl font-semibold duration-700
                    delay-100 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'}`}>Add your story </button>  
                </div>
            </div>

            <div className={`relative w-[100%] h-[30rem] mt-20 xl:mt-0 duration-700  delay-200 ${isVisible ? 'opacity-100 scale-100' : ' scale-0 opacity-0'}`}>
            
              <Image width={360} height={390} quality={100} className={`absolute top-5 w-[90%] h-[60%] ml-[3%] md:w-[70%] lg:w-[65%] md:ml-[20%] lg:ml-[27%] md:h-[82%] ${showStory ? 'z-0':'z-10'}`} src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/stories_header_60853c6e93/stories_header_60853c6e93.png" alt="header image" />
             
              <Image width={360} height={390} quality={100} className='absolute w-[88%] h-[70%] md:w-[70%] lg:w-[65%] end-2 z-0 md:h-[92%] md:end-8' src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/square_5a70d6f07c/square_5a70d6f07c.png" alt="PiggyVest" />
              
              <svg className='absolute hidden md:flex end-11 top-12 ' width="33" height="108" viewBox="0 0 35 110" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="30" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="55" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="80" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="105" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="5" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="30" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="55" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="80" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="105" r="5" fill="#2295F2" fill-opacity="0.31"></circle></svg>
              
              <svg className='absolute hidden md:flex  bottom-20 start-28 lg:start-[22%]' width="33" height="108" viewBox="0 0 35 110" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="30" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="55" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="80" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="5" cy="105" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="5" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="30" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="55" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="80" r="5" fill="#2295F2" fill-opacity="0.31"></circle><circle cx="30" cy="105" r="5" fill="#2295F2" fill-opacity="0.31"></circle></svg>
              
              <svg className='absolute hidden md:flex  -top-6 start-32 lg:start-[23%]' width="75" height="75" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" ><g opacity="0.2"><path d="M34.5601 36.8001H8.64014V28.4001H26.2401V10.5601H34.5601V36.8001Z" fill="#7913E5"></path><path d="M72.1602 36.8001H46.2402V10.5601H54.5602V28.4001H72.1602V36.8001Z" fill="#7913E5"></path><path d="M35.6798 69.6001H27.3598V51.7601H9.75977V43.3601H35.6798V69.6001Z" fill="#7913E5"></path><path d="M54.5602 69.6001H46.2402V43.3601H72.1602V51.7601H54.5602V69.6001Z" fill="#7913E5"></path></g></svg>
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="absolute hidden md:flex  w-16 h-16 start-24 bottom-52 lg:start-[20%]  text-red-600 opacity-10 rotate-12"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /> </svg>
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="absolute hidden md:flex  w-16 h-16 end-10 -top-9  text-red-600 opacity-10 rotate-12"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" /> </svg>
           
              <svg className="absolute hidden md:flex  end-6 bottom-8 h-12 w-12 bg-slate-100 opacity-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
              
            </div>
        </div>

        <div className='md:mt-52 mb-28 lg:flex lg:flex-row-reverse lg:justify-start '>
           <div className='lg:h-[24rem] lg:w-[70%] '>
              <h1 className='font-bold text-3xl text-center text-gray-800 px-4 md:px-36 lg:text-start lg:px-8 lg:pt-28 xl:pt-32 xl:text-4xl'>Join 4+ million people who <br className='max-[1023px]:hidden' /> save and invest with us </h1>
              <div>
                <ButtonLite/>
              </div>
           </div>

           <div className='w-screen lg:w-[50%] h-[21rem] lg:h-[24rem] xl:h-[27rem]'>
             <Image className='w-[90%] sm:w-[50%] lg:w-[92%] lg:ml-[7%] xl:w-[80%] xl:ml-[19%]  lg:mt-0 h-[100%] mx-auto mt-20 rounded-3xl' width={318} height={522} quality={100} src="/story1.png" alt="download-apple" /> 
           </div>
        </div>




       
        
      

    </main>
  )
}

export default Stories