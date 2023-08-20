'use client';

import styles from './error.module.css';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h1>Sorry there was an error</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
