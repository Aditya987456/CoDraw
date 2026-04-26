import dotenv from "dotenv"
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || "anything"
export const PORT = Number(process.env.PORT) || 3001;

// const port = process.env.PORT;
// if (!port) {
//   throw new Error("PORT is not defined in .env");
// }

// export const PORT = Number(port);