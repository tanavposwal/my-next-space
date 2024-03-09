import { Metadata } from 'next';

export const dynamic = 'force-static'; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};

export default function Home() {
  return (
    <div className='pt-10 flex flex-col gap-3'>
      <h1 className='text-5xl font-bold'>About us</h1>
      <hr />
      <p className=''>We are a social media company that wants to bring people together!</p>
    </div>
  );
}