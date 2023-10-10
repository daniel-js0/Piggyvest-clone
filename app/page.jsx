import Link from 'next/link'


export default function Home() {
  return (
        
        <main>
      <h2 className=' text-red-600'>Dashboard</h2> 
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
        <svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 50.5C0 9.325 8.825 0.5 50 0.5C91.175 0.5 100 9.325 100 50.5C100 91.675 91.175 100.5 50 100.5C8.825 100.5 0 91.675 0 50.5Z" fill="white"/>
<rect width="36" height="36" transform="translate(32 32.5)" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.999 43.0002V44.7563C39.2512 45.3741 37.999 47.0409 37.999 49.0002V59.5002C37.999 61.9855 40.0137 64.0002 42.499 64.0002H57.499C59.9843 64.0002 61.999 61.9855 61.999 59.5002V49.0002C61.999 47.0409 60.7468 45.3741 58.999 44.7563V43.0002C58.999 39.6865 56.3127 37.0002 52.999 37.0002H46.999C43.6853 37.0002 40.999 39.6865 40.999 43.0002ZM52.999 40.0002H46.999C45.3422 40.0002 43.999 41.3434 43.999 43.0002V44.5002H55.999V43.0002C55.999 41.3434 54.6559 40.0002 52.999 40.0002ZM49.999 56.5002C51.6559 56.5002 52.999 55.1571 52.999 53.5002C52.999 51.8434 51.6559 50.5002 49.999 50.5002C48.3422 50.5002 46.999 51.8434 46.999 53.5002C46.999 55.1571 48.3422 56.5002 49.999 56.5002Z" fill="#122231"/>
</svg>




    </main>
  
  )
}