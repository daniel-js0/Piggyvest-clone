"use client"
import { useState, useEffect } from "react"
import Image from "next/image";

import NavInvest from "../compnents/NavInvest";
import Button from "../compnents/Button";
import Logo from './farm.png'
import Logosmall from './farm-sm.png'
import SlideInText from "../compnents/SlideInText";

const Invest = () => {
                const [invScroll, setinvScroll ] = useState(false);
                const [isVisible, setIsVisible] = useState(false);


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

                  window.addEventListener('scroll', handleScroll);

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
         <NavInvest invScroll={invScroll}/>

         <div className="relative">
            <div  className={`mt-16 w-[100%]  min-[1023px]:h-[41rem]  h-[60rem] md:h-[65rem] bg-violet-700  relative overflow-hidden `}>
                  <div className="min-[1023px]:pt-48 pt-32">
                      <h1 className={`text-center text-5xl font-bold px-6 text-gray-100 
                             min-[1023px]:text-5xl min-[1023px]:text-start xl:px-24 min-[1023px]:px-10`}>
                               
                               <SlideInText text="Invest on the go"/> 
                              
                               </h1>
                      <p className={`h-12 w-44 mx-auto mt-6 rounded-full bg-slate-200 py-3 px-3 lg:px-5 font-semibold xl:ml-24 min-[1023px]:ml-10 text-violet-700
                                  delay-150 duration-300 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'} `}>Up to 35% returns </p>
                      <p className={`text-center text-xl mt-5 px-6 md:px-48 text-gray-300 min-[1023px]:text-start xl:px-24 min-[1023px]:px-10  min-[1023px]:text-xl min-[1023px]:mt-
                              delay-100 duration-500 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'} `} >Invest securely and confidently on the go.<br className="max-[1023px]:hidden"/> Up to 25% returns, 6-12 month duration.</p>
                  </div>
                 
                  <div  className={`absolute w-[100%] h-[45%] md:h-[50%] max-[281px]:h-[40%]  min-[1023px]:h-[80%] xl:h-[88%] flex justify-center  min-[1023px]:justify-end  bottom-0`}>
                    <Image width={310} height={208} quality={100} alt="PiggyVest"  className={`h-[100%] w-[80%] md:w-[53%] min-[1023px]:w-[38%] min-[1023px]:mr-10 xl:mr-24 xl:w-[33%]  
                       delay-75 duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} `} src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/i_Phone_14_invest_67e86f3edf_761a6d7c25/i_Phone_14_invest_67e86f3edf_761a6d7c25.png"/>
                  </div>
            </div>  

            <div className="w-[100%] xl:w-[30%] min-[1023px]:w-[40%]  h-36 absolute max-[281px]:bottom-[39%] bottom-[45%] md:bottom-[55%]  lg:bottom-[17%] min-[1023px]:ml-2 xl:ml-16 "> 
               <Button isVisible={isVisible} />
            </div>
         </div>

         <div>
            <h1 className="text-3xl md:text-5xl min-[539px]:text-4xl min-[539px]:px-5 font-bold text-center pt-20 text-gray-800">Simple investments with great returns</h1>
            <p className="text-center px-5 pt-4 text-gray-600 pb-16 md:text-xl">Investments are made readily accessible to everyone</p>
         </div>

         <div className="w-screen md:grid md:grid-cols-2  lg:grid-cols-3 lg:justify-around">
            <div className="relative mx-auto w-[90%] min-[539px]:w-[67%] md:w-[90%] xl:w-[78%] md:ml-7 lg:ml-6 xl:ml-[25%] h-[35rem] rounded-3xl bg-white border-t border-gray-300">
              <h1 className="text-center text-3xl font-bold pt-16 px-16 max-[281px]:px-7 text-purple-700 xl:text-start xl:px-5">Investments simplified</h1>
              <p className="text-center px-5 pt-8 text-gray-800 leading-normal xl:text-start">With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.</p>

              <Image width={310} height={208} quality={100} alt="" className="absolute bottom-0 ml-[10%] w-[80%] max-[281px]:h-[35%] h-[40%] " src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/IMG_5250_1_9_56234bc747_1c01526eb7/IMG_5250_1_9_56234bc747_1c01526eb7.png" />
            </div>

            <div className="relative mt-14 md:mt-0 mx-auto w-[90%] min-[539px]:w-[67%] md:w-[90%] xl:w-[78%] md:mr-7 lg:ml-4 xl:ml-16  h-[35rem] rounded-3xl bg-white border-t border-gray-300">
              <h1 className="text-center text-3xl font-bold pt-16 px-16 max-[281px]:px-7 text-purple-700 xl:text-start xl:px-5">Invest confidently</h1>
              <p className="text-center px-5 pt-8 text-gray-800 leading-normal xl:text-start">We work with leading licensed investment houses such as ARM, AIICO and Stanbic.</p>
              <Image width={310} height={208} quality={100} alt="" className="absolute bottom-0 ml-[10%] w-[80%] max-[281px]:h-[35%] h-[40%] " src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/IMG_5250_1_10_19f162a7df_098e6f349b/IMG_5250_1_10_19f162a7df_098e6f349b.png" />
            </div>

            <div className="relative mt-14 lg:mt-0 lg:ml-3 md:ml-[53%] mx-auto w-[90%] min-[539px]:w-[67%] md:w-[90%] xl:mr-[25%] xl:w-[78%] h-[35rem] rounded-3xl bg-white border-t border-gray-300">
              <h1 className="text-center text-3xl font-bold pt-16 px-16 max-[281px]:px-7 text-purple-700 xl:text-start xl:px-5">Diversify your portfolio</h1>
              <p className="text-center px-5 pt-8 text-gray-800 leading-normal xl:text-start">Invest in various industries such as fixed income instruments, agriculture, transportation, etc.</p>
              <Image width={310} height={208} quality={100} alt="" className="absolute bottom-0 ml-[10%] w-[80%] max-[281px]:h-[35%] h-[40%] " src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/IMG_5250_1_11_26239e95f8_fb876eec60/IMG_5250_1_11_26239e95f8_fb876eec60.png"/>
            </div>
         </div>

         <div className="mt-20 lg:mt-40 relative w-screen h-[48rem] md:h-[60rem] lg:h-[26rem]  bg-violet-700">
             <h1 className="text-center font-bold text-3xl md:text-5xl md:px-24 pt-20 lg:pt-12 text-gray-50 
                    lg:text-start">We have made it easier for <br className="max-[1023px]:hidden"/>  anyone to get started.</h1>
             <p className="text-center pt-3 px-6 text-gray-50 max-[281px]:text-sm md:text-xl md:px-24 md:pt-10
                    md:leading-relaxed lg:text-start ">Finally, you can access pre-vetted low-medium risk primary <br className="max-[1023px]:hidden"/>  and secondary investment opportunities easily with any <br className="max-[1023px]:hidden"/>  amount you have. No hidden fees/charges. Thorough due <br className="max-[1023px]:hidden"/>  diligence and pre-vetting on all investments are carried out for <br className="max-[1023px]:hidden"/>  maximum safety.</p>
             
             <Image src={Logosmall}   
               className="absolute bottom-0 h-[50%] max-[281px]:h-[45%] w-[100%] min-[539px]:hidden" alt="NDPR audit"  quality={100} placeholder='blur'/>
             <Image src={Logo}   
               className="absolute bottom-0 h-[50%] w-[100%] max-[539px]:hidden lg:w-[43%] lg:end-0 lg:h-[100%]" alt="NDPR audit"  quality={100} placeholder='blur'/>
         </div>

         <div className="pt-20">
            <h1 className="font-bold text-3xl md:text-5xl md:px-8 text-gray-800 text-center">Recent Opportunities on Investify</h1>
         </div>
         
         {/* grid */}
         <div className="lg:grid lg:grid-cols-3">
            <div className="w-[80%] md:w-[50%] lg:w-[85%] xl:ml-[16%] h-[29rem] mt-16 mx-auto rounded-3xl overflow-hidden bg-gray-50">
                    <Image width={310} height={208} quality={100} className="h-[30%] w-[100%]" src="https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/thumb.inv7660760425.jpg" alt="card image" class="image"/>

                    <h1 className="font-bold text-3xl  text-gray-800 text-start px-7 mt-12"> CORPORATE DEBT NOTES SERIES XIV </h1>

                    <div className="flex mt-5 ml-7 font-semibold">
                        <div className="">
                          <p className="text-gray-600">₦5,000</p>
                          <p className="text-gray-600" >per unit</p>
                        </div>

                        <div className="ml-[34%]">
                          <p className="text-gray-600" >530</p>
                          <p className="text-gray-600" >Investors</p>
                        </div>
                    </div>
          
                    <div className="h-10 w-24 bg-rose-200 rounded-full mt-6 ml-7">
                        <p className="text-center pt-2 text-rose-800 font-semibold"> Sold out</p> 
                    </div>

            </div>

            <div className="w-[80%] md:w-[50%] lg:w-[85%] h-[29rem] mt-16 mx-auto rounded-3xl overflow-hidden bg-gray-50">
              <Image width={310} height={208} quality={100}className="h-[30%] w-[100%]" src="https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/thumb.inv5451cd4fa2.jpg" alt="card image" class="image"/>
             
              <h1 className="font-bold text-3xl  text-gray-800 text-start px-7 mt-12"> CORPORATE DEBT NOTES SERIES XIII </h1>

              <div className="flex mt-5 ml-7 font-semibold">
                  <div className="">
                    <p className="text-gray-600">₦5,000</p>
                    <p className="text-gray-600" >per unit</p>
                  </div>

                  <div className="ml-[34%]">
                    <p className="text-gray-600" >563</p>
                    <p className="text-gray-600" >Investors</p>
                  </div>
              </div>
   
              <div className="h-10 w-24 bg-rose-200 rounded-full mt-6 ml-7">
                  <p className="text-center pt-2 text-rose-800 font-semibold"> Sold out</p> 
              </div>

            </div>

            <div className="w-[80%] md:w-[50%] lg:w-[85%] xl:mr-[16%] h-[29rem] mt-16 mx-auto rounded-3xl overflow-hidden bg-gray-50">
                    <Image width={310} height={208} quality={100} className="h-[30%] w-[100%]" src="https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/thumb.inv7660760425.jpg" alt="card image" class="image"/>

                    <h1 className="font-bold text-3xl  text-gray-800 text-start px-7 mt-12"> CORPORATE DEBT NOTES SERIES XII </h1>

                    <div className="flex mt-5 ml-7 font-semibold">
                        <div className="">
                          <p className="text-gray-600">₦5,000</p>
                          <p className="text-gray-600" >per unit</p>
                        </div>

                        <div className="ml-[34%]">
                          <p className="text-gray-600" >232</p>
                          <p className="text-gray-600" >Investors</p>
                        </div>
                    </div>
          
                    <div className="h-10 w-24 bg-rose-200 rounded-full mt-6 ml-7">
                        <p className="text-center pt-2 text-rose-800 font-semibold"> Sold out</p> 
                    </div>

            </div>

            <div className="w-[80%] md:w-[50%] lg:w-[85%] xl:ml-[16%] h-[29rem] mt-16 mx-auto rounded-3xl overflow-hidden bg-gray-50">
                   <Image width={310} height={208} quality={100} className="h-[30%] w-[100%]" src="https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/thumb.inv7bbae70c7a.jpg" alt="card image" class="image"/>
                    
                    <h1 className="font-bold text-3xl  text-gray-800 text-start px-7 mt-12"> CORPORATE DEBT NOTES SERIES XI</h1>
  
                    <div className="flex mt-5 ml-7 font-semibold">
                        <div className="">
                          <p className="text-gray-600">₦5,000</p>
                          <p className="text-gray-600" >per unit</p>
                        </div>

                        <div className="ml-[34%]">
                          <p className="text-gray-600" >250</p>
                          <p className="text-gray-600" >Investors</p>
                        </div>
                    </div>
          
                    <div className="h-10 w-24 bg-rose-200 rounded-full mt-6 ml-7">
                        <p className="text-center pt-2 text-rose-800 font-semibold"> Sold out</p> 
                    </div>

            </div>
            
            <div className="w-[80%] md:w-[50%] lg:w-[85%] h-[29rem] mt-16 mx-auto rounded-3xl overflow-hidden bg-gray-50">
                    <Image width={310} height={208} quality={100} className="h-[30%] w-[100%]" src="https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/thumb.inv3bb22b27a3.jpg" alt="card image" class="image"/>  
                    <h1 className="font-bold text-3xl  text-gray-800 text-start px-7 mt-12"> CORPORATE DEBT NOTES SERIES X</h1>
  
                    <div className="flex mt-5 ml-7 font-semibold">
                        <div className="">
                          <p className="text-gray-600">₦5,000</p>
                          <p className="text-gray-600" >per unit</p>
                        </div>

                        <div className="ml-[34%]">
                          <p className="text-gray-600" >245</p>
                          <p className="text-gray-600" >Investors</p>
                        </div>
                    </div>
          
                    <div className="h-10 w-24 bg-rose-200 rounded-full mt-6 ml-7">
                        <p className="text-center pt-2 text-rose-800 font-semibold"> Sold out</p> 
                    </div>

            </div>

            <div className="w-[80%] md:w-[50%] lg:w-[85%] xl:mr-[16%] h-[29rem] mt-16 mb-16 mx-auto rounded-3xl overflow-hidden bg-gray-50">
                    <Image width={310} height={208} quality={100} className="h-[30%] w-[100%]"  src="https://storage.googleapis.com/piggybankservice.appspot.com/investmentimgfiles/thumb.inv9050c5052e.jpg" alt="card image" class="image"/>
                    <h1 className="font-bold text-3xl  text-gray-800 text-start px-7 mt-12"> CORPORATE DEBT NOTES SERIES IX</h1>
  
                    <div className="flex mt-5 ml-7 font-semibold">
                        <div className="">
                          <p className="text-gray-600">₦5,000</p>
                          <p className="text-gray-600" >per unit</p>
                        </div>

                        <div className="ml-[34%]">
                          <p className="text-gray-600" >1969</p>
                          <p className="text-gray-600" >Investors</p>
                        </div>
                    </div>
          
                    <div className="h-10 w-24 bg-rose-200 rounded-full mt-6 ml-7">
                        <p className="text-center pt-2 text-rose-800 font-semibold"> Sold out</p> 
                    </div>

            </div>
         </div>
     
    </main>

  )
}

export default Invest