'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode; // specifies that the 'childern' can hold any React element
};

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

// This is a wrapper which explicitly tells NextJs that Sesson Provider is a client component.
// Apperently this is nessesary to avoid an error, as not all client side components from React are read as client-side by NextJs
