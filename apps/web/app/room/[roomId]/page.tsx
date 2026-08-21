"use client"

import { useEffect, useRef } from "react"



export default function Rooms() {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);

    const startX = useRef(0);
    const startY = useRef(0);
    


    useEffect(()=>{

        if(canvasRef.current){
            const canvas = canvasRef.current;

            if(!canvas){
                return;
            }
             const ctx = canvas.getContext("2d");

            if(!ctx){
                return;
            }

            // console.log("Canvas:", canvas);
            // console.log("Context:", ctx);

            // ctx.strokeRect(25, 0, 100, 100);






            canvas.addEventListener("mousedown", (e)=>{
                isDrawing.current = true;

                startX.current = e.clientX;
                startY.current = e.clientY;

                console.log("mousedown viewport-Start : ", e.clientX, e.clientY);
            })




            canvas.addEventListener("mouseup", (e)=>{
                isDrawing.current = false;
                console.log("mouseup viewport coordinates : ", e.clientX, e.clientY);
            })





            canvas.addEventListener("mousemove", (e)=>{
                if(!isDrawing.current){
                    return;
                }

                const width = e.clientX - startX.current;
                const height = e.clientY - startY.current;

                ctx.clearRect(0,0,canvas.width, canvas.height);

                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;

                // ctx.fillStyle = "rgba(0,0,0)"
                // ctx.fillRect(0,0, canvas.width, canvas.height);
                // ctx.fillStyle="rgba(255, 255, 255)"

                ctx.strokeRect(startX.current, startY.current, width, height);


                //console.log("mousemove viewport coordinates : ", e.clientX, e.clientY);
                console.log("Start : ",startX.current, startY.current, "Current : ",e.clientX, e.clientY)
            })

    }

        

    }, [canvasRef] )



    



    return (
        <div>


            <canvas ref={canvasRef} width={500} height={500} className=" m-6 bg-green-200"></canvas>


        </div>
    )
    
}