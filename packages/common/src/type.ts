import {z} from "zod"
import type { JwtPayload } from "jsonwebtoken";

export const CreateUserSchema = z.object({
    email:z.string().min(3).max(30),
    password:z.string(),
    name:z.string()
})

export const SigninSchema = z.object({
    email:z.string().min(3).max(30),
    password:z.string()
})

export const CreateRoomSchema = z.object({
    roomName:z.string().min(3).max(20),
})





export interface CustomJwtPayload extends JwtPayload {
  userId: string;
}