"use client"
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';

                
const Navbar = ({scroll, setShowStory, showStory,  click, handleClick, clickfaq, handleClickfaq }) => {
               const [save, setSave] = useState(false);
               const [resource, setResource] = useState(false);
               const [offcanvas, setOffcanvas] = useState()

               function handleHover(){  setSave(true);}
               function handleHover2(){ setSave(false);}
               function handleHover3(){ setResource(true);}
               function handleHover4(){ setResource(false);}

            

               function handleOffcanvas(){
                 setOffcanvas(!offcanvas);  
                 setShowStory(!showStory); 
                }

  return (
        
    
    <nav className={`z-20 fixed top-0 flex flex-row justify-between gap-14 h-20 w-screen 
                    md:h-24 md:gap-20 ${scroll ? ' bg-gray-50 shadow-xl' : 'bg-slate-100'}`}>
        <div className='flex flex-row justify-start gap-14 ml-5 md:ml-[2%] xl:ml-[8%]'>
              <Link href="/">
                <svg width="192" height="37" viewBox="0 0 192 37" fill="none" xmlns="http://www.w3.org/2000/svg"
                className='h-20 w-40 md:h-24 md:w-44'>
                <path d="M52.0232 29.7485V36.606H47.7199V14.2856H52.0232V15.3526C53.2199 14.5758 54.7413 14.059 56.3265 14.059C61.2114 14.059 64.8025 17.9409 64.8025 22.5662C64.8025 27.1592 61.2438 31.0734 56.3265 31.0734C54.6766 31.0745 53.2209 30.5566 52.0232 29.7485ZM52.0232 20.5292V24.4759C52.7677 25.996 54.2558 26.9994 56.0028 26.9994C58.5267 26.9994 60.5003 25.0585 60.5003 22.5673C60.5003 20.0437 58.559 18.1351 56.0351 18.1351C54.2881 18.1351 52.7677 19.0738 52.0232 20.5292Z" fill="#0C1825"/><path d="M67.13 9.786C67.13 8.36291 68.1648 7.29481 69.5568 7.29481C70.9477 7.29481 72.0807 8.36187 72.0807 9.786C72.0807 11.1443 70.9487 12.2772 69.5568 12.2772C68.1648 12.2761 67.13 11.1443 67.13 9.786ZM67.389 14.285H71.757V30.8149H67.389V14.285Z" fill="#0C1825"/><path d="M74.3437 22.5022C74.3437 17.9406 77.9024 14.0921 82.8197 14.0921C84.4372 14.0921 85.9252 14.5128 87.1877 15.1915V14.2852H91.4586V29.8765C91.4586 34.1792 87.738 36.5075 83.0797 36.5075C80.0389 36.5075 77.1265 35.6023 75.2177 34.1134L76.997 31.0407C78.5822 32.1077 80.75 32.7874 83.0797 32.7874C86.0881 32.7874 87.0269 31.5909 87.1564 29.65C85.8626 30.4591 84.3745 30.9436 82.8207 30.9436C77.87 30.9446 74.3437 27.2569 74.3437 22.5022ZM87.1877 24.346V20.6583C86.4432 19.1058 84.8904 18.07 83.1434 18.07C80.6195 18.07 78.6459 20.0757 78.6459 22.5022C78.6459 25.0581 80.5871 26.8372 83.111 26.8372C84.9551 26.8362 86.4108 25.8986 87.1877 24.346Z" fill="#0C1825"/>  <path d="M94.0436 22.5022C94.0436 17.9406 97.6023 14.0921 102.52 14.0921C104.137 14.0921 105.625 14.5128 106.888 15.1915V14.2852H111.158V29.8765C111.158 34.1792 107.438 36.5075 102.78 36.5075C99.7388 36.5075 96.8265 35.6023 94.9176 34.1134L96.697 31.0407C98.2821 32.1077 100.45 32.7874 102.78 32.7874C105.788 32.7874 106.727 31.5909 106.856 29.65C105.562 30.4591 104.074 30.9436 102.521 30.9436C97.57 30.9446 94.0436 27.2569 94.0436 22.5022ZM106.888 24.346V20.6583C106.143 19.1058 104.59 18.07 102.843 18.07C100.319 18.07 98.3458 20.0757 98.3458 22.5022C98.3458 25.0581 100.287 26.8372 102.811 26.8372C104.655 26.8362 106.111 25.8986 106.888 24.346Z" fill="#0C1825"/><path d="M117.432 14.285L121.767 25.3157L126.232 14.285H130.762L121.25 36.6054H117.206L119.601 30.653L112.645 14.285H117.432Z" fill="#0C1825"/> <path d="M129.95 14.285H134.576L138.782 25.4452L142.956 14.285H147.486L140.854 30.8149H136.518L129.95 14.285Z" fill="#0C1825"/> <path d="M147.806 22.4377C147.806 17.78 151.138 13.9305 156.347 13.9305C161.167 13.9305 164.823 17.5535 164.92 22.3082C164.953 22.6966 164.953 23.1174 164.92 23.5371H151.882C152.011 25.8665 154.244 27.3867 156.637 27.3867C158.611 27.3867 159.775 26.8364 161.135 25.7046L163.497 28.1958C161.588 30.2015 159.679 31.1391 156.638 31.1391C151.041 31.1391 147.806 26.9659 147.806 22.4377ZM152.108 20.4644H160.455C160.034 18.9118 158.546 17.5535 156.281 17.5535C153.661 17.5535 152.562 18.8794 152.108 20.4644Z" fill="#0C1825"/><path d="M165.823 29.0358L167.926 25.607C169.803 26.8359 172.035 27.5803 174.331 27.5803C176.499 27.5803 177.599 27.0301 177.599 26.0925C177.599 25.4776 177.081 25.0255 175.981 24.7989L171.451 23.829C168.119 23.1169 166.599 21.532 166.599 18.9447C166.599 16.1957 168.929 13.8987 173.749 13.8987C176.66 13.8987 179.249 14.7402 181.028 15.8396L179.054 19.1389C177.599 18.3621 175.658 17.5216 173.619 17.5216C171.775 17.5216 170.708 17.9748 170.708 18.8153C170.708 19.3655 171.096 19.7215 172.164 19.9147L175.981 20.6267C180.123 21.4359 181.708 23.2798 181.708 25.7699C181.708 29.3605 178.117 31.2367 174.202 31.2367C171.065 31.2357 168.541 30.5884 165.823 29.0358Z" fill="#0C1825"/><path d="M185.039 14.2852V9.72467L189.342 6.94323V14.2863H191.865V18.0387H189.341V30.8162H185.038V18.0377H182.579V14.2852H185.039Z" fill="#0C1825"/><path d="M36.9555 16.9435C36.8782 15.8838 36.7174 14.847 36.4407 13.8259C35.2116 9.27996 32.623 5.71651 28.6674 3.16685C26.1488 1.52973 23.3607 0.623467 20.3575 0.385416C19.1054 0.293536 17.8691 0.331123 16.6243 0.485648C15.3107 0.662098 14.0357 0.969059 12.7993 1.41488C7.34634 3.39655 3.15166 7.90386 1.58531 13.4949C1.24698 14.7008 1.04754 15.9297 0.962953 17.1816C0.924317 17.8268 0.924316 18.4721 0.924316 19.1173V34.7994C0.924316 35.6441 1.60829 36.3353 2.46038 36.3353H8.52005C9.31158 36.3353 9.96422 35.7287 10.0488 34.9602C10.0488 34.9602 10.0488 34.9602 10.0488 34.9529C10.0874 34.8068 10.1104 34.6533 10.1104 34.4998V34.1385C10.1104 34.1083 10.1031 34.0853 10.1104 34.054V34.031C10.1637 34.0383 10.195 34.0696 10.2253 34.0853C12.5215 35.3445 14.9724 36.0816 17.584 36.282C18.6136 36.3593 19.6505 36.351 20.6947 36.2518C21.6241 36.1599 22.5462 36.0137 23.4599 35.7757C27.3851 34.7389 30.6264 32.6424 33.1535 29.4475C35.3275 26.6984 36.5712 23.5568 36.9252 20.0706C37.0328 19.0244 37.0401 17.9876 36.9555 16.9435ZM22.1786 26.9646C22.1556 27.0795 22.0637 27.1568 21.9478 27.1568H15.9873C15.8798 27.1568 15.7795 27.0795 15.7566 26.9646L15.7493 26.926V26.7036C15.7493 26.4196 15.7795 26.1586 15.8412 25.8892C15.8798 25.7974 15.9028 25.6898 15.9414 25.5896C15.9717 25.4894 16.0187 25.3975 16.0563 25.2972C16.1095 25.2054 16.1565 25.1124 16.2098 25.0289C16.2401 24.983 16.2641 24.9443 16.2944 24.8984C16.3476 24.8138 16.4176 24.7293 16.4792 24.653C16.5481 24.5685 16.617 24.4923 16.687 24.415C17.0399 24.0694 17.4785 23.7927 17.962 23.6392C17.301 23.2863 16.8561 22.5795 16.8561 21.7808C16.8561 20.6135 17.8012 19.6686 18.9686 19.6613C19.5524 19.6613 20.0828 19.9066 20.4661 20.2836C20.8503 20.6678 21.0884 21.1971 21.0884 21.7808C21.0884 22.5795 20.6352 23.2863 19.9826 23.6392C21.2649 24.0621 22.1943 25.267 22.1943 26.7036C22.1932 26.7882 22.1859 26.8811 22.1786 26.9646ZM32.4862 13.9408H5.44897C5.23386 13.9408 5.08036 13.7257 5.14927 13.5179C7.1542 7.82764 12.5842 3.7411 18.9676 3.7411C25.351 3.7411 30.781 7.8266 32.7848 13.5179C32.8548 13.7257 32.7013 13.9408 32.4862 13.9408Z" fill="#0C1825"/>
                </svg>
              </Link>

              <div className='lg:flex flex-row  justify-evenly gap-6 mt-10 hidden'>
                  <Link href="/" onMouseEnter={handleHover} onMouseLeave={handleHover2}><h2 className={`font-semibold text-gray-600 `} >Save</h2></Link>
                  <Link href="/invest"><h2 className='text-gray-600 font-semibold' >Invest</h2></Link>
                  <Link onClick={handleClick} href="/stories"><h2 className={`font-semibold ${click === 'story' ? 'text-blue-600' :'text-gray-600'}`} >Stories</h2></Link>
                  <Link onClick={handleClickfaq} href="/faq"><h2 className={`font-semibold ${clickfaq === 'faq' ? 'text-blue-600' :'text-gray-600'}`} >FAQs</h2></Link>
                  <Link href="/" onMouseEnter={handleHover3} onMouseLeave={handleHover4}><h2 className='text-gray-600 font-semibold' >Resources</h2></Link> 
              </div>
        </div> 
        <div className='lg:flex hidden mt-4 md:mr-[4%] xl:mr-[8%]'>
              <Link href="/login">
                <button className='h-14 w-24  border border-gray-900 rounded-xl font-semibold text-gray-800'>Sign in</button>
              </Link>
              <Link href="/">
                <button className='h-14 w-52 bg-gray-800 rounded-xl ml-2 font-semibold text-white tracking-normal'>Create free account</button>
              </Link>
        </div>

         {/* Hover menu  */}
        {save && (<div onMouseEnter={handleHover} onMouseLeave={handleHover2} className=' absolute top-14 start-[21%] shadow-2xl w-[34%] bg-white h-60 rounded-2xl grid grid-cols-2'>
                <div className='flex mt-5 ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 mt-1' src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/piggybank_icon_bd14f39497/piggybank_icon_bd14f39497.png"/>
                    <div className='ml-1.5'>
                      <h3 className='font-bold text-gray-900'>Piggybank</h3>
                      <p className=' text-sm italic text-gray-600 mt-0.5'>Automated Savings</p>
                    </div>
                </div>

                <div className='flex mt-5 ml-2'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 mt-1' src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/safelock_icon_7595628576/safelock_icon_7595628576.png" /> 
                    <div className='ml-1.5'>
                      <h3 className='font-bold text-gray-900'>Safelock</h3>
                      <p className=' text-sm italic text-gray-600 mt-0.5'>Fixed Savings</p>
                    </div>
                </div>

                <div className='flex ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 mt-1'src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/targets_icon_a382a2df4f/targets_icon_a382a2df4f.png" /> 
                    <div className='ml-1.5'>
                      <h3 className='font-bold text-gray-900'>Target Savings</h3>
                      <p className=' text-sm italic text-gray-600 mt-0.5'>Goal-oriented Savings</p>
                    </div>
                </div>

                <div className='flex'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 mt-1 ml-2' src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/flex_naira_icon_1c37272848/flex_naira_icon_1c37272848.png" />
                    <div className='ml-1.5'>
                      <h3 className='font-bold text-gray-900'>Flex Naira</h3>
                      <p className=' text-sm italic text-gray-600 mt-0.5'>Flexible Savings</p>
                    </div>
                </div>

                <div className='flex ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 mt-1' src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/flex_dollar_icon_b180813700/flex_dollar_icon_b180813700.png"/>
                    <div className='ml-1.5'>
                      <h3 className='font-bold text-gray-900'>Flex Dollar</h3>
                      <p className=' text-sm italic text-gray-600 mt-0.5'>Dollar Savings</p>
                    </div>
                </div>
        </div>)}
        
        {resource && (<div onMouseEnter={handleHover3} onMouseLeave={handleHover4} className=' absolute top-14 start-[41%] shadow-2xl w-[34%] bg-white h-60 rounded-2xl grid grid-cols-2'>
                <div className='flex mt-5 ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMzg0NkMwIDkuMTI2NSA5LjEyNjUgMCAyMC4zODQ2IDBIMzIuNjE1NEM0My44NzM1IDAgNTMgOS4xMjY1IDUzIDIwLjM4NDZWMzIuNjE1NEM1MyA0My44NzM1IDQzLjg3MzUgNTMgMzIuNjE1NCA1M0gwVjIwLjM4NDZaIiBmaWxsPSIjRTBFRkZGIi8+CjxwYXRoIGQ9Ik0yMC41IDIyLjc1VjI5LjI1QzIwLjUgMzEuNDE2NyAyMS41ODMzIDMyLjUgMjMuNzUgMzIuNUgzMC4yNUMzMi40MTY3IDMyLjUgMzMuNSAzMS40MTY3IDMzLjUgMjkuMjVWMjZDMzMuNSAyNS4zNSAzMy4wNjY3IDI0LjkxNjcgMzIuNDE2NyAyNC45MTY3QzMxLjc2NjcgMjQuOTE2NyAzMS4zMzMzIDI0LjQ4MzMgMzEuMzMzMyAyMy44MzMzVjIyLjc1QzMxLjMzMzMgMjAuNTgzMyAzMC4yNSAxOS41IDI4LjA4MzMgMTkuNUgyMy43NUMyMS41ODMzIDE5LjUgMjAuNSAyMC41ODMzIDIwLjUgMjIuNzVaIiBzdHJva2U9IiMwRDYwRDgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI0LjgzMzQgMjMuODMzM0gyN00yNC44MzM0IDI4LjE2NjZIMjkuMTY2NyIgc3Ryb2tlPSIjMEQ2MEQ4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMwLjI1IDM2LjgzMzRIMjMuNzVDMTguMzMzMyAzNi44MzM0IDE2LjE2NjYgMzQuNjY2NyAxNi4xNjY2IDI5LjI1MDFWMjIuNzUwMUMxNi4xNjY2IDE3LjMzMzQgMTguMzMzMyAxNS4xNjY3IDIzLjc1IDE1LjE2NjdIMzAuMjVDMzUuNjY2NiAxNS4xNjY3IDM3LjgzMzMgMTcuMzMzNCAzNy44MzMzIDIyLjc1MDFWMjkuMjUwMUMzNy44MzMzIDM0LjY2NjcgMzUuNjY2NiAzNi44MzM0IDMwLjI1IDM2LjgzMzRaIiBzdHJva2U9IiMwRDYwRDgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" />
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Blog</h3>
                    </div>
                </div>

                <div className='flex mt-5 ml-2'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjBDMCA4Ljk1NDMxIDguOTU0MzEgMCAyMCAwQzMxLjA0NTcgMCA0MCA4Ljk1NDMxIDQwIDIwQzQwIDMxLjA0NTcgMzEuMDQ1NyA0MCAyMCA0MEgwVjIwWiIgZmlsbD0iI0NERkZGNSIvPgo8cGF0aCBkPSJNMjAuNjk3IDI0Ljk4OTNWMTQuNjMxNkgxNi45MTZWMjQuOTg5M00yMC42OTcgMjQuOTg5M0gxNi45MTZNMjAuNjk3IDI0Ljk4OTNWMjcuMTY4QzIwLjY5NyAyNy4zMjk1IDIwLjYzMjggMjcuNDg0NCAyMC41MTg2IDI3LjU5ODZDMjAuNDA0NCAyNy43MTI4IDIwLjI0OTUgMjcuNzc3IDIwLjA4NzkgMjcuNzc3SDE3LjUyNTFDMTcuNDQ1MSAyNy43NzcgMTcuMzY1OSAyNy43NjEzIDE3LjI5MiAyNy43MzA2QzE3LjIxODEgMjcuNyAxNy4xNTEgMjcuNjU1MiAxNy4wOTQ0IDI3LjU5ODZDMTcuMDM3OSAyNy41NDIxIDE2Ljk5MyAyNy40NzQ5IDE2Ljk2MjQgMjcuNDAxQzE2LjkzMTggMjcuMzI3MSAxNi45MTYgMjcuMjQ3OSAxNi45MTYgMjcuMTY4VjI0Ljk4OTNNMTYuOTE2IDI0Ljk4OTNWMTUuOTk2OEgxMi43MDE4TTE2LjkxNiAyNC45ODkzSDEyLjcwMThNMTYuOTE2IDI0Ljk4OTNWMjcuMDk0NEMxNi45MTYgMjcuMjc2NSAxNi44NDM3IDI3LjQ1MTIgMTYuNzE0OSAyNy41OEMxNi41ODYxIDI3LjcwODcgMTYuNDExNSAyNy43ODExIDE2LjIyOTMgMjcuNzgxMUgxMy4zNjgxQzEzLjE4NiAyNy43ODExIDEzLjAxMTMgMjcuNzA4NyAxMi44ODI1IDI3LjU4QzEyLjc1MzcgMjcuNDUxMiAxMi42ODE0IDI3LjI3NjUgMTIuNjgxNCAyNy4wOTQ0TDEyLjcwMTggMjQuOTg5M00yMS4wMzYyIDE3LjU5MUwyNS4zODUzIDE2Ljg5MkwyNS4wNjI0IDE0Ljg0ODJDMjUuMDMyMyAxNC42NjE0IDI0LjkyOTMgMTQuNDk0MSAyNC43NzYxIDE0LjM4M0MyNC42MjI5IDE0LjI3MTkgMjQuNDMxOSAxNC4yMjYxIDI0LjI0NDkgMTQuMjU1NkwyNC4yNDkgMTQuMjU5NkwyMS4zMDE5IDE0LjcyOTdDMjEuMjA5MyAxNC43NDQxIDIxLjEyMDUgMTQuNzc2NyAyMS4wNDA2IDE0LjgyNThDMjAuOTYwNyAxNC44NzQ4IDIwLjg5MTMgMTQuOTM5MiAyMC44MzY2IDE1LjAxNTNDMjAuNzgxOCAxNS4wOTE0IDIwLjc0MjcgMTUuMTc3NiAyMC43MjE1IDE1LjI2ODlDMjAuNzAwNCAxNS4zNjAyIDIwLjY5NzYgMTUuNDU0OCAyMC43MTMzIDE1LjU0NzJMMjEuMDM2MiAxNy41OTFaTTIxLjAzNjIgMTcuNTkxTDIyLjIzMzkgMjUuMTI0MkwyNi41ODMgMjQuNDM3NU0yMS4wMzYyIDE3LjU5MUwyNS4zODUzIDE2LjkwMDJIMjUuMzgxM0wyNi41ODMgMjQuNDM3NU0yNi41ODMgMjQuNDM3NUwyNi45MSAyNi40ODEzQzI2LjkyNTEgMjYuNTczOSAyNi45MjE4IDI2LjY2ODYgMjYuOTAwMSAyNi43NkMyNi44Nzg1IDI2Ljg1MTMgMjYuODM5IDI2LjkzNzUgMjYuNzgzOSAyNy4wMTM0QzI2LjcyODggMjcuMDg5NCAyNi42NTkyIDI3LjE1MzggMjYuNTc5MSAyNy4yMDI4QzI2LjQ5OSAyNy4yNTE3IDI2LjQxIDI3LjI4NDQgMjYuMzE3MyAyNy4yOTg4TDIzLjM3MDIgMjcuNzY4OEMyMy4xODMzIDI3Ljc5ODMgMjIuOTkyMyAyNy43NTI0IDIyLjgzOSAyNy42NDE0QzIyLjY4NTggMjcuNTMwMyAyMi41ODI4IDI3LjM2MyAyMi41NTI3IDI3LjE3NjFMMjIuMjI5OCAyNS4xMzI0TDI2LjU3ODkgMjQuNDQxNkwyNi41ODMgMjQuNDM3NVpNMTIuNzAxOCAxNS45OTY4SDE2LjkzNjVWMTMuODkxOEMxNi45MzY1IDEzLjcwOTYgMTYuODY0MSAxMy41MzUgMTYuNzM1NCAxMy40MDYyQzE2LjYwNjYgMTMuMjc3NCAxNi40MzE5IDEzLjIwNTEgMTYuMjQ5OCAxMy4yMDUxSDEzLjM4ODVDMTMuMjA2NCAxMy4yMDUxIDEzLjAzMTcgMTMuMjc3NCAxMi45MDMgMTMuNDA2MkMxMi43NzQyIDEzLjUzNSAxMi43MDE4IDEzLjcwOTYgMTIuNzAxOCAxMy44OTE4VjE1Ljk5NjhaTTEyLjcwMTggMTUuOTk2OFYyNC45ODkzTTE3LjUyNTEgMTEuODM5OEgyMC4wODc5QzIwLjE2ODMgMTEuODM5OCAyMC4yNDc4IDExLjg1NTcgMjAuMzIyIDExLjg4NjZDMjAuMzk2MSAxMS45MTc1IDIwLjQ2MzQgMTEuOTYyNyAyMC41MjAxIDEyLjAxOTdDMjAuNTc2NyAxMi4wNzY3IDIwLjYyMTQgMTIuMTQ0MyAyMC42NTE4IDEyLjIxODZDMjAuNjgyMiAxMi4yOTMgMjAuNjk3NSAxMi4zNzI2IDIwLjY5NyAxMi40NTNWMTQuNjM1N0gxNi45MTZWMTIuNDUzQzE2LjkxNTUgMTIuMzcyNiAxNi45MzA5IDEyLjI5MyAxNi45NjEyIDEyLjIxODZDMTYuOTkxNiAxMi4xNDQzIDE3LjAzNjQgMTIuMDc2NyAxNy4wOTMgMTIuMDE5N0MxNy4xNDk2IDExLjk2MjcgMTcuMjE2OSAxMS45MTc1IDE3LjI5MTEgMTEuODg2NkMxNy4zNjUyIDExLjg1NTcgMTcuNDQ0OCAxMS44Mzk4IDE3LjUyNTEgMTEuODM5OFoiIHN0cm9rZT0iIzAzODg4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Comics</h3>
                    </div>
                </div>

                <div className='flex ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMzg0NkMwIDkuMTI2NSA5LjEyNjUgMCAyMC4zODQ2IDBIMzIuNjE1NEM0My44NzM1IDAgNTMgOS4xMjY1IDUzIDIwLjM4NDZWMzIuNjE1NEM1MyA0My44NzM1IDQzLjg3MzUgNTMgMzIuNjE1NCA1M0gwVjIwLjM4NDZaIiBmaWxsPSIjRTRGRkYxIi8+CjxwYXRoIGQ9Ik0yNC44MzMzIDM2LjgzMzRIMjkuMTY2N0MzNC41ODMzIDM2LjgzMzQgMzYuNzUgMzQuNjY2NyAzNi43NSAyOS4yNTAxVjIyLjc1MDFDMzYuNzUgMTcuMzMzNCAzNC41ODMzIDE1LjE2NjcgMjkuMTY2NyAxNS4xNjY3SDI0LjgzMzNDMTkuNDE2NyAxNS4xNjY3IDE3LjI1IDE3LjMzMzQgMTcuMjUgMjIuNzUwMVYyOS4yNTAxQzE3LjI1IDM0LjY2NjcgMTkuNDE2NyAzNi44MzM0IDI0LjgzMzMgMzYuODMzNFoiIHN0cm9rZT0iIzEwQjI1OSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzEuODc1IDIxLjIxMTdWMjIuMjk1QzMxLjg3NSAyMy4xODMzIDMxLjE0OTIgMjMuOTIgMzAuMjUgMjMuOTJIMjMuNzVDMjIuODYxNyAyMy45MiAyMi4xMjUgMjMuMTk0MiAyMi4xMjUgMjIuMjk1VjIxLjIxMTdDMjIuMTI1IDIwLjMyMzMgMjIuODUwOCAxOS41ODY3IDIzLjc1IDE5LjU4NjdIMzAuMjVDMzEuMTQ5MiAxOS41ODY3IDMxLjg3NSAyMC4zMTI1IDMxLjg3NSAyMS4yMTE3WiIgc3Ryb2tlPSIjMTBCMjU5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMi44MTQgMjguMTY2N0gyMi44MjdNMjYuOTk0NSAyOC4xNjY3SDI3LjAwNzVNMzEuMTc1MSAyOC4xNjY3SDMxLjE4ODFNMjIuODE0IDMxLjk1ODRIMjIuODI3TTI2Ljk5NDUgMzEuOTU4NEgyNy4wMDc1TTMxLjE3NTEgMzEuOTU4NEgzMS4xODgxIiBzdHJva2U9IiMxMEIyNTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Calculator</h3>
                    </div>
                </div>

                <div className='flex'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjBDMCA4Ljk1NDMxIDguOTU0MzEgMCAyMCAwQzMxLjA0NTcgMCA0MCA4Ljk1NDMxIDQwIDIwQzQwIDMxLjA0NTcgMzEuMDQ1NyA0MCAyMCA0MEgwVjIwWiIgZmlsbD0iI0YwRjBGMCIvPgo8cGF0aCBkPSJNMjYuMjQ3OCAxMi40NTIxSDEzLjM3MjJDMTIuNDE0MSAxMi40NTIxIDExLjYzNSAxMy4xODU0IDExLjYzNSAxNC4wODcxVjI1LjUzMjFDMTEuNjM1IDI2LjQzMzkgMTIuNDE0MSAyNy4xNjcxIDEzLjM3MjIgMjcuMTY3MUgyNi4yNDc4QzI3LjIwNTkgMjcuMTY3MSAyNy45ODUgMjYuNDMzOSAyNy45ODUgMjUuNTMyMVYxNC4wODcxQzI3Ljk4NSAxMy4xODU0IDI3LjIwNTkgMTIuNDUyMSAyNi4yNDc4IDEyLjQ1MjFaTTI2LjI0NzggMjUuNTMyMUgxMy4zNzIyQzEzLjMyNTYgMjUuNTMyMSAxMy4yOTM3IDI1LjUxOTEgMTMuMjc5OCAyNS41MTkxQzEzLjI3NDEgMjUuNTE5MSAxMy4yNzA4IDI1LjUyMDcgMTMuMjcgMjUuNTI1NkwxMy4yNjAyIDE0LjEyNDhDMTMuMjY1OSAxNC4xMTY2IDEzLjMwMjcgMTQuMDg3MSAxMy4zNzIyIDE0LjA4NzFIMjYuMjQ3OEMyNi4zMTI0IDE0LjA4OCAyNi4zNDc2IDE0LjExIDI2LjM1IDE0LjA5MzdMMjYuMzU5OCAyNS40OTQ1QzI2LjM1NDEgMjUuNTAyNyAyNi4zMTczIDI1LjUzMjEgMjYuMjQ3OCAyNS41MzIxWiIgZmlsbD0iIzIyMjkzNiIvPgo8cGF0aCBkPSJNMTQuOTA1IDE1LjcyMjdIMTkuODFWMjAuNjI3N0gxNC45MDVWMTUuNzIyN1pNMjAuNjI3NSAyMi4yNjI3SDE0LjkwNVYyMy44OTc3SDI0LjcxNVYyMi4yNjI3SDIxLjQ0NUgyMC42Mjc1Wk0yMS40NDUgMTguOTkyN0gyNC43MTVWMjAuNjI3N0gyMS40NDVWMTguOTkyN1pNMjEuNDQ1IDE1LjcyMjdIMjQuNzE1VjE3LjM1NzdIMjEuNDQ1VjE1LjcyMjdaIiBmaWxsPSIjMjIyOTM2Ii8+Cjwvc3ZnPgo=" />
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Newsletter</h3>
                    </div>
                </div>

                <div className='flex ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest" className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMzg0NkMwIDkuMTI2NSA5LjEyNjUgMCAyMC4zODQ2IDBIMzIuNjE1NEM0My44NzM1IDAgNTMgOS4xMjY1IDUzIDIwLjM4NDZWMzIuNjE1NEM1MyA0My44NzM1IDQzLjg3MzUgNTMgMzIuNjE1NCA1M0gwVjIwLjM4NDZaIiBmaWxsPSIjRTNGNUZGIi8+CjxwYXRoIGQ9Ik0xNy43OTE2IDMyLjUwMDFWMjAuNTgzNEMxNy43OTE2IDE2LjI1MDEgMTguODc1IDE1LjE2NjcgMjMuMjA4MyAxNS4xNjY3SDMwLjc5MTZDMzUuMTI1IDE1LjE2NjcgMzYuMjA4MyAxNi4yNTAxIDM2LjIwODMgMjAuNTgzNFYzMS40MTY3QzM2LjIwODMgMzEuNTY4NCAzNi4yMDgzIDMxLjcyMDEgMzYuMTk3NSAzMS44NzE3IiBzdHJva2U9IiMzMjk2RkYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIyLjY2NjYgMjAuNTgzM0gzMS4zMzMzTTIyLjY2NjYgMjQuMzc0OUgyOC4wODMzTTIwLjg3OTEgMjkuMjQ5OUgzNi4yMDgzVjMzLjA0MTZDMzYuMjA4MyAzNS4xMzI0IDM0LjUwNzUgMzYuODMzMyAzMi40MTY2IDM2LjgzMzNIMjEuNTgzM0MxOS40OTI1IDM2LjgzMzMgMTcuNzkxNiAzNS4xMzI0IDE3Ljc5MTYgMzMuMDQxNlYzMi4zMzc0QzE3Ljc5MTYgMzAuNjM2NiAxOS4xNzgzIDI5LjI0OTkgMjAuODc5MSAyOS4yNDk5WiIgc3Ryb2tlPSIjMzI5NkZGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Ebook</h3>
                    </div>
                </div>
        </div>)}


        {/*Mobile View Offcanvas  */}
        {!offcanvas && (<div onClick={handleOffcanvas} className='flex flex-col lg:hidden -mt-0.5 mr-5' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className="h-12 w-10 mt-3 text-gray-800 "        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className="h-12 w-10 -mt-10 text-gray-800"        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className="h-12 w-10 -mt-10 text-gray-800"        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
        </div>)}
        
        {offcanvas && (<div onClick={handleOffcanvas} className='flex flex-col lg:hidden -mt-0.5 mr-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className="h-12 w-10 mt-3 pt-2 text-gray-800 -rotate-45"        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className="h-12 w-10 -mt-10 pb-2 text-gray-800 rotate-45"        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
        </div>)}

        {offcanvas && (<div className='lg:hidden absolute w-screen min-h-screen mt-[18.9%] min-[539px]:mt-[10%] bg-gray-50'>
          <div>
          <div className='lg:hidden flex flex-col gap-6 mt-10 pt-10'>
                  <Link href="/" ><h2 className={` text-center font-semibold text-gray-600 `} >Save</h2></Link>
                  <Link href="/invest"><h2 className='text-gray-600 font-semibold text-center pt-2' >Invest</h2></Link>
                  <Link href="/stories"><h2 className='text-gray-600 font-semibold text-center pt-2' >Stories</h2></Link>
                  <Link href="/"><h2 className='text-gray-600 font-semibold text-center pt-2' >FAQs</h2></Link>
                  <Link href="/" ><h2 className='pt-2 text-center text-gray-600 font-semibold' >Resources</h2></Link> 
              </div>
        </div> 
        <div className='lg:hidden mt-10 flex flex-col w-[90%] mx-auto'>
              <Link href="/">
                <button className='h-14 w-[100%]  border border-gray-900 rounded-xl font-semibold text-gray-800'>Sign in</button>
              </Link>
              <Link href="/">
                <button className='h-14 w-[100%] bg-gray-800 rounded-xl mt-8 font-semibold text-white tracking-normal'>Create free account</button>
              </Link>
        </div>  
          

        </div>)}


    </nav>
);
}
 
export default Navbar;

