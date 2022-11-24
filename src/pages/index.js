import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href='/07_router' as='dummy'>
        <a>/07_router</a>    
      </Link>
        <a href='/07_router'>/07_router</a>    
    </>
  );
}
