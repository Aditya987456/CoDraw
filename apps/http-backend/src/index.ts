
import express from "express"
import cors from "cors"
import { JWT_SECRET } from "@repo/backend-common/config"
import { PORT } from '@repo/backend-common/config'
import {z} from "zod"
import bcrypt from "bcrypt"
import { CreateUserSchema, SigninSchema, CreateRoomSchema} from "@repo/common/types"
import { prismaClient } from "@repo/db/client"


const app = express()
app.use(cors());
app.use(express.json());
const saltRounds = 6;




app.get('/h', (req,res)=>{
    return res.status(200).json({
        message:"Server running -- http"
    
    })
})




// signUp --
app.post('/signup', async (req, res)=>{

    try {
        
        const parsedData = CreateUserSchema.safeParse(req.body);
        if(!parsedData.success){
            return res.status(400).json({
                message:"Incorrect input formate"
            })
        }


        const { name, email, password } = req.body;

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
                email: parsedData.data?.username,
                password: hashedPassword,
                name: parsedData.data?.name
            }
        })


        res.status(200).json({
            message:"You have successfully signed up.",
            UserId : user.id
        })



        
    } catch (error:any) {

        // if(error.code === "P2002"){
        //     return res.status(403).json({
        //         message:"User already exist.",
        //         Error:error
        //     })
        // }
        console.log(error);

        return res.status(500).json({
            message:"Error in signing Up",
            Error:error
        })
        
    }
})





// signIn
app.post('/sign', (req,res)=>{

})
















app.listen(PORT, ()=>{
    console.log("Server is running on the port - ", PORT);
})