"use client"

import { useEffect, useRef, useState } from "react";

type canvasProps = {
    roomId:string
}

//descriminated union -> ....
type Shape = {
    //id:string,
    type:"rect",
    x:number,
    y:number,
    width:number,
    height:number

} | {
    //id:string,
    type:"circle",
    centerX:number,
    centerY:number,
    radius:number
}








export default function Canvas( {roomId}: canvasProps){


    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);
    const [shapes, setShapes]=useState<Shape[]>([]);  //actual data...
    const shapeRef = useRef<Shape[]>([])   //needed becz in mousemove func old state which is [] is there becz dependency array of useeffect is [] . i.e only runs at mounting...

    //current drawing starting points...
    const startX = useRef(0);
    const startY = useRef(0);


    //draw shapes - whole like when multiple shapes added....
    function drawShapes(
    ctx: CanvasRenderingContext2D,
    shapes: Shape[]
    ) {
        for (const shape of shapes) {
            if (shape.type === "rect") {
                ctx.strokeStyle = "white";
                ctx.strokeRect(
                    shape.x,
                    shape.y,
                    shape.width,
                    shape.height
                );
            }
        }
    }


    


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

            ctx.fillStyle = "rgba(0,0,0)"
            ctx.fillRect(0,0, canvas.width, canvas.height);   // background black.


            function HandleMouseDown(e:MouseEvent){
                isDrawing.current = true;

                startX.current = e.clientX;
                startY.current = e.clientY;

                console.log("mousedown viewport-Start : ", e.clientX, e.clientY);
            }

            function HandleMouseUp(e:MouseEvent){
                isDrawing.current = false;
                console.log("mouseup viewport coordinates : ", e.clientX, e.clientY);


                const width = e.clientX - startX.current;
                const height = e.clientY - startY.current;

                

                const newShapes:Shape = {
                    //id:crypto.randomUUID(),
                    type:"rect",
                    x:startX.current,
                    y:startY.current,
                    width,
                    height
                }

                setShapes( (prev)=> [...prev, newShapes ] );
            }




            function HandleMouseMove(e:MouseEvent){

                const canvas = canvasRef.current;

                if(!canvas){
                    return;
                }
                const ctx = canvas.getContext("2d");

                if(!ctx){
                    return;
                }
                



                if(!isDrawing.current){
                    return;
                }

                const width = e.clientX - startX.current;
                const height = e.clientY - startY.current;

                ctx.clearRect(0,0,canvas.width, canvas.height);

                ctx.lineWidth = 2;

                
               //background...
                ctx.fillStyle = "black"
                ctx.fillRect(0,0, canvas.width, canvas.height);

                //already completed shapes...
                drawShapes(ctx, shapeRef.current);


                ctx.strokeStyle = "white"
                ctx.strokeRect(startX.current, startY.current, width, height);


                //console.log("mousemove viewport coordinates : ", e.clientX, e.clientY);
                console.log("Start : ",startX.current, startY.current, "Current : ",e.clientX, e.clientY)

            }



            canvas.addEventListener("mousedown", HandleMouseDown)

            canvas.addEventListener("mouseup", HandleMouseUp)

            canvas.addEventListener("mousemove", HandleMouseMove)








//cleanup things.... need to do canvas things manually becz most of the thing if we do in react then they take care...
        return ()=>{
            canvas.removeEventListener("mouseup", HandleMouseUp)
            canvas.removeEventListener("mousedown", HandleMouseDown)
            canvas.removeEventListener("mousemove", HandleMouseMove)
        }

    }

     

    }, [canvasRef] )


    

    //----multiple shape creation...

    useEffect( ()=>{

        shapeRef.current = shapes;


        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }

        const ctx = canvas.getContext("2d")
        if(!ctx){
            return;
        }

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.fillStyle = "black"
        ctx.fillRect(0,0, canvas.width, canvas.height);   // background black.

        drawShapes(ctx, shapes);

        

    }, [shapes] )






    



    return (
        <div>


            <canvas ref={canvasRef} width={1000} height={1000} ></canvas>


        </div>
    )
    
}