// "use client"

import Whiteboard from "../../../components/whiteboard/whiteboard";

// import { useEffect, useRef } from "react"



// export default function Rooms() {

//     const canvasRef = useRef<HTMLCanvasElement>(null);
//     const isDrawing = useRef(false);

//     const startX = useRef(0);
//     const startY = useRef(0);
    


//     useEffect(()=>{

//         if(canvasRef.current){
//             const canvas = canvasRef.current;

//             if(!canvas){
//                 return;
//             }
//              const ctx = canvas.getContext("2d");

//             if(!ctx){
//                 return;
//             }

//             // console.log("Canvas:", canvas);
//             // console.log("Context:", ctx);

//             // ctx.strokeRect(25, 0, 100, 100);

//             ctx.fillStyle = "rgba(0,0,0)"
//             ctx.fillRect(0,0, canvas.width, canvas.height);






//             canvas.addEventListener("mousedown", (e)=>{
//                 isDrawing.current = true;

//                 startX.current = e.clientX;
//                 startY.current = e.clientY;

//                 console.log("mousedown viewport-Start : ", e.clientX, e.clientY);
//             })




//             canvas.addEventListener("mouseup", (e)=>{
//                 isDrawing.current = false;
//                 console.log("mouseup viewport coordinates : ", e.clientX, e.clientY);
//             })





//             canvas.addEventListener("mousemove", (e)=>{
//                 if(!isDrawing.current){
//                     return;
//                 }

//                 const width = e.clientX - startX.current;
//                 const height = e.clientY - startY.current;

//                 ctx.clearRect(0,0,canvas.width, canvas.height);

//                 ctx.strokeStyle = "black";
//                 ctx.lineWidth = 2;

                
               
//                 ctx.fillStyle = "rgba(0,0,0)"
//                 ctx.fillRect(0,0, canvas.width, canvas.height);
//                 ctx.strokeStyle = "rgba(255, 255, 255)"
//                 ctx.strokeRect(startX.current, startY.current, width, height);


//                 //console.log("mousemove viewport coordinates : ", e.clientX, e.clientY);
//                 console.log("Start : ",startX.current, startY.current, "Current : ",e.clientX, e.clientY)
//             })

//     }

        

//     }, [canvasRef] )


//     // document.addEventListener("mouseup", (e)=>{
//     //     isDrawing.current = false;
//     // })


    



//     return (
//         <div>


//             <canvas ref={canvasRef} width={1000} height={1000}></canvas>


//         </div>
//     )
    
// }



export default async function roomPage( {params}:{
    params:Promise<{roomId:string}>
} ){

    const roomId = (await params).roomId;



    return <Whiteboard roomId={roomId}/>

    
}