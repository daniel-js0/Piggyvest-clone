"use client"
import { useState, useEffect } from "react"

import NavInvest from "../compnents/NavInvest";
import Button from "../compnents/Button";

const Invest = () => {
                const [invScroll, setinvScroll ] = useState(false);
                const [look, setLook] = useState(false)

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

                function handleMove(){
                  setLook(true)
                }
                    
  return (
    <div>      
       <NavInvest invScroll={invScroll}/>
       
        <div  className={`mt-20 w-[100%]  xl:h-[41rem]  h-[60rem] md:h-[65rem] bg-violet-700  relative overflow-hidden `}>
                  <div className="pt-32 ">
                      <h1 className={`text-center text-5xl font-bold px-6 text-gray-100 
                             min-[1023px]:text-4xl min-[1023px]:text-start min-[1023px]:px-16`}>Invest on the go</h1>
                      <p className='h-12 w-44 mx-auto mt-6 rounded-full bg-slate-200 py-3 px-5 font-semibold '>Up to 35% returns</p>
                      <p className={`text-center text-xl mt-5 px-6 md:px-48 text-gray-300
                            min-[1023px]:text-start min-[1023px]:text-2xl min-[1023px]:px-16 xl:text-xl xl:mt-8`} >Invest securely and confidently on the go.<br className="max-[1102px]:hidden"/> Up to 25% returns, 6-12 month duration.</p>
                  </div>
                 
                  <Button />

                  <button onMouseEnter={handleMove}  className={`flex my-auto  ml-4 bg-gray-800 h-14 w-48 rounded-xl
                          ${look && 'hover:bg-black cursor-pointer hover:-translate-y-2 hover:delay-100 duration-700'}`}>
                      <img className="my-auto ml-3"  src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg" alt="download-google" width="24" height="24"/>
                      <p className="my-auto ml-1 font-bold  text-gray-200" >Get on Android</p>
                  </button> 
                 
                  <div  className={`absolute w-[100%] h-[45%] md:h-[50%] max-[281px]:h-[40%] xl:h-[88%] flex justify-center xl:justify-end  bottom-0`}>
                    <img className=" h-[100%] w-[80%] md:w-[53%] min-[1023px]:w-[45%] xl:w-[36%] xl:mr-12" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/i_Phone_14_invest_67e86f3edf_761a6d7c25/i_Phone_14_invest_67e86f3edf_761a6d7c25.png"></img>
                  </div>
          </div>  
      

        <Button />
    </div>

  )
}

export default Invest