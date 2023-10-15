import React from 'react'
import Image from "next/image";


const ButtonLite = () => {
  return (
  
        <div className="flex justify-center mt-7 w-[90%]  h-20  mx-auto 
            min-[1023px]:justify-start">
            <button className="flex my-auto bg-gray-50 h-14 w-44 rounded-xl border border-gray-300
                hover:-translate-y-2 hover:delay-100 duration-700">
                <Image width={18} height={22} quality={100} className="my-auto ml-3" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/apple_icon_32ccc572ff/apple_icon_32ccc572ff.svg" alt="download-apple" />
                <p className="my-auto ml-2 font-bold text-gray-800">Get on Iphone</p>
            </button>
            <button className="flex my-auto bg-gray-50  ml-4 bg-gray-60 h-14 w-48 rounded-xl border border-gray-300
                hover:-translate-y-2 hover:delay-100 duration-700">
                <Image width={24} height={24} quality={100}  className="my-auto ml-3.5 md:ml-5 lg:ml-3"  src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg" alt="download-google" />
                <p className="my-auto ml-1 font-bold  text-gray-800" >Get on Android</p>
            </button>  
      </div>

  )
}

export default ButtonLite