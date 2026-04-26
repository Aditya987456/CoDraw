import express from "express"
import cors from "cors"
import { JWT_SECRET } from "@repo/backend-common/config"
import { PORT } from '@repo/backend-common/config'
import {z} from "zod"
import bcrypt from "bcrypt"
import { CreateUserSchema, SigninSchema, CreateRoomSchema} from "@repo/common/types"



const app = express()
app.use(cors());
app.use(express.json());
const saltRounds = 6;




//input validation using zod -
const ValidateInput = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string()
})





// signUp --
app.post('/signup', async (req, res)=>{

    try {
        
        const isInputValid = ValidateInput.safeParse(req.body);
        if(!isInputValid.success){
            return res.status(400).json({
                message:"Incorrect input formate"
            })
        }


        const { name, email, password } = req.body;

        //find in db is this user is unique or not?
        const uniqueUser = 0
        if(uniqueUser){
            return res.status(403).json({
                message:"User already exists"
            })
        }


        const hashedPassword = await bcrypt.hash(password, saltRounds);

        //save user in db--


        res.status(200).json({
            message:"You have successfully signed up."
        })



        
    } catch (error) {
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