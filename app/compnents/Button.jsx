
const Button = () => {
  return (

            <div className="flex justify-center mt-7 w-[90%]  h-20  mx-auto lg:justify-start lg:ml-0 ">
                  <button className="flex my-auto border border-gray-400 h-12 w-36 rounded-2xl
                          hover:-translate-y-2 hover:delay-300 duration-300">
                      <img className="my-auto ml-3" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/apple_icon_32ccc572ff/apple_icon_32ccc572ff.svg" alt="download-apple" width="16" height="20"/>
                      <p className="my-auto ml-2 font-bold text-sm text-gray-800">Get on Iphone</p>
                  </button>
                  <button className="flex my-auto  ml-4 border border-gray-400 h-12 w-40 rounded-2xl
                          hover:-translate-y-2 hover:delay-100 duration-700">
                      <img className="my-auto ml-3"  src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg" alt="download-google" width="24" height="24"/>
                      <p className="my-auto ml-1 font-bold text-sm  text-gray-800" >Get on Android</p>
                  </button>  
            </div>
  
  )
}

export default Button