// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// // ESM-compatible __dirname
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Load .env from project root (2 levels up from packages/db/src/)
// dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

// import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL!,
// });

// export const prismaClient = new PrismaClient({
//   adapter,
// });
















// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "../generated/prisma/client";


// console.log(process.env.DATABASE_URL);


// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL!,
// });



// export const prismaClient = new PrismaClient({
//   adapter,
// });



import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), "../../.env")
});

import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

console.log('db-------------------------------------',process.env.DATABASE_URL);

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});

export const prismaClient = new PrismaClient({ adapter });