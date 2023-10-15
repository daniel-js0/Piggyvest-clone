import Link from 'next/link';


const PageWithoutLayout = () => {
  return (
    <div>
      <h1>This page does not include the layout</h1>
      <Link href="/">Go to Page With Layout</Link>
    </div>
  );
};

export default PageWithoutLayout;
