import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo mt-5">
     
      </div>
      <h1>Piggyvest demo</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
);
}
 
export default Navbar;

