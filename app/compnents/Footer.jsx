import Image from "next/image";
import Link from "next/link";
import Logo from './audit.png'

const Footer = () => {
    return (
      <footer className="mx-auto bg-gray-50 mt-28">
        
         <div className="flex justify-center">
          <h1 className="lg:text-3xl text-2xl leading-4 font-extrabold text-gray-900">As featured in</h1>
         </div>
         <div className="mt-7 grid grid-cols-1  min-[374px]:grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-around md:gap-4 md:w-[80%] md:mx-auto">
            <a href="https://techpoint.africa/2018/05/31/piggybank-secures-1-1-million-funding/">
            <img className='h-10 w-36 ml-7 lg:ml-0   max-[373px]:mx-auto' src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/brand3_972c03908c/brand3_972c03908c.png" alt="brand"/></a>
           
            <a href="https://guardian.ng/news/nigeria/piggybank-asserts-expansion-plans-becomes-piggyvest/" target="_blank" rel="noreferrer" >
            <img className="h-8 w-44 -ml-1 lg:ml-0   max-[373px]:mx-auto max-[373px]:mt-6" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/brand2_3fcc7de2d6/brand2_3fcc7de2d6.png" alt="brand"/></a>
            
            <a href="https://techcrunch.com/2018/05/31/nigerias-piggybank-ng-raises-1-1m-announces-group-investment-product/" target="_blank" rel="noreferrer" >
            <img className="h-8 w-44 mt-4 sm:mt-0 ml-8 lg:ml-0 lg:mt-0  max-[373px]:mx-auto max-[373px]:mt-6" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/brand1_b2a9805fff/brand1_b2a9805fff.png" alt="brand"/></a>

            <a href="https://www.pymnts.com/digital-first-banking/2022/piggyvest-seeks-to-boost-consumer-savings-and-investment-in-nigerias-low-trust-environment/" target="_blank" rel="noreferrer" >
            <img className="mt-3 ml-12 lg:ml-0 md:mt-6 lg:mt-0         max-[373px]:mx-auto max-[373px]:mt-4" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/pym_removebg_preview_109a666426/pym_removebg_preview_109a666426.svg" alt="brand"/></a>
                
            <a href="https://www.fastcompany.com/90457936/africa-most-innovative-companies-2020" target="_blank" rel="noreferrer" >
            <img className=" mt-4 ml-12 lg:ml-0 md:mt-4 lg:-mt-3       max-[373px]:mx-auto max-[373px]:-mt-1" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/fast_61fdc50524/fast_61fdc50524.svg" alt="brand"/></a>

            <a href="https://www.cio.com/article/401314/how-investment-and-savings-platform-piggyvest-is-changing-nigerias-youth-culture.html" target="_blank" rel="noreferrer" >
            <img className="mt-6 ml-14 lg:ml-0 md:mt-6 lg:mt-0       max-[373px]:mx-auto max-[373px]:-mt-1" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/cio_6806ee3afd/cio_6806ee3afd.svg" alt="brand"/></a>
        </div>



        <div className=" lg:flex lg:w-[87%] lg:mx-auto mt-20 lg:h-60  border-b border-gray-300
                            flex max-[1023px]:flex-col  max-[1023px]:w-[87%] max-[1023px]:mx-auto">
            <div className="-mt-8">
                <Link href="/">
                    <svg width="192" height="37" viewBox="0 0 192 37" fill="none" xmlns="http://www.w3.org/2000/svg"
                      className='h-20 w-40 md:h-24 md:w-44 xl:ml-[8%]'>
                      <path d="M52.0232 29.7485V36.606H47.7199V14.2856H52.0232V15.3526C53.2199 14.5758 54.7413 14.059 56.3265 14.059C61.2114 14.059 64.8025 17.9409 64.8025 22.5662C64.8025 27.1592 61.2438 31.0734 56.3265 31.0734C54.6766 31.0745 53.2209 30.5566 52.0232 29.7485ZM52.0232 20.5292V24.4759C52.7677 25.996 54.2558 26.9994 56.0028 26.9994C58.5267 26.9994 60.5003 25.0585 60.5003 22.5673C60.5003 20.0437 58.559 18.1351 56.0351 18.1351C54.2881 18.1351 52.7677 19.0738 52.0232 20.5292Z" fill="#0C1825"/><path d="M67.13 9.786C67.13 8.36291 68.1648 7.29481 69.5568 7.29481C70.9477 7.29481 72.0807 8.36187 72.0807 9.786C72.0807 11.1443 70.9487 12.2772 69.5568 12.2772C68.1648 12.2761 67.13 11.1443 67.13 9.786ZM67.389 14.285H71.757V30.8149H67.389V14.285Z" fill="#0C1825"/><path d="M74.3437 22.5022C74.3437 17.9406 77.9024 14.0921 82.8197 14.0921C84.4372 14.0921 85.9252 14.5128 87.1877 15.1915V14.2852H91.4586V29.8765C91.4586 34.1792 87.738 36.5075 83.0797 36.5075C80.0389 36.5075 77.1265 35.6023 75.2177 34.1134L76.997 31.0407C78.5822 32.1077 80.75 32.7874 83.0797 32.7874C86.0881 32.7874 87.0269 31.5909 87.1564 29.65C85.8626 30.4591 84.3745 30.9436 82.8207 30.9436C77.87 30.9446 74.3437 27.2569 74.3437 22.5022ZM87.1877 24.346V20.6583C86.4432 19.1058 84.8904 18.07 83.1434 18.07C80.6195 18.07 78.6459 20.0757 78.6459 22.5022C78.6459 25.0581 80.5871 26.8372 83.111 26.8372C84.9551 26.8362 86.4108 25.8986 87.1877 24.346Z" fill="#0C1825"/>  <path d="M94.0436 22.5022C94.0436 17.9406 97.6023 14.0921 102.52 14.0921C104.137 14.0921 105.625 14.5128 106.888 15.1915V14.2852H111.158V29.8765C111.158 34.1792 107.438 36.5075 102.78 36.5075C99.7388 36.5075 96.8265 35.6023 94.9176 34.1134L96.697 31.0407C98.2821 32.1077 100.45 32.7874 102.78 32.7874C105.788 32.7874 106.727 31.5909 106.856 29.65C105.562 30.4591 104.074 30.9436 102.521 30.9436C97.57 30.9446 94.0436 27.2569 94.0436 22.5022ZM106.888 24.346V20.6583C106.143 19.1058 104.59 18.07 102.843 18.07C100.319 18.07 98.3458 20.0757 98.3458 22.5022C98.3458 25.0581 100.287 26.8372 102.811 26.8372C104.655 26.8362 106.111 25.8986 106.888 24.346Z" fill="#0C1825"/><path d="M117.432 14.285L121.767 25.3157L126.232 14.285H130.762L121.25 36.6054H117.206L119.601 30.653L112.645 14.285H117.432Z" fill="#0C1825"/> <path d="M129.95 14.285H134.576L138.782 25.4452L142.956 14.285H147.486L140.854 30.8149H136.518L129.95 14.285Z" fill="#0C1825"/> <path d="M147.806 22.4377C147.806 17.78 151.138 13.9305 156.347 13.9305C161.167 13.9305 164.823 17.5535 164.92 22.3082C164.953 22.6966 164.953 23.1174 164.92 23.5371H151.882C152.011 25.8665 154.244 27.3867 156.637 27.3867C158.611 27.3867 159.775 26.8364 161.135 25.7046L163.497 28.1958C161.588 30.2015 159.679 31.1391 156.638 31.1391C151.041 31.1391 147.806 26.9659 147.806 22.4377ZM152.108 20.4644H160.455C160.034 18.9118 158.546 17.5535 156.281 17.5535C153.661 17.5535 152.562 18.8794 152.108 20.4644Z" fill="#0C1825"/><path d="M165.823 29.0358L167.926 25.607C169.803 26.8359 172.035 27.5803 174.331 27.5803C176.499 27.5803 177.599 27.0301 177.599 26.0925C177.599 25.4776 177.081 25.0255 175.981 24.7989L171.451 23.829C168.119 23.1169 166.599 21.532 166.599 18.9447C166.599 16.1957 168.929 13.8987 173.749 13.8987C176.66 13.8987 179.249 14.7402 181.028 15.8396L179.054 19.1389C177.599 18.3621 175.658 17.5216 173.619 17.5216C171.775 17.5216 170.708 17.9748 170.708 18.8153C170.708 19.3655 171.096 19.7215 172.164 19.9147L175.981 20.6267C180.123 21.4359 181.708 23.2798 181.708 25.7699C181.708 29.3605 178.117 31.2367 174.202 31.2367C171.065 31.2357 168.541 30.5884 165.823 29.0358Z" fill="#0C1825"/><path d="M185.039 14.2852V9.72467L189.342 6.94323V14.2863H191.865V18.0387H189.341V30.8162H185.038V18.0377H182.579V14.2852H185.039Z" fill="#0C1825"/><path d="M36.9555 16.9435C36.8782 15.8838 36.7174 14.847 36.4407 13.8259C35.2116 9.27996 32.623 5.71651 28.6674 3.16685C26.1488 1.52973 23.3607 0.623467 20.3575 0.385416C19.1054 0.293536 17.8691 0.331123 16.6243 0.485648C15.3107 0.662098 14.0357 0.969059 12.7993 1.41488C7.34634 3.39655 3.15166 7.90386 1.58531 13.4949C1.24698 14.7008 1.04754 15.9297 0.962953 17.1816C0.924317 17.8268 0.924316 18.4721 0.924316 19.1173V34.7994C0.924316 35.6441 1.60829 36.3353 2.46038 36.3353H8.52005C9.31158 36.3353 9.96422 35.7287 10.0488 34.9602C10.0488 34.9602 10.0488 34.9602 10.0488 34.9529C10.0874 34.8068 10.1104 34.6533 10.1104 34.4998V34.1385C10.1104 34.1083 10.1031 34.0853 10.1104 34.054V34.031C10.1637 34.0383 10.195 34.0696 10.2253 34.0853C12.5215 35.3445 14.9724 36.0816 17.584 36.282C18.6136 36.3593 19.6505 36.351 20.6947 36.2518C21.6241 36.1599 22.5462 36.0137 23.4599 35.7757C27.3851 34.7389 30.6264 32.6424 33.1535 29.4475C35.3275 26.6984 36.5712 23.5568 36.9252 20.0706C37.0328 19.0244 37.0401 17.9876 36.9555 16.9435ZM22.1786 26.9646C22.1556 27.0795 22.0637 27.1568 21.9478 27.1568H15.9873C15.8798 27.1568 15.7795 27.0795 15.7566 26.9646L15.7493 26.926V26.7036C15.7493 26.4196 15.7795 26.1586 15.8412 25.8892C15.8798 25.7974 15.9028 25.6898 15.9414 25.5896C15.9717 25.4894 16.0187 25.3975 16.0563 25.2972C16.1095 25.2054 16.1565 25.1124 16.2098 25.0289C16.2401 24.983 16.2641 24.9443 16.2944 24.8984C16.3476 24.8138 16.4176 24.7293 16.4792 24.653C16.5481 24.5685 16.617 24.4923 16.687 24.415C17.0399 24.0694 17.4785 23.7927 17.962 23.6392C17.301 23.2863 16.8561 22.5795 16.8561 21.7808C16.8561 20.6135 17.8012 19.6686 18.9686 19.6613C19.5524 19.6613 20.0828 19.9066 20.4661 20.2836C20.8503 20.6678 21.0884 21.1971 21.0884 21.7808C21.0884 22.5795 20.6352 23.2863 19.9826 23.6392C21.2649 24.0621 22.1943 25.267 22.1943 26.7036C22.1932 26.7882 22.1859 26.8811 22.1786 26.9646ZM32.4862 13.9408H5.44897C5.23386 13.9408 5.08036 13.7257 5.14927 13.5179C7.1542 7.82764 12.5842 3.7411 18.9676 3.7411C25.351 3.7411 30.781 7.8266 32.7848 13.5179C32.8548 13.7257 32.7013 13.9408 32.4862 13.9408Z" fill="#0C1825"/>
                    </svg>
                </Link>
                <Image
                 src={Logo} 
                 className="xl:ml-[10%] h-24 w-32"
                 alt="NDPR audit" 
                //  width={110} 
                 quality={100}
                 placeholder='blur' 
                 />
            </div>

            <div className="sm:flex sm:justify-between  lg:w-[40%] lg:mx-auto 
                max-[671px]:w-[80%] max-[671px]:mt-3">
                 <div className="flex justify-between gap-28">
                    <div>
                      <p className="font-bold">Products</p>
                      <p className="text-gray-500 mt-2 text-sm">Piggybank</p>
                      <p className="text-gray-500 mt-2 text-sm">Invest</p>
                      <p className="text-gray-500 mt-2 text-sm">Safelock</p>
                      <p className="text-gray-500 mt-2 text-sm">Target Savings</p>
                      <p className="text-gray-500 mt-2 text-sm">Flex Naira</p>
                      <p className="text-gray-500 mt-2 text-sm">Flex Dollar</p>
                    </div>
                    <div className="">
                      <p className="font-bold">Company</p>
                      <Link href="/"><p className="text-gray-500 mt-2">About</p></Link>
                      <p className="text-gray-500 mt-2 text-sm">FAQs</p>
                      <p className="text-gray-500 mt-2 text-sm">Blog</p>
                    </div>
                    <div className="md:flex md:flex-col hidden">
                      <p className="font-bold">Legal</p>
                      <p className="text-gray-500 mt-2 text-sm">Terms</p>
                      <p className="text-gray-500 mt-2 text-sm">Privacy</p>
                      <p className="text-gray-500 mt-2 text-sm">Security</p>
                    </div>
                 </div>
                  <div className="md:hidden max-[671px]:mt-3">
                      <p className="font-bold">Legal</p>
                      <p className="text-gray-500 mt-2 text-sm">Terms</p>
                      <p className="text-gray-500 mt-2 text-sm">Privacy</p>
                      <p className="text-gray-500 mt-2 text-sm">Security</p>
                  </div>
            </div>

            <div className="lg:w-[30%] lg:h-36  max-[1023px]:mt-5 max-[1023px]:mb-5">
                <div className="flex justify-between lg:w-[50%] h-5 lg:ms-auto 
                             max-[1023px]:w-[40%] ">
                  <a className="" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/PiggyBankNG/">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01Ljc0NTEzIDE1Ljk5NjNWOS4wNjQzNkg4LjA3MzUxTDguNDIyMSA2LjM2MjkxSDUuNzQ1MTNWNC42MzgxMUM1Ljc0NTEzIDMuODU1OTkgNS45NjI1IDMuMzIyOTQgNy4wODQ5NCAzLjMyMjk0TDguNTE2NDYgMy4zMjIyOFYwLjkwNjEzN0M4LjI2ODc3IDAuODczMzM1IDcuNDE5MDYgMC43OTk4MDUgNi40MzA0OSAwLjc5OTgwNUM0LjM2NjU1IDAuNzk5ODA1IDIuOTUzNTQgMi4wNTg2OSAyLjk1MzU0IDQuMzcwN1Y2LjM2Mjk4SDAuNjE5MTQxVjkuMDY0NDNIMi45NTM0NlYxNS45OTYzSDUuNzQ1MTNaIiBmaWxsPSIjM0Q0RjYwIi8+Cjwvc3ZnPgo=" alt="Facebook"/></a>
                  
                  <a className="" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/piggybankng/">   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className=" text-gray-500" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg></a>
                     
                  <a class="" target="_blank" rel="noreferrer noopener" href="https://mobile.twitter.com/PiggyBankNG/">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                  className="text-gray-500" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg></a>
                      
                  <a class="" target="_blank" rel="noreferrer noopener" href="https://www.tiktok.com/@piggybank_ng?_t=8cwbLU1TTcs&amp;_r=1">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjg5NCAyLjM1QzEwLjMyNDQgMS42OTk2OSAxMC4wMTA0IDAuODY0NTI3IDEwLjAxMDcgMEg3LjQzNTY4VjEwLjMzMzNDNy40MTU4MiAxMC44OTI1IDcuMTc5NzQgMTEuNDIyMiA2Ljc3NzE1IDExLjgxMDhDNi4zNzQ1NiAxMi4xOTk0IDUuODM2ODggMTIuNDE2NiA1LjI3NzM0IDEyLjQxNjdDNC4wOTQwMSAxMi40MTY3IDMuMTEwNjggMTEuNDUgMy4xMTA2OCAxMC4yNUMzLjExMDY4IDguODE2NjcgNC40OTQwMSA3Ljc0MTY3IDUuOTE5MDEgOC4xODMzM1Y1LjU1QzMuMDQ0MDEgNS4xNjY2NyAwLjUyNzM0NCA3LjQgMC41MjczNDQgMTAuMjVDMC41MjczNDQgMTMuMDI1IDIuODI3MzQgMTUgNS4yNjkwMSAxNUM3Ljg4NTY4IDE1IDEwLjAxMDcgMTIuODc1IDEwLjAxMDcgMTAuMjVWNS4wMDgzM0MxMS4wNTQ4IDUuNzU4MjEgMTIuMzA4NSA2LjE2MDU0IDEzLjU5NCA2LjE1ODMzVjMuNTgzMzNDMTMuNTk0IDMuNTgzMzMgMTIuMDI3MyAzLjY1ODMzIDEwLjg5NCAyLjM1WiIgZmlsbD0iIzNENEY2MCIvPgo8L3N2Zz4K" alt="Tiktok"/></a>
                        
                  <a class="" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/@PiggyVest">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMjIxODkgMTAuNzE0M0wxMy4zNDM2IDcuNUw4LjIyMTg5IDQuMjg1NzFWMTAuNzE0M1pNMTkuNjI5OCAyLjMyNUMxOS43NTgxIDIuODI4NTcgMTkuODQ2OSAzLjUwMzU3IDE5LjkwNjEgNC4zNjA3MUMxOS45NzUyIDUuMjE3ODYgMjAuMDA0OCA1Ljk1NzE0IDIwLjAwNDggNi42TDIwLjA2NCA3LjVDMjAuMDY0IDkuODQ2NDMgMTkuOTA2MSAxMS41NzE0IDE5LjYyOTggMTIuNjc1QzE5LjM4MzEgMTMuNjM5MyAxOC44MTA3IDE0LjI2MDcgMTcuOTIyNSAxNC41Mjg2QzE3LjQ1ODcgMTQuNjY3OSAxNi42MSAxNC43NjQzIDE1LjMwNzQgMTQuODI4NkMxNC4wMjQ1IDE0LjkwMzYgMTIuODUwMiAxNC45MzU3IDExLjc2NDYgMTQuOTM1N0wxMC4xOTU2IDE1QzYuMDYwNyAxNSAzLjQ4NTA0IDE0LjgyODYgMi40Njg2IDE0LjUyODZDMS41ODA0NCAxNC4yNjA3IDEuMDA4MDcgMTMuNjM5MyAwLjc2MTM1OSAxMi42NzVDMC42MzMwNyAxMi4xNzE0IDAuNTQ0MjU0IDExLjQ5NjQgMC40ODUwNDMgMTAuNjM5M0MwLjQxNTk2NCA5Ljc4MjE0IDAuMzg2MzU5IDkuMDQyODYgMC4zODYzNTkgOC40TDAuMzI3MTQ4IDcuNUMwLjMyNzE0OCA1LjE1MzU3IDAuNDg1MDQzIDMuNDI4NTcgMC43NjEzNTkgMi4zMjVDMS4wMDgwNyAxLjM2MDcxIDEuNTgwNDQgMC43MzkyODYgMi40Njg2IDAuNDcxNDI5QzIuOTMyNDEgMC4zMzIxNDMgMy43ODExIDAuMjM1NzE0IDUuMDgzNzMgMC4xNzE0MjhDNi4zNjY2MiAwLjA5NjQyODQgNy41NDA5NiAwLjA2NDI4NTcgOC42MjY0OSAwLjA2NDI4NTdMMTAuMTk1NiAwQzE0LjMzMDQgMCAxNi45MDYxIDAuMTcxNDI5IDE3LjkyMjUgMC40NzE0MjlDMTguODEwNyAwLjczOTI4NiAxOS4zODMxIDEuMzYwNzEgMTkuNjI5OCAyLjMyNVoiIGZpbGw9IiMzRDRGNjAiLz4KPC9zdmc+Cg==" alt="Youtube"/></a>
               </div>

               <div className="mt-3 w-[90] h-24  flex flex-col ">
                  <p className=" lg:ms-auto text-gray-500 text-sm">Tesmot house, Abdulrahman Okene close,</p>
                  <p className=" lg:ms-auto text-gray-500 text-sm">Victoria Island, Lagos, Nigeria.</p>
                  <p className=" lg:ms-auto text-gray-500 mt-2 text-sm">contact@piggyvest.com</p>
                  <p className=" lg:ms-auto text-gray-500 mt-2 text-sm">+234 700 933 933 933</p>
               </div>
            </div>
        </div>

          <div className="pb-24 w-[87%] mx-auto mt-8">
                  <p className=" text-xs text-gray-400 tracking-tight">Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 7 years, our customers have <br />
                    saved and invested billions of Naira that they would normally be tempted to spend.</p>
                  <p className="mt-6 text-xs text-gray-400 tracking-tight">PV Capital Limited is a fund manager duly licensed by the Securities and Exchange <br />
                    Commission (SEC) of Nigeria.</p>
                  <p className="text-xs mt-5 text-blue-800">2016 - 2023 PiggyTech Global Limited - RC 1405222</p>
          </div>    
      </footer>

    );
  }
   
  export default Footer;

  