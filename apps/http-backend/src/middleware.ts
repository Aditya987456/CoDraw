import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { CustomJwtPayload } from "@repo/common/types";

//import { JwtPayload } from 'jsonwebtoken'
// app.use(cookieParser());

export const UserMiddleware = (req:Request, res:Response, next:NextFunction)=>{
    
    try {

        const token = req.cookies.token

        if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
        }

        const decoded = jwt.verify(token, JWT_SECRET) as CustomJwtPayload;

        req.userId = decoded.userId;

        next();
        
        
    } catch (error) {
        res.status(401).json({
            message : "Unauthorized, invalid token"
        })
    }
}