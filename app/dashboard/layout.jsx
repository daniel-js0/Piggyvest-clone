import NavInvest from '../compnents/NavInvest'



export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-slate-100 `}>
        
        <NavInvest />
        {children}
     
        </body>
        
    </html>
  )
}
