"use client"
import { useState, useEffect } from "react"
import Navbar from "./compnents/Navbar";
import YouTube from 'react-youtube';
import Image from "next/image";


export default function Home() {
              const [hover, setHover] = useState("");
              const [scroll, setScroll ] = useState(false);
           
              
              function handleHover(tab){ setHover(tab); }
              function handleLeave(tab){ setHover(tab); }

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
            
                window.addEventListener('scroll', handleScroll);
            
                return () => {
                  window.removeEventListener('scroll', handleScroll);
                };
              }, []);

              const opts = {
                height: '390',
                width: '640',
                playerVars: {
                  autoplay: 0,
                },
              };
               const videoId = "_HcNchGk_A0"
              

           

  return (
        
    <main className="">
       <Navbar scroll={scroll} />
       {/* Home page begins here  */}
       <div className='mt-52 min-[1023px]:flex '>
           <div className='w-screen md:w-[70%] min-[1023px]:w-[39%] md:mx-auto '>
               <h1 className='text-center px-2 text-5xl font-bold 
               text-gray-800 min-[1023px]:text-start min-[1023px]:px-8'>The Better Way to Save & Invest</h1>
               <h4 className='text-center px-2  mt-7 leading-loose 
               text-gray-500 min-[1023px]:text-start min-[1023px]:px-8'>Piggyvest helps over 4 million customers achieve their financial goals by helping them save and invest with ease</h4>
               
               <div className="flex justify-center mt-7 w-[90%]  h-20  mx-auto 
                          min-[1023px]:justify-start min-[1023px]:px-2">
                  <button className="flex my-auto bg-gray-800 h-14 w-44 rounded-xl
                          hover:bg-black hover:-translate-y-2 hover:delay-100 duration-700">
                      <Image width={18} height={22} quality={100} className="my-auto ml-3" src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/white_Apple_Logo_768cf7ce21/white_Apple_Logo_768cf7ce21.svg" alt="download-apple" />
                      <p className="my-auto ml-2 font-bold text-gray-200">Get on Iphone</p>
                  </button>
                  <button className="flex my-auto  ml-4 bg-gray-800 h-14 w-48 rounded-xl
                           hover:bg-black hover:-translate-y-2 hover:delay-100 duration-700">
                      <Image width={24} height={24} quality={100} className="my-auto ml-3"  src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg" alt="download-google" />
                      <p className="my-auto ml-1 font-bold  text-gray-200" >Get on Android</p>
                  </button>  
               </div>
           </div>
 
           <div className="w-[94%] mx-auto sm:mx-auto sm:w-[60%] lg:w-[45%] lg:scale-110 md:mx-auto mt-14 relative
                          min-[1023px]:-mt-20 xl:animate-bounce-slow">
              <div className="lg:w-[75%] mt-5 mx-auto md:h-[29rem] h-[22.5rem] w-[85%] bg-no-repeat overflow-hidden bg-center rounded-[1.75rem] " >
                <Image
                 src="/background.png"
                 className="w-[100%] h-[100%]"
                 alt="NDPR audit" 
                 width={320} 
                 height={240}
                 quality={100}
                 placeholder='empty' 
                   />
                <div>
               
                   <Image src="/card1.png" width={130} height={100} quality={100} className="w-36 h-10 absolute start-3 top-24  rounded-xl" alt="card-img" placeholder="empty" />
                   <Image src="/card2.png" width={130} height={100} quality={100} className="w-36 h-14 absolute end-4 top-16 rounded-xl" alt="card-img"  placeholder="empty"   />
                   <Image src="/card3.png" width={130} height={100} quality={100} className="w-36 h-14 absolute start-3 bottom-24 rounded-xl" alt="card-img"  />
                   <Image src="/card4.png" width={130} height={100} quality={100} className="w-36 h-10 absolute end-4 bottom-32 rounded-xl" alt="card-img" />
                   <Image src="/card5.png" width={130} height={100} quality={100} className="w-36 h-12 absolute bottom-1 sm:-bottom-2 max-[361px]:bottom-9 start-1/3 rounded-xl" alt="card-img" />
                </div> 

              </div> 
                 
           </div>

       </div>
        {/* some texts  */}
       <div className="mt-20 min-[990px]:flex min-[990px]:justify-start min-[990px]:ml-[6.8%] ">
          <svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="mx-auto min-[990px]:mt-14">
          <path d="M0 50.5C0 9.325 8.825 0.5 50 0.5C91.175 0.5 100 9.325 100 50.5C100 91.675 91.175 100.5 50 100.5C8.825 100.5 0 91.675 0 50.5Z" fill="white"/> <rect width="36" height="36" transform="translate(32 32.5)" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40.999 43.0002V44.7563C39.2512 45.3741 37.999 47.0409 37.999 49.0002V59.5002C37.999 61.9855 40.0137 64.0002 42.499 64.0002H57.499C59.9843 64.0002 61.999 61.9855 61.999 59.5002V49.0002C61.999 47.0409 60.7468 45.3741 58.999 44.7563V43.0002C58.999 39.6865 56.3127 37.0002 52.999 37.0002H46.999C43.6853 37.0002 40.999 39.6865 40.999 43.0002ZM52.999 40.0002H46.999C45.3422 40.0002 43.999 41.3434 43.999 43.0002V44.5002H55.999V43.0002C55.999 41.3434 54.6559 40.0002 52.999 40.0002ZM49.999 56.5002C51.6559 56.5002 52.999 55.1571 52.999 53.5002C52.999 51.8434 51.6559 50.5002 49.999 50.5002C48.3422 50.5002 46.999 51.8434 46.999 53.5002C46.999 55.1571 48.3422 56.5002 49.999 56.5002Z" fill="#122231"/>
          </svg>

          <div className="mt-10 w-screen "> 
              <h1 className="text-center text-3xl font-bold text-gray-900 px-7 
                   min-[990px]:text-start">Your security is our priority</h1>
              <p className="text-center mt-3 text-gray-500 px-12
                  min-[990px]:text-start ">PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL <br className="max-[990px]:hidden" /> security encryption to ensure that your information is comepletely protected from fraud.</p>
             
              <div className="flex justify-center mt-4 px-9 min-[990px]:justify-start min-[990px]:px-5">
                <svg className="-mt-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L20 15L15 20" stroke="#122231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#122231" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p className="ml-1 font-bold text-gray-900">More on our security measures</p>
              </div>
          </div>
       </div>

       {/* grid */}
       <div className="mt-32 w-screen min-[1023px]:grid min-[1023px]:grid-cols-2 ">
              <div className="w-[80%] mx-auto mb-5 md:w-[50%] md:mx-auto min-[1023px]:w-[70%] min-[1023px]:mt-24">
                  <h1 className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-normal">5 ways to build <br className="max-[1122px]:hidden"/> your savings</h1>
                  <p className="text-center mt-3 text-gray-500 px-5 leading-relaxed 
                     min-[1023px]:text-3xl min-[1023px]:text-gray-900 min-[1023px]:font-thin">Earn 5%-15% when you save with any of these PiggyVest plans.</p>
              </div>

              <div onMouseEnter={() => handleHover('blue')} onMouseLeave={() => handleLeave('blue')} 
                   className={`w-[90%] mt-12 h-[29rem] mx-auto rounded-3xl relative overflow-hidden cursor-pointer md:w-[68%] min-[1023px]:mt-0
                    min-[1023px]:w-[85%] min-[1023px]:h-[30rem] min-[1023px]:mr-[12%] ${hover === 'blue' ? 'bg-blue-700' : 'bg-slate-50'}`}>
                  <div className="py-16 px-6">
                      <h1 className={`text-center text-3xl font-bold min-[1023px]:text-start min-[1023px]:text-4xl
                        ${hover === 'blue' ? 'text-gray-200' : 'text-blue-900'}`}>Automated Savings</h1>
                      <p className={`text-center mt-3 min-[1023px]:text-start min-[1023px]:text-2xl min-[1023px]:font-thin
                        ${hover === 'blue' ? 'text-gray-50' : 'text-gray-500'}`} >Build a dedicated savings faster <br className="max-[1022px]:hidden"/> on your terms, automatically or  <br className="max-[1022px]:hidden"/>  manually.</p>
                  </div>
                  <div className="flex absolute bottom-10 px-8 ">
                      <svg className={`h-6 w-6 -mt-1 ${hover === 'blue' ? 'text-gray-200' : 'text-gray-900'}`}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/></svg>
                      <p className={`ml-1 font-bold ${hover === 'blue' ? 'text-gray-200' : 'text-gray-900'}`}>Piggybank</p>
                  </div>
                  <div className={`absolute ${hover === 'blue' ? 'end-5 bottom-0 delay-100 duration-700' : '-bottom-40 -end-40 min-[1023px]:-bottom-60 delay-100 duration-700'}`}>
                   <Image width={440} height={440} alt="PiggyVest" className="h-44 w-44  min-[1023px]:h-60 min-[1023px]:w-60 lg:rounded-t-[2.4rem] rounded-t-[1.7rem]" src="/slider1.png"/>
                  </div>
              </div>  

              <div onMouseEnter={() => handleHover('sky')} onMouseLeave={() => handleLeave('sky')}
                   className={`mt-10 w-[90%] h-[29rem] mx-auto rounded-3xl relative overflow-hidden cursor-pointer md:w-[68%]
                    min-[1023px]:w-[85%] min-[1023px]:h-[30rem] min-[1023px]:ml-[12%] ${hover === 'sky' ? 'bg-sky-500' : 'bg-slate-50'}`}>
                  <div className="py-16 px-6">
                      <h1 className={`text-center text-3xl font-bold  min-[1023px]:text-start min-[1023px]:text-4xl
                      ${hover === 'sky' ? 'text-gray-200' : 'text-sky-500'}`}>Fixed Savings</h1>
                      <p className={`text-center mt-3 min-[1023px]:text-start min-[1023px]:text-2xl min-[1023px]:font-thin
                       ${hover === 'sky' ? 'text-gray-50' : 'text-gray-500'}`}>Lock money away for a fixed <br className="max-[1022px]:hidden"/> duration without having access <br className="max-[1022px]:hidden"/> to it until maturity. It is like having <br className="max-[1022px]:hidden"/> a custom fixed deposit.</p>
                  </div>
                  <div className="flex absolute bottom-10 px-8 ">
                      <svg className={`h-6 w-6 -mt-1 ${hover === 'sky' ? 'text-gray-200' : 'text-gray-900'}`}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/></svg>
                      <p className={`ml-1 font-bold ${hover === 'sky' ? 'text-gray-200' : 'text-gray-900'}`}>Safelock</p>
                  </div>
                  <div className={`absolute ${hover === 'sky' ? 'end-5 bottom-0 delay-100 duration-700' : '-bottom-40 -end-40 min-[1023px]:-bottom-60  delay-100 duration-700'}`}>
                   <Image width={440} height={440} alt="PiggyVest" className="h-44 w-44 min-[1023px]:h-60 min-[1023px]:w-60 lg:rounded-t-[2.4rem] rounded-t-[1.7rem]" src="/slider2.png"/>
                  </div>
              </div> 

              <div onMouseEnter={() => handleHover('green')} onMouseLeave={() => handleLeave('green')} 
                   className={`mt-10 w-[90%] h-[29rem] mx-auto rounded-3xl relative overflow-hidden cursor-pointer md:w-[68%]
                    min-[1023px]:w-[85%] min-[1023px]:h-[30rem] min-[1023px]:mr-[12%] ${hover === 'green' ? 'bg-green-400' : 'bg-slate-50'}`}>
                  <div className="py-16 px-6">
                      <h1 className={`text-center text-3xl font-bold min-[1023px]:text-start min-[1023px]:text-4xl 
                      ${hover === 'green' ? 'text-gray-200' : 'text-green-500'}`}>Goal-oriented Savings</h1>
                      <p className={`text-center mt-3 min-[1023px]:text-start min-[1023px]:text-2xl min-[1023px]:font-thin
                      ${hover === 'green' ? 'text-gray-50' : 'text-gray-500'}`}>Reach all your savings goals <br className="max-[1022px]:hidden"/>  faster. Save towards multiple <br className="max-[1022px]:hidden"/>  goals on your own or with a <br className="max-[1022px]:hidden"/>  group.</p>
                  </div>
                  <div className="flex absolute bottom-10 px-8 ">
                      <svg className={`h-6 w-6 -mt-1 ${hover === 'green' ? 'text-gray-200' : 'text-gray-900'}`}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/></svg>
                      <p className={`ml-1 font-bold ${hover === 'green' ? 'text-gray-200' : 'text-gray-900'}`}>Target Savings</p>
                  </div>
                  <div className={`absolute ${hover === 'green' ? 'end-5 bottom-0 delay-100 duration-700' : '-bottom-40 -end-44 min-[1023px]:-bottom-60  delay-100 duration-700'}`}>
                   <Image width={440} height={440} alt="PiggyVest" className="h-44 w-44 min-[1023px]:h-60 min-[1023px]:w-60 lg:rounded-t-[2.4rem] rounded-t-[1.7rem]" src="/slider3.png"/>
                  </div>
              </div> 

              <div onMouseEnter={() => handleHover('pink')} onMouseLeave={() => handleLeave('pink')} 
                   className={`mt-10 w-[90%] h-[29rem] mx-auto rounded-3xl relative overflow-hidden cursor-pointer md:w-[68%]
                   min-[1023px]:w-[85%] min-[1023px]:h-[30rem] min-[1023px]:ml-[12%]  ${hover === 'pink' ? 'bg-pink-400' : 'bg-slate-50'}`}>
                  <div className="py-16 px-6">
                      <h1 className={`text-center text-3xl font-bold min-[1023px]:text-start min-[1023px]:text-4xl  
                      ${hover === 'pink' ? 'text-gray-200' : 'text-pink-600'}`}>Flex Naira</h1>
                      <p className={`text-center mt-3 min-[1023px]:text-start min-[1023px]:text-2xl min-[1023px]:font-thin
                      ${hover === 'pink' ? 'text-gray-50' : 'text-gray-500'}`}>Save, transfer, manage, <br className="max-[1022px]:hidden"/> organise, and withdraw your <br className="max-[1022px]:hidden"/> money at any time.</p>
                  </div>
                  <div className="flex absolute bottom-10 px-8 ">
                      <svg className={`h-6 w-6 -mt-1 ${hover === 'pink' ? 'text-gray-200' : 'text-gray-900'}`}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/></svg>
                      <p className={`ml-1 font-bold ${hover === 'pink' ? 'text-gray-200' : 'text-gray-900'}`}>Flex Naira</p>
                  </div>
                  <div className={`absolute ${hover === 'pink' ? 'end-5 bottom-0 delay-100 duration-700 ' : '-bottom-40 -end-44 min-[1023px]:-bottom-60  delay-100 duration-700'}`}>
                   <Image width={440} height={440} alt="PiggyVest" className="h-44 w-44 min-[1023px]:h-60 min-[1023px]:w-60 lg:rounded-t-[2.4rem] rounded-t-[1.7rem]" src="/slider4.png"/>
                  </div>
              </div>

              <div onMouseEnter={() => handleHover('gray')} onMouseLeave={() => handleLeave('gray')} 
                   className={`mt-10 w-[90%] h-[29rem] mx-auto rounded-3xl relative overflow-hidden cursor-pointer md:w-[68%]
                    min-[1023px]:w-[85%] min-[1023px]:h-[30rem] min-[1023px]:mr-[12%]  ${hover === 'gray' ? 'bg-gray-800' : 'bg-slate-50'}`}>
                  <div className="py-16 px-6">
                      <h1 className={`text-center text-3xl font-bold min-[1023px]:text-start min-[1023px]:text-4xl   
                      ${hover === 'gray' ? 'text-gray-200' : 'text-gray-900'}`}>Flex Dollar</h1>
                      <p className={`text-center mt-3 min-[1023px]:text-start min-[1023px]:text-2xl min-[1023px]:font-thin
                      ${hover === 'gray' ? 'text-gray-50' : 'text-gray-500'}`}>Save and grow your money in <br className="max-[1022px]:hidden"/> foreign currencies such as <br className="max-[1022px]:hidden"/> Dollars.</p>
                  </div>
                  <div className="flex absolute bottom-10 px-8 ">
                      <svg className={`h-6 w-6 -mt-1 ${hover === 'gray' ? 'text-gray-200' : 'text-gray-900'}`}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/></svg>
                      <p className={`ml-1 font-bold ${hover === 'gray' ? 'text-gray-200' : 'text-gray-900'}`}>Flex Dollar</p>
                  </div>
                  <div className={`absolute ${hover === 'gray' ? 'end-5 bottom-0 delay-100 duration-700 ' : '-bottom-40 -end-44 min-[1023px]:-bottom-60  delay-100 duration-700'}`}>
                   <Image width={440} height={440} alt="PiggyVest" className="h-44 w-44 min-[1023px]:h-60 min-[1023px]:w-60 lg:rounded-t-[2.4rem] rounded-t-[1.7rem]" src="/slider5.png"/>
                  </div>
              </div>
       </div>

       {/* white bg */}
       <div className="w-screen h-[60rem] bg-white mt-28 ">
       
             <h1 className="pt-16 text-center text-3xl min-[580px]:text-5xl font-bold text-gray-900 px-7">Diverse ways to Invest</h1>
             <p className=" text-center mt-3 text-lg min-[580px]:text-2xl text-gray-500 px-12">Grow your money and invest for your future confidently.</p>  
      
          <div  className={`mt-16 w-[90%] md:w-[80%] min-[1023px]:w-[90%] xl:w-[85%] xl:h-[32rem]  h-[40rem] bg-violet-700 mx-auto rounded-3xl relative overflow-hidden cursor-pointer `}>
                  <div className="mt-16 ">
                      <h1 className={`text-center text-3xl font-bold px-6 text-gray-100 
                             min-[1023px]:text-4xl min-[1023px]:text-start min-[1023px]:px-16`}>Earn Up to 25% returns</h1>
                      <p className={`text-center text-lg mt-5 px-4 md:px-14 text-gray-300
                            min-[1023px]:text-start min-[1023px]:text-2xl min-[1023px]:px-16 xl:text-xl xl:mt-8`} >Invest securely and confidently <br className="max-[1102px]:hidden"/> on the go. Grow your money <br className="max-[1102px]:hidden"/> confidently by investing in pre- <br className="max-[1102px]:hidden"/>vetted investment <br className="max-[1102px]:hidden"/>opportunities.</p>
                  </div>
                  <div className="flex justify-center mt-5  text-gray-100 lg:absolute lg:bottom-10 lg:px-8 ">
                      <svg className={`h-7 w-6 -mt-1 xl:w-7 `} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/></svg>
                      <p className={`ml-1 font-bold xl:text-lg`}>Learn about Investments</p>
                  </div>
                  <div className={`absolute w-[100%] h-[50%] md:h-[60%] max-[281px]:h-[40%] xl:h-[88%] flex justify-center xl:justify-end  bottom-0`}>
                      <Image width={360} height={100} quality={100} alt="PiggyVest" className=" h-[100%] w-[85%] md:w-[60%] min-[1023px]:w-[45%] xl:w-[36%] xl:mr-12  lg:rounded-t-[3.5rem] rounded-t-[2.7rem]" src="/purple.png"/>
                  </div>
          </div>  
       </div>

       {/* youtube Video */}
       <div>
          <div>
             <h1 className="pt-16 text-center text-3xl min-[580px]:text-5xl font-bold text-gray-900 px-7">Meet Our Saver of the Month</h1>
             <p className=" text-center mt-6 text-lg min-[580px]:text-2xl text-gray-500 px-8 md:px-[20%]">Every month, we shine a spotlight on one saver, asking them about their savings culture and how piggyvest has helped them.</p>  
          </div>
          
          <div className=" mt-14 lg:w-[47.42%] w-[75%] h-[24.4rem] bg-slate-200 mx-auto rounded-2xl overflow-hidden container">
            <YouTube videoId={videoId} opts={opts}/>
          </div>
       </div>

       <div className="lg:flex lg:flex-row-reverse lg:justify-around mt-20">
          <div className="lg:w-[50%] lg:h-64 lg:mt-32 lg:-ml-48">
               <h1 className="pt-20 text-center text-3xl min-[580px]:text-4xl min-[580px]:px-12 font-bold text-gray-900 px-7
              lg:text-start lg:px-0 lg:text-3xl">Join 4+ million people who save <br className="max-[1122px]:hidden"/>  and invest with us</h1> 
               <div className="flex justify-center mt-7 w-[90%]  h-20  mx-auto lg:justify-start lg:ml-0">
                  <button className="flex my-auto border border-gray-400 h-12 w-36 rounded-2xl
                          hover:-translate-y-2 hover:delay-300 duration-300">
                      <Image width={18} height={22} quality={100} className="my-auto ml-3" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/apple_icon_32ccc572ff/apple_icon_32ccc572ff.svg" alt="download-apple" />
                      <p className="my-auto ml-2 font-bold text-sm text-gray-800">Get on Iphone</p>
                  </button>
                  <button className="flex my-auto  ml-4 border border-gray-400 h-12 w-40 rounded-2xl
                          hover:-translate-y-2 hover:delay-100 duration-700">
                      <Image width={24} height={24} quality={100} className="my-auto ml-3"  src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg" alt="download-google" />
                      <p className="my-auto ml-1 font-bold text-sm  text-gray-800" >Get on Android</p>
                  </button>  
               </div>
          </div>

          <div className="mt-7 w-screen h-[26rem] relative overflow-hidden max-[1022px]:bg-gradient-to-b max-[1022px]:from-slate-200 max-[1022px]:to-white  flex justify-center
                       lg:w-[60%] lg:h-[32rem] ">
              <Image width={360} height={100} quality={100} className="w-[85%] md:w-[45%] h-[100%] absolute -bottom-10 lg:start-32 lg:w-[55%]" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/fallback_Img_2ccaefc7f6/fallback_Img_2ccaefc7f6.png" alt="piggy" /> 
          </div> 
       </div>

    </main> 
  )
}