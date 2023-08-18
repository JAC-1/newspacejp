// File that just initalizes prisma client it so we can use it whenever in our app
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
