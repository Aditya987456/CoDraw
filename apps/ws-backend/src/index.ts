import dotenv from "dotenv";
import path from "path";
import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken"
import cookie from "cookie";
import { JWT_SECRET } from "@repo/backend-common/config"  //...

// Load .env from project root
dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });



const wss = new WebSocketServer( {port:8080} )





function VerifyToken(token:string) {
    try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded == "string") {
      return null;
    }

    if (!decoded || !decoded.userId) {
      return null;
    }

    return decoded.userId;
  } catch(e) {
    return null;
  }

  return null;

}

wss.on('connection', function connection(ws, request){
    
    // const url = request.url;  //here (ws, request) is the things of the user who connected...
    // if(!url){
    //     return;
    // }

    const cookies = cookie.parse(
        request.headers.cookie || ""
    );

    const token = cookies.token;

    if (!token) {
        ws.close();
        return;
    }

    const userId = VerifyToken(token);


    if(userId == null){
        ws.close();
        return;
    }








    /*
        Why do we need request?
        Because WebSockets don’t have headers or query parsing like Express after connection

        So:
        No req.body
        No req.query
        No middleware

        we only get authentication info once during connection
    
    */

    //------------- if we passing token in url -------------------------------
    // const queryParams = new URLSearchParams(url.split('?')[1]);
    // const token = queryParams.get('token');

    ws.on('message', function message(data){
        ws.send('pong');
    })













})