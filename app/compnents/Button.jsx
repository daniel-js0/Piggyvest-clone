import Image from "next/image";

const Button = () => {
  return (

    
      <div className="flex justify-center mt-7 w-[90%]  h-20  mx-auto 
            min-[1023px]:justify-start min-[1023px]:px-2">
            <button className="flex my-auto bg-gray-800 h-14 w-44 rounded-xl
                hover:bg-black hover:-translate-y-2 hover:delay-100 duration-700">
                <Image width={18} height={22} quality={100}  className="my-auto ml-3.5 md:ml-5 lg:ml-3" src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/white_Apple_Logo_768cf7ce21/white_Apple_Logo_768cf7ce21.svg" alt="download-apple"/>
                <p className="my-auto ml-2 font-bold text-gray-200">Get on Iphone</p>
            </button>
            <button className="flex my-auto  ml-4 bg-gray-800 h-14 w-48 rounded-xl
                hover:bg-black hover:-translate-y-2 hover:delay-100 duration-700">
                <Image width={24} height={24} quality={100}  className="my-auto ml-3.5 md:ml-5 lg:ml-3"  src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg" alt="download-google" />
                <p className="my-auto ml-1 font-bold  text-gray-200" >Get on Android</p>
            </button>  
      </div>
 
  )
}

export default Button