import Image from "next/image";
import Link from "next/link";
import Logo from './audit.png'

const Footer = () => {
    return (
      <footer className="mx-auto bg-gray-50 ">
        
         <div className="flex justify-center">
          <h1 className="lg:text-3xl text-2xl leading-4 font-extrabold text-gray-900 pt-36 pb-5">As featured in</h1>
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



        <div className=" lg:flex lg:w-[87%] lg:mx-auto mt-32 lg:h-60  border-b border-gray-300
                            flex max-[1023px]:flex-col  max-[1023px]:w-[87%] max-[1023px]:mx-auto">
            <div className="-mt-8">
                <Link href="/">
                    <img className="h-20 w-40 md:h-24 md:w-44 xl:ml-[8%]" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMTMwIDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzQuNjE2IDE5LjQyNjFWMjMuOTk3MUgzMS43MDIxVjkuMTE2ODNIMzQuNjE2VjkuODI4MDFDMzUuNDI2IDkuMzExODMgMzYuNDU3NSA4Ljk2NDg0IDM3LjUyOTggOC45NjQ4NEM0MC44Mzk5IDguOTY0ODQgNDMuMjcwMSAxMS41NTE1IDQzLjI3MDEgMTQuNjM3MUM0My4yNzAxIDE3LjY5OTcgNDAuODYwMyAyMC4zMDkzIDM3LjUyOTggMjAuMzA5M0MzNi40MTM4IDIwLjMwOTMgMzUuNDI2IDE5Ljk2NTIgMzQuNjE2IDE5LjQyNjFaTTM0LjYxNiAxMy4yODA3VjE1LjkxMzJDMzUuMTIwMSAxNi45MjU1IDM2LjEyODMgMTcuNTk2NSAzNy4zMTEzIDE3LjU5NjVDMzkuMDIxNyAxNy41OTY1IDQwLjM1NjIgMTYuMzAzMiA0MC4zNTYyIDE0LjY0MjhDNDAuMzU2MiAxMi45NTk1IDM5LjA0MjEgMTEuNjg5MSAzNy4zMzE3IDExLjY4OTFDMzYuMTQ4NyAxMS42ODM0IDM1LjEyMDEgMTIuMzA4NSAzNC42MTYgMTMuMjgwN1oiIGZpbGw9IiMzRDRGNjAiLz4KPHBhdGggZD0iTTQ0Ljg0NjcgNi4xMTc0QzQ0Ljg0NjcgNS4xNjgyMSA0NS41NDg5IDQuNDU3MDMgNDYuNDkwMSA0LjQ1NzAzQzQ3LjQzMTMgNC40NTcwMyA0OC4yMDA1IDUuMTY4MjEgNDguMjAwNSA2LjExNzRDNDguMjAwNSA3LjAyMzU4IDQ3LjQzNDIgNy43Nzc3OCA0Ni40OTAxIDcuNzc3NzhDNDUuNTQ2IDcuNzc3NzggNDQuODQ2NyA3LjAyMzU4IDQ0Ljg0NjcgNi4xMTc0Wk00NS4wMjQ0IDkuMTE2OTdINDcuOTgyVjIwLjEzNzRINDUuMDI0NFY5LjExNjk3WiIgZmlsbD0iIzNENEY2MCIvPgo8cGF0aCBkPSJNNDkuNzMyNCAxNC41OTY1QzQ5LjczMjQgMTEuNTU2OCA1Mi4xNDIyIDguOTkwMjMgNTUuNDcyNyA4Ljk5MDIzQzU2LjU2ODMgOC45OTAyMyA1Ny41NzY1IDkuMjcxMjYgNTguNDMwMiA5LjcyNDM1VjkuMTE2NDFINjEuMzIzN1YxOS41MTE3QzYxLjMyMzcgMjIuMzc5MyA1OC44MDMyIDIzLjkzMzYgNTUuNjQ3NSAyMy45MzM2QzUzLjU4NzQgMjMuOTMzNiA1MS42MTQ4IDIzLjMyODUgNTAuMzIzOSAyMi4zMzYzTDUxLjUzMDMgMjAuMjg4OEM1Mi42MDU1IDIxIDU0LjA3MTEgMjEuNDUzMSA1NS42NTA0IDIxLjQ1MzFDNTcuNjg3MiAyMS40NTMxIDU4LjMyNTMgMjAuNjU1OSA1OC40MTI3IDE5LjM2MjZDNTcuNTM1NyAxOS45MDE3IDU2LjUyNzUgMjAuMjI1NyA1NS40NzU2IDIwLjIyNTdDNTIuMTIxOCAyMC4yMjI4IDQ5LjczMjQgMTcuNzY1MyA0OS43MzI0IDE0LjU5NjVaTTU4LjQzMzEgMTUuODIzOVYxMy4zNjYzQzU3LjkyOSAxMi4zMzExIDU2Ljg3NzIgMTEuNjQgNTUuNjk0MSAxMS42NEM1My45ODM3IDExLjY0IDUyLjY0OTIgMTIuOTc2MyA1Mi42NDkyIDE0LjU5MzZDNTIuNjQ5MiAxNi4yOTcgNTMuOTYzMyAxNy40ODQyIDU1LjY3MzcgMTcuNDg0MkM1Ni45MjA5IDE3LjQ4NDIgNTcuOTA1NyAxNi44NTkxIDU4LjQzMzEgMTUuODIzOVoiIGZpbGw9IiMzRDRGNjAiLz4KPHBhdGggZD0iTTYzLjA3ODEgMTQuNTk2NUM2My4wNzgxIDExLjU1NjggNjUuNDg3OSA4Ljk5MDIzIDY4LjgxODQgOC45OTAyM0M2OS45MTQgOC45OTAyMyA3MC45MjIyIDkuMjcxMjYgNzEuNzc1OSA5LjcyNDM1VjkuMTE2NDFINzQuNjY5NFYxOS41MTE3Qzc0LjY2OTQgMjIuMzc5MyA3Mi4xNDg5IDIzLjkzMzYgNjguOTkzMiAyMy45MzM2QzY2LjkzMzEgMjMuOTMzNiA2NC45NjA1IDIzLjMyODUgNjMuNjY5NiAyMi4zMzYzTDY0Ljg3NiAyMC4yODg4QzY1Ljk1MTIgMjEgNjcuNDE2OCAyMS40NTMxIDY4Ljk5NjEgMjEuNDUzMUM3MS4wMzI5IDIxLjQ1MzEgNzEuNjcxIDIwLjY1NTkgNzEuNzU4NCAxOS4zNjI2QzcwLjg4MTQgMTkuOTAxNyA2OS44NzMyIDIwLjIyNTcgNjguODIxMyAyMC4yMjU3QzY1LjQ2NDYgMjAuMjIyOCA2My4wNzgxIDE3Ljc2NTMgNjMuMDc4MSAxNC41OTY1Wk03MS43NzU5IDE1LjgyMzlWMTMuMzY2M0M3MS4yNzE4IDEyLjMzMTEgNzAuMjE5OSAxMS42NCA2OS4wMzY5IDExLjY0QzY3LjMyNjUgMTEuNjQgNjUuOTkyIDEyLjk3NjMgNjUuOTkyIDE0LjU5MzZDNjUuOTkyIDE2LjI5NyA2Ny4zMDYxIDE3LjQ4NDIgNjkuMDE2NSAxNy40ODQyQzcwLjI2MzYgMTcuNDg0MiA3MS4yNTE0IDE2Ljg1OTEgNzEuNzc1OSAxNS44MjM5WiIgZmlsbD0iIzNENEY2MCIvPgo8cGF0aCBkPSJNNzguOTE3OSA5LjExNjIxTDgxLjg1NTEgMTYuNDcxOEw4NC44Nzk2IDkuMTE2MjFIODcuOTQ3OUw4MS41MDU0IDIzLjk5NjVINzguNzY2NEw4MC4zODk0IDIwLjAyNzZMNzUuNjc0OCA5LjExNjIxSDc4LjkxNzlaIiBmaWxsPSIjM0Q0RjYwIi8+CjxwYXRoIGQ9Ik04Ny4zOTc1IDkuMTE2MjFIOTAuNTI5OEw5My4zNzk2IDE2LjU1NzhMOTYuMjA2IDkuMTE2MjFIOTkuMjc0M0w5NC43ODExIDIwLjEzNjZIOTEuODQ0TDg3LjM5NzUgOS4xMTYyMVoiIGZpbGw9IiMzRDRGNjAiLz4KPHBhdGggZD0iTTk5LjQ5MjIgMTQuNTUzMUM5OS40OTIyIDExLjQ0NzQgMTAxLjc1IDguODgwODYgMTA1LjI3NiA4Ljg4MDg2QzEwOC41NDMgOC44ODA4NiAxMTEuMDE2IDExLjI5NTQgMTExLjA4MyAxNC40NjcxQzExMS4xMDcgMTQuNzI1MSAxMTEuMTA3IDE1LjAwNjIgMTExLjA4MyAxNS4yODcySDEwMi4yNTVDMTAyLjM0MiAxNi44Mzg2IDEwMy44NTQgMTcuODUzOCAxMDUuNDc3IDE3Ljg1MzhDMTA2LjgxNSAxNy44NTM4IDEwNy42MDEgMTcuNDg2NyAxMDguNTIyIDE2LjczMjVMMTEwLjEyMiAxOC4zOTI5QzEwOC44MjggMTkuNzI5MiAxMDcuNTM3IDIwLjM1NDQgMTA1LjQ3NyAyMC4zNTQ0QzEwMS42ODMgMjAuMzU0NCA5OS40OTIyIDE3LjU2OTkgOTkuNDkyMiAxNC41NTMxWk0xMDIuNDA2IDEzLjIzNjhIMTA4LjA1OUMxMDcuNzczIDEyLjIwMTYgMTA2Ljc2NSAxMS4yOTU0IDEwNS4yMzIgMTEuMjk1NEMxMDMuNDU4IDExLjI5NTQgMTAyLjcxNSAxMi4xNzg3IDEwMi40MDYgMTMuMjM2OFoiIGZpbGw9IiMzRDRGNjAiLz4KPHBhdGggZD0iTTExMS42OTkgMTguOTUyNUwxMTMuMTI0IDE2LjY2N0MxMTQuMzk1IDE3LjQ4NzIgMTE1LjkwNyAxNy45ODMzIDExNy40NjMgMTcuOTgzM0MxMTguOTMxIDE3Ljk4MzMgMTE5LjY3NyAxNy42MTYyIDExOS42NzcgMTYuOTkxMUMxMTkuNjc3IDE2LjU4MSAxMTkuMzI4IDE2LjI3OTkgMTE4LjU4MiAxNi4xMjc5TDExNS41MTMgMTUuNDc5OEMxMTMuMjU1IDE1LjAwNjcgMTEyLjIyNyAxMy45NDg1IDExMi4yMjcgMTIuMjIyMkMxMTIuMjI3IDEwLjM4OTcgMTEzLjgwMyA4Ljg1ODQgMTE3LjA2OSA4Ljg1ODRDMTE5LjA0MiA4Ljg1ODQgMTIwLjc5MyA5LjQyMDQ2IDEyMiAxMC4xNTE3TDEyMC42NjIgMTIuMzUxMkMxMTkuNjc3IDExLjgzNSAxMTguMzYgMTEuMjczIDExNi45ODIgMTEuMjczQzExNS43MzIgMTEuMjczIDExNS4wMDkgMTEuNTc0MSAxMTUuMDA5IDEyLjEzNjFDMTE1LjAwOSAxMi41MDMyIDExNS4yNzIgMTIuNzQxMiAxMTUuOTk0IDEyLjg3MDJMMTE4LjU3OSAxMy4zNDM0QzEyMS4zODUgMTMuODgyNSAxMjIuNDU3IDE1LjExMjggMTIyLjQ1NyAxNi43NzMxQzEyMi40NTcgMTkuMTY3NiAxMjAuMDI0IDIwLjQxNzkgMTE3LjM3MiAyMC40MTc5QzExNS4yNDggMjAuNDE3OSAxMTMuNTM4IDE5Ljk4NzggMTExLjY5OSAxOC45NTI1WiIgZmlsbD0iIzNENEY2MCIvPgo8cGF0aCBkPSJNMTIzLjA0OCA5LjExNjc3SDEyNC43MTVWNi4wNzcwNUwxMjcuNjI4IDQuMjIxNjhWOS4xMTY3N0gxMjkuMzM5VjExLjYxNzRIMTI3LjYyOFYyMC4xMzcySDEyNC43MTVWMTEuNjE3NEgxMjMuMDQ4VjkuMTE2NzdaIiBmaWxsPSIjM0Q0RjYwIi8+CjxwYXRoIGQ9Ik0yNC40MDkyIDExLjA2OTdDMjQuMzU2OCAxMC4zNjQzIDI0LjI0OSA5LjY3MzE5IDI0LjA1OTYgOC45OTA2OEMyMy4yMjYyIDUuOTU5NTcgMjEuNDc1IDMuNTg1MTUgMTguNzk0MyAxLjg4NDYzQzE3LjA4NjcgMC43OTQ5MiAxNS4xOTg2IDAuMTg5ODQ3IDEzLjE2NDcgMC4wMzIxMjYxQzEyLjMxNjggLTAuMDI4MDk0NyAxMS40ODA1IC0wLjAwMjI4Njk3IDEwLjYzNTUgMC4wOTgwODFDOS43NDY3OSAwLjIxNTY1NSA4Ljg4MTM4IDAuNDE5MjYgOC4wNDUxIDAuNzE3NDk2QzQuMzUwMzYgMi4wMzk0OSAxLjUwOTM3IDUuMDQ0NzkgMC40NDg3MzEgOC43NzI3NEMwLjIxODUzOCA5LjU3NTY5IDAuMDg0NTAxMyAxMC4zOTU4IDAuMDI2MjI0NiAxMS4yMzAzQzQuMzQxOTZlLTA4IDExLjY2MDUgMCAxMi4wOTA2IDAgMTIuNTIwOFYyMi45NzYyQzAgMjMuNTM4MyAwLjQ2MzMgMjQgMS4wNDAyNCAyNEg1LjE0NTg0QzUuNjgxOTggMjQgNi4xMjQ4OSAyMy41OTU3IDYuMTgwMjUgMjMuMDgyNEM2LjE4MDI1IDIzLjA4MjQgNi4xODAyNSAyMy4wODIzIDYuMTgwMjUgMjMuMDc2NkM2LjIwNjQ3IDIyLjk3OTEgNi4yMjEwNCAyMi44NzU5IDYuMjIxMDQgMjIuNzc1NVYyMi41MzQ2QzYuMjIxMDQgMjIuNTE0NiA2LjIxNTIxIDIyLjUwMDIgNi4yMjEwNCAyMi40NzczVjIyLjQ2MjlDNi4yNTYwMSAyMi40Njg3IDYuMjc5MzIgMjIuNDg4NyA2LjI5OTcyIDIyLjQ5NzRDNy44NTU3MSAyMy4zMzc2IDkuNTEzNjggMjMuODI3OSAxMS4yODI0IDIzLjk2MjdDMTEuOTc4OCAyNC4wMTQzIDEyLjY4MSAyNC4wMDg2IDEzLjM4OTEgMjMuOTQyN0MxNC4wMTg1IDIzLjg4MjQgMTQuNjQyIDIzLjc4NDkgMTUuMjYyNyAyMy42MjQzQzE3LjkyMDEgMjIuOTMzMiAyMC4xMTcxIDIxLjUzNjcgMjEuODI3NiAxOS40MDZDMjMuMjk5IDE3LjU3MzYgMjQuMTQ0MSAxNS40ODAyIDI0LjM4MyAxMy4xNTQ1QzI0LjQ2MTcgMTIuNDU3NyAyNC40Njc1IDExLjc2NjYgMjQuNDA5MiAxMS4wNjk3Wk0xNC40MDAyIDE3Ljc1MTRDMTQuMzg1NiAxNy44Mjg4IDE0LjMyMTUgMTcuODgwNCAxNC4yNDI4IDE3Ljg4MDRIMTAuMjA3MkMxMC4xMzQzIDE3Ljg4MDQgMTAuMDY3MyAxNy44Mjg4IDEwLjA0OTggMTcuNzUxNEwxMC4wNDQgMTcuNzI1NlYxNy41NzY1QzEwLjA0NCAxNy4zODcyIDEwLjA2NDQgMTcuMjEyMyAxMC4xMDUyIDE3LjAzNDVDMTAuMTMxNCAxNi45NzQyIDEwLjE0NiAxNi45MDI2IDEwLjE3MjIgMTYuODMzN0MxMC4xOTI2IDE2Ljc2NzggMTAuMjI0NyAxNi43MDQ3IDEwLjI1MDkgMTYuNjM4N0MxMC4yODU4IDE2LjU3ODUgMTAuMzE3OSAxNi41MTU0IDEwLjM1NTggMTYuNDYwOUMxMC4zNzYyIDE2LjQyOTQgMTAuMzkwNyAxNi40MDM2IDEwLjQxNDEgMTYuMzc0OUMxMC40NDkgMTYuMzE3NSAxMC40OTg2IDE2LjI2MzEgMTAuNTM5MyAxNi4yMTE0QzEwLjU4NiAxNi4xNTQxIDEwLjYzMjYgMTYuMTA1MyAxMC42NzkyIDE2LjA1MzdDMTAuOTE4MSAxNS44MjQzIDExLjIxNTQgMTUuNjM3OSAxMS41NDE3IDE1LjUzNzVDMTEuMDkzIDE1LjMwMjQgMTAuNzkyOSAxNC44MzIxIDEwLjc5MjkgMTQuMjk4N0MxMC43OTI5IDEzLjUyMTYgMTEuNDMzOSAxMi44OTA3IDEyLjIyMzUgMTIuODg1QzEyLjYxOTggMTIuODg1IDEyLjk3ODIgMTMuMDQ4NCAxMy4yMzc2IDEzLjMwMDhDMTMuNDk2OSAxMy41NTYgMTMuNjYwMSAxMy45MDg3IDEzLjY2MDEgMTQuMjk4N0MxMy42NjAxIDE0LjgzMjEgMTMuMzU0MSAxNS4zMDI0IDEyLjkxMTIgMTUuNTM3NUMxMy43Nzk1IDE1LjgxODYgMTQuNDA4OSAxNi42MjQ0IDE0LjQwODkgMTcuNTc5M0MxNC40MTE4IDE3LjYzMzggMTQuNDA2IDE3LjY5NjkgMTQuNDAwMiAxNy43NTE0Wk0yMS4zODE3IDkuMDY4MTFIMy4wNjgyN0MyLjkyMjU4IDkuMDY4MTEgMi44MTc2OCA4LjkyNDczIDIuODY0MyA4Ljc4NzA4QzQuMjIyMTUgNC45OTMxNyA3Ljg5OTQxIDIuMjY4ODkgMTIuMjIzNSAyLjI2ODg5QzE2LjU0NzcgMi4yNjg4OSAyMC4yMjQ5IDQuOTkzMTcgMjEuNTgyOCA4Ljc4NzA4QzIxLjYzMjMgOC45MjQ3MyAyMS41Mjc0IDkuMDY4MTEgMjEuMzgxNyA5LjA2ODExWiIgZmlsbD0iIzNENEY2MCIvPgo8L3N2Zz4K" alt="PiggyVest Logo" width="172.45" height="32"/>                
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

  