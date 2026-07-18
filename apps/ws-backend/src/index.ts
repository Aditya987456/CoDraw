import dotenv from "dotenv";
import path from "path";
// Load .env from project root
dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });
import { WebSocketServer, WebSocket } from "ws";
import jwt from "jsonwebtoken"
//import cookie from "cookie";
import { JWT_SECRET } from "@repo/backend-common/config"  //...
import { prismaClient } from "@repo/db/client";
import { parse } from "cookie";




interface User {
    ws: WebSocket,
    rooms:string[],
    userId: string

}

//currently our state is empty...
const users:User[] = [];



const wss = new WebSocketServer( {port:8080} )




//authentication of jwt token...
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
    console.log("JWT ERROR:", e);
    return null;
    
  }

}



wss.on('connection', function connection(ws, request){

    //here "request" becz we need cookies from http connection before upgrading to ws.
    //------------- if we passing token in url -------------------------------
    // const queryParams = new URLSearchParams(url.split('?')[1]);
    // const token = queryParams.get('token');


    // const cookies = cookie.parse(
    //     request.headers.cookie || ""
    // );

    const cookies = parse(
        request.headers.cookie || ""
    );

    console.log('connection attempt...')
    

    const token = cookies.token;

    console.log("Token:", token);


    if (!token) {
        console.log("No token found");
        ws.close();
        return;
    }

    

    const userId = VerifyToken(token);
    if(userId == null){
        console.log('jwt verification failed.')
        ws.close();
        return null;
    }


    //after all check means user that connected is real valid...
    console.log(`Hey User : ${userId} is connected...`)



    //## push this user in the users storage state- where all the users that are connected to this app will be there -with its details like which room they joined, ws , userId
    users.push({
        userId,
        rooms: [], //currently not joined any room just connected to ws.
        ws
    })







    //when  msg come from end client... 
    //## here message is not like text things here message like some request to join a room, send text msg, leave the room , like that all are consider as messages from the client end...
    
    ws.on('message', async function message(data){
        
        let parsedData;
        if (typeof data !== "string") {
            parsedData = JSON.parse(data.toString());
        } else {
            parsedData = JSON.parse(data); // like - {type: "join-room", roomId: 1}
        }


        






    //------------------------------------  joining room  -------------------------------------

        if(parsedData.type == "join-room"){
            const roomId = parsedData.roomId;

        //check is user is there or not-- since hona chahiye becz we do that during connection and if not there means alag se request kar raha hai bad...
            const currentUser = users.find(x => x.ws === ws);
            if(!currentUser){
                ws.close();
                return;
            }


        // check is room is actually exist or not?
            try {
                const room = await prismaClient.room.findUnique({
                    where:{
                        id:Number(roomId)
                    }
                })

                if(!room){
                    ws.send(JSON.stringify({
                        type:"error",
                        message:"Room not found"
                    }))
                    return;
                }

                currentUser.rooms.push(roomId);  //everything is there so update and save the rooms in which user is joining.


            } catch (error) {
                console.error("err in joining room",error);

                ws.send(JSON.stringify({
                    type:"error",
                    message:"something went wrong"
                }))
            }

        }





    // ---------------------------------------- leave room  -------------------------------------------

        if(parsedData.type == "leave-room"){
            const roomId = parsedData.roomId;
            //check is user is exist in users storage or not...
            const currentUser = users.find(x=>x.ws == ws);
            if(!currentUser){
                ws.close();
                return;
            }

            //if everything is there then now leave saaar.
            currentUser.rooms = currentUser.rooms.filter(x => x == roomId);  //return new arr that not have this room id.

        }


    



    // ----------------------------------------- send chat msg ------------------------------------------
        
        if(parsedData.type == "chat"){

            const roomId = parsedData.roomId;
            const message = parsedData.message;


            //## $$ check is user is exist in users storage or not...--> someone may do things like send req from devtools.
            const currentUser = users.find(x=>x.ws == ws);
            if(!currentUser){
                ws.close();
                return;
            }



            //$$ NOTE - here we should also do checks like is there is message is good or not mostly for chat app like msg is abusive like checks.. and many more things...
            

            try {

                //save the chat message in database...coming from a client in a group and then...
                await prismaClient.chat.create({
                    data:{
                        roomId:Number(roomId),   //we defined like this in schema.
                        message,
                        userId
                    }
                })


                //broadcast to all the client that are there in that grp...
                users.forEach(everyone => {
                    if(everyone.rooms.includes(roomId)){
                        everyone.ws.send(JSON.stringify({
                            type:"chat",
                            message,
                            roomId              //sending roomid also even sending msg in that room , becz it will helps in frontend.
                        }))
                    }
                })


            } catch (error) {
                console.error('failed to save the chat', error);

                ws.send(JSON.stringify({
                    type:"error",
                    message:"failed to send the chat"
                }))
            }

        }





        

    })













})