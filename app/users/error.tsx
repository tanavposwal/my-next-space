'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className='text-xl font-bold mb-3'>Something went wrong!</h2>
      <button className='border rounded-md hover:border-black transition px-2' onClick={() => reset()}>Try again</button>
    </div>
  );
}