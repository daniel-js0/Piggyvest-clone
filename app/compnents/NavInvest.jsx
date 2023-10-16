"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";


const NavInvest = ({ invScroll }) => {
                const [saveInv, setSaveInv] = useState(false);
                const [resourceInv, setResourceInv] = useState(false);
                const [offInv, setOffInv] = useState();

                function handleHoverInv(){  setSaveInv(true);}
                function handleHoverInv2(){ setSaveInv(false);}
                function handleHoverInv3(){ setResourceInv(true);}
                function handleHoverInv4(){ setResourceInv(false);}            
                function handleOffIvn(){ setOffInv(!offInv) }
             

  return (
   
    
    <nav className={`z-10 fixed top-0 flex flex-row justify-between gap-14 h-20 w-screen 
                    md:h-24 md:gap-20  ${invScroll ? ' bg-gray-50 shadow-xl' : 'bg-violet-700'}`}>
        <div className='flex flex-row justify-start gap-14 ml-5 md:ml-[2%] xl:ml-[8%]'>
              <Link href="/">
                {!invScroll 
                
                ? (<Image width={225} height={40} quality={100}  className='h-20 w-40 md:h-24 md:w-44' src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/white_logo_c3427147fd/white_logo_c3427147fd.svg" alt="PiggyVest Logo"/>)

                : (<Image width={225} height={40} quality={100} className=' h-20 w-40 md:h-24 md:w-44' src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/investify_logo_1d7ed8f562/investify_logo_1d7ed8f562.svg" alt="PiggyVest Logo"/>)}
             
              </Link>

              <div className='lg:flex flex-row  justify-evenly gap-6 mt-10 hidden'>
                  <Link href="/" onMouseEnter={handleHoverInv} onMouseLeave={handleHoverInv2}><h2 className={`font-semibold ${invScroll ? 'text-gray-600': 'text-gray-50'}`} >Save</h2></Link>
                  <Link href="/invest"><h2 className={`font-semibold ${invScroll ? 'text-gray-600': 'text-gray-50'}`}  >Invest</h2></Link>
                  <Link href="/stories"><h2 className={`font-semibold ${invScroll ? 'text-gray-600': 'text-gray-50'}`}  >Stories</h2></Link>
                  <Link href="/faq"><h2 className={`font-semibold ${invScroll ? 'text-gray-600': 'text-gray-50'}`}  >FAQs</h2></Link>
                  <Link href="/" onMouseEnter={handleHoverInv3} onMouseLeave={handleHoverInv4}><h2 className={`font-semibold ${invScroll ? 'text-gray-600': 'text-gray-50'}`}  >Resources</h2></Link> 
              </div>
        </div> 
        <div className='lg:flex hidden mt-4 md:mr-[4%] xl:mr-[8%]'>
              <Link href="https://loginpage-py.netlify.app/">
                <button className={`h-14 w-24  border  rounded-xl font-semibold 
                             ${invScroll ?'text-gray-800 border-gray-900':'border-gray-50 text-gray-50 '}`}>Sign in</button>
              </Link>
              <Link href="https://register-py.netlify.app/">
                <button className={`h-14 w-52  rounded-xl ml-2 font-bold  tracking-normal
                            ${invScroll ? 'bg-gray-800 text-gray-50': 'bg-gray-50 text-gray-800'}`}>Create free account</button>
              </Link>
        </div>  
         {/* Hover menu  */}
        {saveInv && (<div onMouseEnter={handleHoverInv} onMouseLeave={handleHoverInv2} className=' absolute top-14 start-[21%] shadow-2xl w-[34%] bg-white h-60 rounded-2xl grid grid-cols-2'>
                <div className='flex mt-5 ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest"  className='h-10 w-10 mt-1' src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/piggybank_icon_bd14f39497/piggybank_icon_bd14f39497.png" />
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
                    <Image width={100} height={100} quality={100} alt="PiggyVest"  className='h-10 w-10 mt-1 ml-2' src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/flex_naira_icon_1c37272848/flex_naira_icon_1c37272848.png" />
                    <div className='ml-1.5'>
                      <h3 className='font-bold text-gray-900'>Flex Naira</h3>
                      <p className=' text-sm italic text-gray-600 mt-0.5'>Flexible Savings</p>
                    </div>
                </div>

                <div className='flex ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest"  className='h-10 w-10 mt-1' src="https://storage.googleapis.com/new-abeg-avatar-dev/piggyvest-cms-staging/flex_dollar_icon_b180813700/flex_dollar_icon_b180813700.png" />
                    <div className='ml-1.5'>
                      <h3 className='font-bold text-gray-900'>Flex Dollar</h3>
                      <p className=' text-sm italic text-gray-600 mt-0.5'>Dollar Savings</p>
                    </div>
                </div>
        </div>)}
        
        {resourceInv && (<div onMouseEnter={handleHoverInv3} onMouseLeave={handleHoverInv4} className=' absolute top-14 start-[41%] shadow-2xl w-[34%] bg-white h-60 rounded-2xl grid grid-cols-2'>
                <div className='flex mt-5 ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest"  className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMzg0NkMwIDkuMTI2NSA5LjEyNjUgMCAyMC4zODQ2IDBIMzIuNjE1NEM0My44NzM1IDAgNTMgOS4xMjY1IDUzIDIwLjM4NDZWMzIuNjE1NEM1MyA0My44NzM1IDQzLjg3MzUgNTMgMzIuNjE1NCA1M0gwVjIwLjM4NDZaIiBmaWxsPSIjRTBFRkZGIi8+CjxwYXRoIGQ9Ik0yMC41IDIyLjc1VjI5LjI1QzIwLjUgMzEuNDE2NyAyMS41ODMzIDMyLjUgMjMuNzUgMzIuNUgzMC4yNUMzMi40MTY3IDMyLjUgMzMuNSAzMS40MTY3IDMzLjUgMjkuMjVWMjZDMzMuNSAyNS4zNSAzMy4wNjY3IDI0LjkxNjcgMzIuNDE2NyAyNC45MTY3QzMxLjc2NjcgMjQuOTE2NyAzMS4zMzMzIDI0LjQ4MzMgMzEuMzMzMyAyMy44MzMzVjIyLjc1QzMxLjMzMzMgMjAuNTgzMyAzMC4yNSAxOS41IDI4LjA4MzMgMTkuNUgyMy43NUMyMS41ODMzIDE5LjUgMjAuNSAyMC41ODMzIDIwLjUgMjIuNzVaIiBzdHJva2U9IiMwRDYwRDgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTI0LjgzMzQgMjMuODMzM0gyN00yNC44MzM0IDI4LjE2NjZIMjkuMTY2NyIgc3Ryb2tlPSIjMEQ2MEQ4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMwLjI1IDM2LjgzMzRIMjMuNzVDMTguMzMzMyAzNi44MzM0IDE2LjE2NjYgMzQuNjY2NyAxNi4xNjY2IDI5LjI1MDFWMjIuNzUwMUMxNi4xNjY2IDE3LjMzMzQgMTguMzMzMyAxNS4xNjY3IDIzLjc1IDE1LjE2NjdIMzAuMjVDMzUuNjY2NiAxNS4xNjY3IDM3LjgzMzMgMTcuMzMzNCAzNy44MzMzIDIyLjc1MDFWMjkuMjUwMUMzNy44MzMzIDM0LjY2NjcgMzUuNjY2NiAzNi44MzM0IDMwLjI1IDM2LjgzMzRaIiBzdHJva2U9IiMwRDYwRDgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" />
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Blog</h3>
                    </div>
                </div>

                <div className='flex mt-5 ml-2'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest"  className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjBDMCA4Ljk1NDMxIDguOTU0MzEgMCAyMCAwQzMxLjA0NTcgMCA0MCA4Ljk1NDMxIDQwIDIwQzQwIDMxLjA0NTcgMzEuMDQ1NyA0MCAyMCA0MEgwVjIwWiIgZmlsbD0iI0NERkZGNSIvPgo8cGF0aCBkPSJNMjAuNjk3IDI0Ljk4OTNWMTQuNjMxNkgxNi45MTZWMjQuOTg5M00yMC42OTcgMjQuOTg5M0gxNi45MTZNMjAuNjk3IDI0Ljk4OTNWMjcuMTY4QzIwLjY5NyAyNy4zMjk1IDIwLjYzMjggMjcuNDg0NCAyMC41MTg2IDI3LjU5ODZDMjAuNDA0NCAyNy43MTI4IDIwLjI0OTUgMjcuNzc3IDIwLjA4NzkgMjcuNzc3SDE3LjUyNTFDMTcuNDQ1MSAyNy43NzcgMTcuMzY1OSAyNy43NjEzIDE3LjI5MiAyNy43MzA2QzE3LjIxODEgMjcuNyAxNy4xNTEgMjcuNjU1MiAxNy4wOTQ0IDI3LjU5ODZDMTcuMDM3OSAyNy41NDIxIDE2Ljk5MyAyNy40NzQ5IDE2Ljk2MjQgMjcuNDAxQzE2LjkzMTggMjcuMzI3MSAxNi45MTYgMjcuMjQ3OSAxNi45MTYgMjcuMTY4VjI0Ljk4OTNNMTYuOTE2IDI0Ljk4OTNWMTUuOTk2OEgxMi43MDE4TTE2LjkxNiAyNC45ODkzSDEyLjcwMThNMTYuOTE2IDI0Ljk4OTNWMjcuMDk0NEMxNi45MTYgMjcuMjc2NSAxNi44NDM3IDI3LjQ1MTIgMTYuNzE0OSAyNy41OEMxNi41ODYxIDI3LjcwODcgMTYuNDExNSAyNy43ODExIDE2LjIyOTMgMjcuNzgxMUgxMy4zNjgxQzEzLjE4NiAyNy43ODExIDEzLjAxMTMgMjcuNzA4NyAxMi44ODI1IDI3LjU4QzEyLjc1MzcgMjcuNDUxMiAxMi42ODE0IDI3LjI3NjUgMTIuNjgxNCAyNy4wOTQ0TDEyLjcwMTggMjQuOTg5M00yMS4wMzYyIDE3LjU5MUwyNS4zODUzIDE2Ljg5MkwyNS4wNjI0IDE0Ljg0ODJDMjUuMDMyMyAxNC42NjE0IDI0LjkyOTMgMTQuNDk0MSAyNC43NzYxIDE0LjM4M0MyNC42MjI5IDE0LjI3MTkgMjQuNDMxOSAxNC4yMjYxIDI0LjI0NDkgMTQuMjU1NkwyNC4yNDkgMTQuMjU5NkwyMS4zMDE5IDE0LjcyOTdDMjEuMjA5MyAxNC43NDQxIDIxLjEyMDUgMTQuNzc2NyAyMS4wNDA2IDE0LjgyNThDMjAuOTYwNyAxNC44NzQ4IDIwLjg5MTMgMTQuOTM5MiAyMC44MzY2IDE1LjAxNTNDMjAuNzgxOCAxNS4wOTE0IDIwLjc0MjcgMTUuMTc3NiAyMC43MjE1IDE1LjI2ODlDMjAuNzAwNCAxNS4zNjAyIDIwLjY5NzYgMTUuNDU0OCAyMC43MTMzIDE1LjU0NzJMMjEuMDM2MiAxNy41OTFaTTIxLjAzNjIgMTcuNTkxTDIyLjIzMzkgMjUuMTI0MkwyNi41ODMgMjQuNDM3NU0yMS4wMzYyIDE3LjU5MUwyNS4zODUzIDE2LjkwMDJIMjUuMzgxM0wyNi41ODMgMjQuNDM3NU0yNi41ODMgMjQuNDM3NUwyNi45MSAyNi40ODEzQzI2LjkyNTEgMjYuNTczOSAyNi45MjE4IDI2LjY2ODYgMjYuOTAwMSAyNi43NkMyNi44Nzg1IDI2Ljg1MTMgMjYuODM5IDI2LjkzNzUgMjYuNzgzOSAyNy4wMTM0QzI2LjcyODggMjcuMDg5NCAyNi42NTkyIDI3LjE1MzggMjYuNTc5MSAyNy4yMDI4QzI2LjQ5OSAyNy4yNTE3IDI2LjQxIDI3LjI4NDQgMjYuMzE3MyAyNy4yOTg4TDIzLjM3MDIgMjcuNzY4OEMyMy4xODMzIDI3Ljc5ODMgMjIuOTkyMyAyNy43NTI0IDIyLjgzOSAyNy42NDE0QzIyLjY4NTggMjcuNTMwMyAyMi41ODI4IDI3LjM2MyAyMi41NTI3IDI3LjE3NjFMMjIuMjI5OCAyNS4xMzI0TDI2LjU3ODkgMjQuNDQxNkwyNi41ODMgMjQuNDM3NVpNMTIuNzAxOCAxNS45OTY4SDE2LjkzNjVWMTMuODkxOEMxNi45MzY1IDEzLjcwOTYgMTYuODY0MSAxMy41MzUgMTYuNzM1NCAxMy40MDYyQzE2LjYwNjYgMTMuMjc3NCAxNi40MzE5IDEzLjIwNTEgMTYuMjQ5OCAxMy4yMDUxSDEzLjM4ODVDMTMuMjA2NCAxMy4yMDUxIDEzLjAzMTcgMTMuMjc3NCAxMi45MDMgMTMuNDA2MkMxMi43NzQyIDEzLjUzNSAxMi43MDE4IDEzLjcwOTYgMTIuNzAxOCAxMy44OTE4VjE1Ljk5NjhaTTEyLjcwMTggMTUuOTk2OFYyNC45ODkzTTE3LjUyNTEgMTEuODM5OEgyMC4wODc5QzIwLjE2ODMgMTEuODM5OCAyMC4yNDc4IDExLjg1NTcgMjAuMzIyIDExLjg4NjZDMjAuMzk2MSAxMS45MTc1IDIwLjQ2MzQgMTEuOTYyNyAyMC41MjAxIDEyLjAxOTdDMjAuNTc2NyAxMi4wNzY3IDIwLjYyMTQgMTIuMTQ0MyAyMC42NTE4IDEyLjIxODZDMjAuNjgyMiAxMi4yOTMgMjAuNjk3NSAxMi4zNzI2IDIwLjY5NyAxMi40NTNWMTQuNjM1N0gxNi45MTZWMTIuNDUzQzE2LjkxNTUgMTIuMzcyNiAxNi45MzA5IDEyLjI5MyAxNi45NjEyIDEyLjIxODZDMTYuOTkxNiAxMi4xNDQzIDE3LjAzNjQgMTIuMDc2NyAxNy4wOTMgMTIuMDE5N0MxNy4xNDk2IDExLjk2MjcgMTcuMjE2OSAxMS45MTc1IDE3LjI5MTEgMTEuODg2NkMxNy4zNjUyIDExLjg1NTcgMTcuNDQ0OCAxMS44Mzk4IDE3LjUyNTEgMTEuODM5OFoiIHN0cm9rZT0iIzAzODg4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Comics</h3>
                    </div>
                </div>

                <div className='flex ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest"  className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMzg0NkMwIDkuMTI2NSA5LjEyNjUgMCAyMC4zODQ2IDBIMzIuNjE1NEM0My44NzM1IDAgNTMgOS4xMjY1IDUzIDIwLjM4NDZWMzIuNjE1NEM1MyA0My44NzM1IDQzLjg3MzUgNTMgMzIuNjE1NCA1M0gwVjIwLjM4NDZaIiBmaWxsPSIjRTRGRkYxIi8+CjxwYXRoIGQ9Ik0yNC44MzMzIDM2LjgzMzRIMjkuMTY2N0MzNC41ODMzIDM2LjgzMzQgMzYuNzUgMzQuNjY2NyAzNi43NSAyOS4yNTAxVjIyLjc1MDFDMzYuNzUgMTcuMzMzNCAzNC41ODMzIDE1LjE2NjcgMjkuMTY2NyAxNS4xNjY3SDI0LjgzMzNDMTkuNDE2NyAxNS4xNjY3IDE3LjI1IDE3LjMzMzQgMTcuMjUgMjIuNzUwMVYyOS4yNTAxQzE3LjI1IDM0LjY2NjcgMTkuNDE2NyAzNi44MzM0IDI0LjgzMzMgMzYuODMzNFoiIHN0cm9rZT0iIzEwQjI1OSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzEuODc1IDIxLjIxMTdWMjIuMjk1QzMxLjg3NSAyMy4xODMzIDMxLjE0OTIgMjMuOTIgMzAuMjUgMjMuOTJIMjMuNzVDMjIuODYxNyAyMy45MiAyMi4xMjUgMjMuMTk0MiAyMi4xMjUgMjIuMjk1VjIxLjIxMTdDMjIuMTI1IDIwLjMyMzMgMjIuODUwOCAxOS41ODY3IDIzLjc1IDE5LjU4NjdIMzAuMjVDMzEuMTQ5MiAxOS41ODY3IDMxLjg3NSAyMC4zMTI1IDMxLjg3NSAyMS4yMTE3WiIgc3Ryb2tlPSIjMTBCMjU5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMi44MTQgMjguMTY2N0gyMi44MjdNMjYuOTk0NSAyOC4xNjY3SDI3LjAwNzVNMzEuMTc1MSAyOC4xNjY3SDMxLjE4ODFNMjIuODE0IDMxLjk1ODRIMjIuODI3TTI2Ljk5NDUgMzEuOTU4NEgyNy4wMDc1TTMxLjE3NTEgMzEuOTU4NEgzMS4xODgxIiBzdHJva2U9IiMxMEIyNTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Calculator</h3>
                    </div>
                </div>

                <div className='flex'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest"  className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjBDMCA4Ljk1NDMxIDguOTU0MzEgMCAyMCAwQzMxLjA0NTcgMCA0MCA4Ljk1NDMxIDQwIDIwQzQwIDMxLjA0NTcgMzEuMDQ1NyA0MCAyMCA0MEgwVjIwWiIgZmlsbD0iI0YwRjBGMCIvPgo8cGF0aCBkPSJNMjYuMjQ3OCAxMi40NTIxSDEzLjM3MjJDMTIuNDE0MSAxMi40NTIxIDExLjYzNSAxMy4xODU0IDExLjYzNSAxNC4wODcxVjI1LjUzMjFDMTEuNjM1IDI2LjQzMzkgMTIuNDE0MSAyNy4xNjcxIDEzLjM3MjIgMjcuMTY3MUgyNi4yNDc4QzI3LjIwNTkgMjcuMTY3MSAyNy45ODUgMjYuNDMzOSAyNy45ODUgMjUuNTMyMVYxNC4wODcxQzI3Ljk4NSAxMy4xODU0IDI3LjIwNTkgMTIuNDUyMSAyNi4yNDc4IDEyLjQ1MjFaTTI2LjI0NzggMjUuNTMyMUgxMy4zNzIyQzEzLjMyNTYgMjUuNTMyMSAxMy4yOTM3IDI1LjUxOTEgMTMuMjc5OCAyNS41MTkxQzEzLjI3NDEgMjUuNTE5MSAxMy4yNzA4IDI1LjUyMDcgMTMuMjcgMjUuNTI1NkwxMy4yNjAyIDE0LjEyNDhDMTMuMjY1OSAxNC4xMTY2IDEzLjMwMjcgMTQuMDg3MSAxMy4zNzIyIDE0LjA4NzFIMjYuMjQ3OEMyNi4zMTI0IDE0LjA4OCAyNi4zNDc2IDE0LjExIDI2LjM1IDE0LjA5MzdMMjYuMzU5OCAyNS40OTQ1QzI2LjM1NDEgMjUuNTAyNyAyNi4zMTczIDI1LjUzMjEgMjYuMjQ3OCAyNS41MzIxWiIgZmlsbD0iIzIyMjkzNiIvPgo8cGF0aCBkPSJNMTQuOTA1IDE1LjcyMjdIMTkuODFWMjAuNjI3N0gxNC45MDVWMTUuNzIyN1pNMjAuNjI3NSAyMi4yNjI3SDE0LjkwNVYyMy44OTc3SDI0LjcxNVYyMi4yNjI3SDIxLjQ0NUgyMC42Mjc1Wk0yMS40NDUgMTguOTkyN0gyNC43MTVWMjAuNjI3N0gyMS40NDVWMTguOTkyN1pNMjEuNDQ1IDE1LjcyMjdIMjQuNzE1VjE3LjM1NzdIMjEuNDQ1VjE1LjcyMjdaIiBmaWxsPSIjMjIyOTM2Ii8+Cjwvc3ZnPgo="/>
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Newsletter</h3>
                    </div>
                </div>

                <div className='flex ml-8'>
                    <Image width={100} height={100} quality={100} alt="PiggyVest"  className='h-10 w-10 ' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMzg0NkMwIDkuMTI2NSA5LjEyNjUgMCAyMC4zODQ2IDBIMzIuNjE1NEM0My44NzM1IDAgNTMgOS4xMjY1IDUzIDIwLjM4NDZWMzIuNjE1NEM1MyA0My44NzM1IDQzLjg3MzUgNTMgMzIuNjE1NCA1M0gwVjIwLjM4NDZaIiBmaWxsPSIjRTNGNUZGIi8+CjxwYXRoIGQ9Ik0xNy43OTE2IDMyLjUwMDFWMjAuNTgzNEMxNy43OTE2IDE2LjI1MDEgMTguODc1IDE1LjE2NjcgMjMuMjA4MyAxNS4xNjY3SDMwLjc5MTZDMzUuMTI1IDE1LjE2NjcgMzYuMjA4MyAxNi4yNTAxIDM2LjIwODMgMjAuNTgzNFYzMS40MTY3QzM2LjIwODMgMzEuNTY4NCAzNi4yMDgzIDMxLjcyMDEgMzYuMTk3NSAzMS44NzE3IiBzdHJva2U9IiMzMjk2RkYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIyLjY2NjYgMjAuNTgzM0gzMS4zMzMzTTIyLjY2NjYgMjQuMzc0OUgyOC4wODMzTTIwLjg3OTEgMjkuMjQ5OUgzNi4yMDgzVjMzLjA0MTZDMzYuMjA4MyAzNS4xMzI0IDM0LjUwNzUgMzYuODMzMyAzMi40MTY2IDM2LjgzMzNIMjEuNTgzM0MxOS40OTI1IDM2LjgzMzMgMTcuNzkxNiAzNS4xMzI0IDE3Ljc5MTYgMzMuMDQxNlYzMi4zMzc0QzE3Ljc5MTYgMzAuNjM2NiAxOS4xNzgzIDI5LjI0OTkgMjAuODc5MSAyOS4yNDk5WiIgc3Ryb2tlPSIjMzI5NkZGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" />
                    <div className='ml-1.5'>
                      <h3 className='mt-2 text-gray-900 font-semibold'>Ebook</h3>
                    </div>
                </div>
        </div>)}

        {/*Mobile View  Offcanvas  */}
        {!offInv && (<div onClick={handleOffIvn}  className='flex flex-col lg:hidden mr-5 -mt-0.5' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className={`h-12 w-10 mt-3 text-gray-50 ${invScroll ? 'text-gray-600': 'text-gray-50'}`}        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className={`h-12 w-10 -mt-10 text-gray-50 ${invScroll ? 'text-gray-600': 'text-gray-50'}`}        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className={`h-12 w-10 -mt-10 text-gray-50 ${invScroll ? 'text-gray-600': 'text-gray-50'}`}       >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
        </div>)}

        {offInv && (<div onClick={handleOffIvn} className='flex flex-col lg:hidden -mt-0.5 mr-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className={`h-12 w-10 mt-3 pt-2 -rotate-45 ${invScroll ? 'text-gray-600': 'text-gray-50'}`}        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"
                className={`h-12 w-10 -mt-10 pb-2 rotate-45 ${invScroll ? 'text-gray-600': 'text-gray-50'}`}        >  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
        </div>)}

        {offInv && (<div className='lg:hidden absolute w-screen min-h-screen   mt-[18.9%] min-[539px]:mt-[10%] bg-gray-50'>
          <div>
          <div className='lg:hidden flex flex-col gap-6 mt-10 pt-10'>
                  <Link href="/" ><h2 className={` text-center font-semibold text-gray-600 `} >Save</h2></Link>
                  <Link href="/invest"><h2 className='text-gray-600 font-semibold text-center pt-2' >Invest</h2></Link>
                  <Link href="/stories"><h2 className='text-gray-600 font-semibold text-center pt-2' >Stories</h2></Link>
                  <Link href="/faq"><h2 className='text-gray-600 font-semibold text-center pt-2' >FAQs</h2></Link>
                  <Link href="/" ><h2 className='pt-2 text-center text-gray-600 font-semibold' >Resources</h2></Link> 
              </div>
        </div> 
        <div className='lg:hidden mt-10 flex flex-col w-[90%] mx-auto'>
              <Link href="https://loginpage-py.netlify.app/">
                <button className='h-14 w-[100%]  border border-gray-900 rounded-xl font-semibold text-gray-800'>Sign in</button>
              </Link>
              <Link href="https://register-py.netlify.app/">
                <button className='h-14 w-[100%] bg-gray-800 rounded-xl mt-8 font-semibold text-white tracking-normal'>Create free account</button>
              </Link>
        </div>  
          

        </div>)}


    </nav>
  )
}

export default NavInvest