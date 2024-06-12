import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log:["query"],  // to see kya query aayi thi
})

export default prisma;