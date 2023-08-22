import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github'; // Import providers you wish to use to authenticate.
import { prisma } from '@/lib/prisma'; // import prisma module that we made a while ago
import { PrismaAdapter } from '@next-auth/prisma-adapter';

function generateRandomEmail(): string {
  const numberArray = new Array();
  for (let i = 0; i < 12; i++) {
    const rngNumber = Math.floor(Math.random() * 10);
    numberArray.push(rngNumber);
  }
  const domain = '@noreply.com';
  return numberArray.join('') + domain;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma), // Set auth adapter to use PrismaAdapter
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!, // These are stored in the root .env file
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    //@ts-ignore
    async signIn({ user, account, profile, email, credentials }) {
      //@ts-ignore
      console.log(user, account, profile, email);
      if (!user.email) {
        console.log(email);
        const nullTemporaryEmail = generateRandomEmail();
        user.email = nullTemporaryEmail;
        // @ts-ignore
        profile.email = nullTemporaryEmail;
        console.log(user.email);
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // Necessary return to make AuthJs work

// callbacks: {
//     async signIn({ user, account, profile, email, credentials }: SignInCallbackParams) {
//         // Check if the user is allowed to sign in
//         if (user.email === 'admin@example.com') {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'
//
//
// const options = {
//     providers: [
//         Providers.Google({
//             clientId: process.env.FRONT_GOOGLE_CLIENT_ID,
//             clientSecret: process.env.FRONT_GOOGLE_CLIENT_SECRET
//         }),
//         Providers.GitHub({
//             clientId: process.env.FRONT_GITHUB_CLIENT_ID,
//             clientSecret: process.env.FRONT_GITHUB_CLIENT_SECRET
//         }),
//     ],
//     database: process.env.FRONT_DB_URL,
//
//     secret: process.env.FRONT_SESSION_SECRET,
//
//     session: {
//         jwt: true,
//     },
//
//     jwt: {
//
//         secret: process.env.FRONT_JWT_SECRET,
//
//     },
//
//     pages: {
//     },
//
//     callbacks: {
//         signIn: async (profile, account, metadata) => {
//             console.info('we are here to see the callback\nP\nP');
//             console.log(profile, 'is the profile');
//             console.log(account, 'is the account');
//             console.log(metadata, 'is the metadata');
//             const res = await fetch('https://api.github.com/user/emails', {
//                 headers: {
//                     'Authorization': `token ${account.accessToken}`
//                 }
//             })
//             const emails = await res.json()
//             if (!emails || emails.length === 0) {
//                 return
//             }
//             const sortedEmails = emails.sort((a, b) => b.primary - a.primary)
//             profile.email = sortedEmails[0].email
//         },
//     },
//
//     events: {},
//
//     debug: process.env.NODE_ENV === 'development',
// }
//
// export default (req, res) => NextAuth(req, res, options)
