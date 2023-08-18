import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github'; // Import providers you wish to use to authenticate.
import { prisma } from '@/lib/prisma'; // import prisma module that we made a while ago
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma), // Set auth adapter to use PrismaAdapter
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!, // These are stored in the root .env file
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // Necessary return to make AuthJs work
