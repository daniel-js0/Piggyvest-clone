"use client"
import Link from 'next/link';


const Dashboard = () => {
  return (
    <div className='mt-36'>
      <h1>This page does not include the layout</h1>
      <Link href="/">Go to Page With Layout</Link>
    </div>
  );
};

export default Dashboard;
