import { prisma } from '@/lib/prisma';
import UserCard from '../components/UserCard/UserCard';
import styles from './page.module.css';
import { User } from '@prisma/client';
import { Inter, Roboto_Mono, Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({weight: "400", variable: "--bebas-neue"});

const fakeUsers: User[] = [
  {
    id: "1231",
    name: "Justin",
    bio: "I love cheese",
    age: 30,
    email: "justcheese@nit.ac.jp",
    emailVerified: null,
    image: null,
  },
  {
    id: "1232",
    name: "Emily",
    bio: "I love pizza",
    age: 25,
    email: "emilypizza@nit.ac.jp",
    emailVerified: null,
    image: null,
  },
  {
    id: "1233",
    name: "Sophia",
    bio: "I love sushi",
    age: 28,
    email: "sophiasushi@nit.ac.jp",
    emailVerified: null,
    image: null,
  },
  {
    id: "1234",
    name: "Oliver",
    bio: "I love ramen",
    age: 32,
    email: "oliverramen@nit.ac.jp",
    emailVerified: null,
    image: null,
  },
  {
    id: "1235",
    name: "Ava",
    bio: "I love pasta",
    age: 27,
    email: "avapasta@nit.ac.jp",
    emailVerified: null,
    image: null,
  },
  {
    id: "1236",
    name: "Ethan",
    bio: "I love tacos",
    age: 29,
    email: "ethantacos@nit.ac.jp",
    emailVerified: null,
    image: null,
  },
  {
    id: "1237",
    name: "Isabella",
    bio: "I love burgers",
    age: 26,
    email: "isabellaburgers@nit.ac.jp",
    emailVerified:null,
   image:null
},
{
   id:"1238", 
   name:"William", 
   bio:"I love steak", 
   age :33, 
   email:"williamsteak@nit.ac.jp", 
   emailVerified:null, 
   image:null
},
{
   id:"1239", 
   name:"Mia", 
   bio:"I love curry", 
   age :31, 
   email:"miacurry@nit.ac.jp", 
   emailVerified:null, 
   image:null
},
{
   id:"1240", 
   name:"James", 
   bio:"I love fried chicken", 
   age :34, 
   email:"jameschicken@nit.ac.jp", 
   emailVerified:null, 
   image:null
}
]
export default async function Users() {
  // const users = await prisma.user.findMany();

  return (
    <div>
      <h1 className="font-be text-7xl text-titleSize py-10">Users</h1>
      <div className="py-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-col-4">
        {fakeUsers.map((user) => {
          return <UserCard key={user.id} {...user} />; // populate page with UserCards
        })}
      </div>
    </div>
  );
}
