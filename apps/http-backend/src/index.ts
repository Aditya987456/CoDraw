// Load .env FIRST, before any other imports
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });



// Now import config (after env is loaded)
import { JWT_SECRET, PORT } from "@repo/backend-common/config"

import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors"
import {z} from "zod"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { CreateUserSchema, SigninSchema, CreateRoomSchema} from "@repo/common/types"
import { prismaClient } from "@repo/db/client"
import { UserMiddleware } from "./middleware";


const app = express()
app.use(cors());
app.use(express.json());
const saltRounds = 6;


app.use(cookieParser());


app.get('/h', (req,res)=>{
    return res.status(200).json({
        message:"Server running -- http"
    
    })
})




// signUp --
app.post('/signup', async (req, res)=>{

    try {
        
        const parsedData = CreateUserSchema.safeParse(req.body);
        console.log(parsedData);
        if(!parsedData.success){
            return res.status(400).json({
                message:"Incorrect input formate..."
            })
        }


        const { name, email, password } = parsedData.data;

        //find in db is this user is unique or not?  -->it may cause race condition so not rely on this...
        // const uniqueUser = ....req from db...
        // if(uniqueUser){
        //     return res.status(403).json({
        //         message:"User already exists"
        //     })
        // }


        const hashedPassword = await bcrypt.hash(password, saltRounds);

        //save user in db--
        const user = await prismaClient.user.create({
            data:{
                email: parsedData.data?.email,
                password: hashedPassword,
                name: parsedData.data?.name
            }
        })


        res.status(200).json({
            message:"You have successfully signed up.",
            UserId : user.id
        })



        
    } catch (error:any) {

        if(error.code === "P2002"){
            return res.status(403).json({
                message:"User already exist.",
                Error:error
            })
        }
        console.log(error);

        return res.status(500).json({
            message:"Error in signing Up",
            Error:error
        })
        
    }
})





// signIn
app.post('/signin',async (req,res)=>{

  try {

    const parsedData = SigninSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.status(400).json({
            message:"Invalid input formate."
        })
    }


    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.email,
        
        }
    })

    if(!user){
        res.status(403).json({
            message:"Invalid user. User not exist."
        })
        return
    }

    //validate password-
    const validatePassword = await bcrypt.compare(parsedData.data.password, user.password);
    if(!validatePassword){
        return res.status(443).json({
            message:"Invalid password. Try again"
        })
    }


    //this is the saved id from the db of this user field...and we are creating the token using this id...
    const userId = user?.id;
    const token = jwt.sign({userId}, JWT_SECRET);
    

    // res.status(200).json({
    //     token:token
    // })


    //------Browser stores cookie-----
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).json({
        message: "Logged in"
    })
    

  } catch (error) {
    return res.status(411).json({
        message:"error in signing in."
    })
    
  }




})


//just for checking middleware working...
app.post('/ans', UserMiddleware, (req,res)=>{
    return res.status(200).json({
        message:"HII AFter passing middleware..."
    })
})





//creating room 
app.post("/room", UserMiddleware, async (req, res)=>{
    const ParsedData = CreateRoomSchema.safeParse(req.body);

    if(!ParsedData.success){
        res.json({
            message:"Incorrect input format for creating the room..."
        })
        return;
    }

    const userId = req.userId;
    if(!userId){
        return res.status(404).json({
            message:"User not found."
        })
    }


    try {

        //db-call to create room...
        //return promise not immediately create room so await -- basic things man...

        const room = await prismaClient.room.create({
            data:{
                slug:ParsedData.data.roomName,
                adminId:userId
            }
        })

        res.status(200).json({
            message:"Room is created with ID :",
            roomId : room.id
        })
        
    } catch (error:any) {

        if (error.code === "P2002") {
        return res.status(400).json({
            message: "Room already exists"
        });
        }   


        res.status(400).json({
            message:"Error in creating the room"
        })
    }

    

} )





//#### here i should used things like - pagination so easy load of large quantity messages...


// get old messages... of the room in which user joined...
app.get("/chats/:roomId", async (req, res) => {

    try {
        const roomId = Number(req.params.roomId)
        const messages = await prismaClient.chat.findMany({
            where:{
                roomId:roomId,
            },
            orderBy:{
                id:"desc"
            },
            take:500
        })

        res.status(200).json({
            messages
        })

    } catch (error) {
        console.log('error :', error);
        res.status(404).json({
            messages:[]
        })
    }

})








// get roomId using the slug name...
app.get("/room/:slug", async (req, res)=>{

    try {

        const slug = req.params.slug;
        const roomId = await prismaClient.room.findFirst({
            where:{
                slug:slug
            }
        })

        res.status(200).json({
            roomId : roomId
        })


    } catch (error) {
        console.log('Error in finding the roomId using slug', error)
        res.status(404).json({
            roomId:null
        })
    }

})















app.listen(PORT, ()=>{
    console.log("Server is running on the port - ", PORT);
})