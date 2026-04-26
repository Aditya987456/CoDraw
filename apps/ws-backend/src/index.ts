import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken"

const wss = new WebSocketServer( {port:8080} );

wss.on('connection', function connection(ws, request){
    const url = request.url;  //here ws, request is the things of the user who connected...
    if(!url){
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


    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token');

    ws.on('message', function message(data){
        ws.send('pong');
    })
})