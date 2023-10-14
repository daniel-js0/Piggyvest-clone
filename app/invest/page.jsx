"use client"
import { useState, useEffect } from "react"

import NavInvest from "../compnents/NavInvest";
import Button from "../compnents/Button";
import Link from "next/link";

const Invest = () => {
                const [invScroll, setinvScroll ] = useState(false);

                useEffect(() => {
                  const handleScroll = () => {
                    const scrollPosition = window.scrollY;

                    const threshold = 50; 

                    if (scrollPosition > threshold) {
                      setinvScroll(true);
                    } else {
                      setinvScroll(false);
                    }
                  };

                  window.addEventListener('scroll', handleScroll);

                  return () => {
                    window.removeEventListener('scroll', handleScroll);
                  };
                }, []);

              
                    
  return (
    <main>      
         <NavInvest invScroll={invScroll}/>

         <div className="relative">
            <div  className={`mt-20 w-[100%]  min-[1023px]:h-[41rem]  h-[60rem] md:h-[65rem] bg-violet-700  relative overflow-hidden `}>
                  <div className="min-[1023px]:pt-48 pt-32">
                      <h1 className={`text-center text-5xl font-bold px-6 text-gray-100 
                             min-[1023px]:text-5xl min-[1023px]:text-start xl:px-24 min-[1023px]:px-10`}>Invest on the go</h1>
                      <p className='h-12 w-44 mx-auto mt-6 rounded-full bg-slate-200 py-3 px-5 font-semibold xl:ml-24 min-[1023px]:ml-10 text-violet-700'>Up to 35% returns</p>
                      <p className={`text-center text-xl mt-5 px-6 md:px-48 text-gray-300
                            min-[1023px]:text-start xl:px-24 min-[1023px]:px-10  min-[1023px]:text-xl min-[1023px]:mt-8`} >Invest securely and confidently on the go.<br className="max-[1023px]:hidden"/> Up to 25% returns, 6-12 month duration.</p>
                  </div>
                 
                  <div  className={`absolute w-[100%] h-[45%] md:h-[50%] max-[281px]:h-[40%]  min-[1023px]:h-[80%] xl:h-[88%] flex justify-center  min-[1023px]:justify-end  bottom-0`}>
                    <img className=" h-[100%] w-[80%] md:w-[53%] min-[1023px]:w-[38%] min-[1023px]:mr-10 xl:mr-24 xl:w-[33%]" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/i_Phone_14_invest_67e86f3edf_761a6d7c25/i_Phone_14_invest_67e86f3edf_761a6d7c25.png"></img>
                  </div>
            </div>  

            <div className="w-[100%] xl:w-[30%] min-[1023px]:w-[40%]  h-36 absolute max-[281px]:bottom-[39%] bottom-[45%] md:bottom-[55%]  lg:bottom-[17%] min-[1023px]:ml-2 xl:ml-16 "> 
               <Button />
            </div>
         </div>

         <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center pt-20 text-gray-800">Simple investments with great returns</h1>
            <p className="text-center px-5 pt-4 text-gray-600 pb-16 md:text-xl">Investments are made readily accessible to everyone</p>
         </div>
    </main>

  )
}

export default Invest