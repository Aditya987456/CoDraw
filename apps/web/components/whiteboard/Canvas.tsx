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
    x:number,
    y:number,
    radius:number
}








export default function Canvas( {roomId}: canvasProps){


    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);
    const [shapes, setShapes]=useState<Shape[]>([]);  //actual data...

    const [tool, setTool] = useState<"rect" | "circle">("circle");

    const shapeRef = useRef<Shape[]>([])   //needed becz in mousemove func old state which is [] is there becz dependency array of useeffect is [] . i.e only runs at mounting...

    //current drawing starting points...
    const startX = useRef(0);
    const startY = useRef(0);









    //this is for finding the exact coordinates of the our canvas on the view port of the browser...
    function getCanvasPoint(e: MouseEvent) {
        const canvas = canvasRef.current;

        if (!canvas) {
            return { x: 0, y: 0 };
        }

        const rect = canvas.getBoundingClientRect();

        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }



    //draw shapes - whole like when multiple shapes added....
    function drawShapes(
    ctx: CanvasRenderingContext2D,
    shapes: Shape[]
    ) {

        //   is here needed any strokestyle things here??


        for (const shape of shapes) {

            //rectangle
            if (shape.type === "rect") {
                //ctx.strokeStyle = "white";
                ctx.strokeRect(
                    shape.x,
                    shape.y,
                    shape.width,
                    shape.height
                );
            }


            //circle
            if(shape.type === "circle"){
                ctx.beginPath();

                ctx.arc(
                    shape.x,
                    shape.y,
                    shape.radius,
                    0,
                    Math.PI*2
                )

                ctx.stroke()

            }


        }
    }



    /* rendercanvas - This function is created to make the code that is repeating which is -- 
    1. clear old created shapes during dragging mouse, - clearrect-
    2. background like: fillstyle and fillrect
    3. call drawShapes function for shapes creation ...
    */
        // 1. clear Canvas
        // 2. draw background
        // 3. draw saved shapes
        // 4. draw temporary rectangle
    function rendercanvas(
        ctx:CanvasRenderingContext2D,
        shapes:Shape[]
    ){

        //1.clear prev -- we have clear whole canvas...
        ctx.clearRect(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
        );

    //background of the whole canvas----
        //2.
        ctx.fillStyle = "black";

        //2.
        ctx.fillRect(
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
        );

        //3.
        drawShapes(ctx, shapes);

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

                const point = getCanvasPoint(e)

                startX.current = point.x;
                startY.current = point.y;

                //console.log("mousedown viewport-Start : ", e.clientX, e.clientY);
            }

            function HandleMouseUp(e:MouseEvent){
                isDrawing.current = false;
                //console.log("mouseup viewport coordinates : ", e.clientX, e.clientY);

                const point = getCanvasPoint(e)
                let newShape : Shape;


                if(tool === "rect"){
                    const width = point.x - startX.current;
                    const height = point.y - startY.current;

                    newShape = {
                        //id:crypto.randomUUID(),
                        type: "rect",
                        x: startX.current,
                        y: startY.current,
                        width,
                        height
                    };

                
                }else{
                    const dx = point.x - startX.current;
                    const dy = point.y - startY.current;

                    const radius = Math.hypot(dx, dy);

                    newShape = {
                        type: "circle",
                        x: startX.current,
                        y: startY.current,
                        radius
                    };

                }


                setShapes( (prev)=> [...prev, newShape ] );
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


                const point = getCanvasPoint(e)
                rendercanvas(ctx, shapeRef.current);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "white"




                


            //     ctx.clearRect(0,0,canvas.width, canvas.height);

            //    //background...
            //     ctx.fillStyle = "black"
            //     ctx.fillRect(0,0, canvas.width, canvas.height);

            //     //already completed shapes...
            //     drawShapes(ctx, shapeRef.current);

            


                if(tool === "rect"){

                    const width = point.x - startX.current;
                    const height = point.y - startY.current;

                     ctx.strokeRect(startX.current, startY.current, width, height);

                }


                if(tool === "circle"){

                    const distX = point.x - startX.current
                    const distY = point.y - startY.current

                    const radius = Math.hypot(distX, distY);

                    ctx.beginPath();

                    ctx.arc(
                        startX.current,
                        startY.current,
                        radius,
                        0,
                        Math.PI * 2
                    );

                    ctx.stroke();

                }




                //console.log("mousemove viewport coordinates : ", e.clientX, e.clientY);
                //console.log("Start : ",startX.current, startY.current, "Current : ",e.clientX, e.clientY)

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

     

    }, [] )


    

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

        // ctx.clearRect(
        //     0,
        //     0,
        //     canvas.width,
        //     canvas.height
        // );

        // ctx.fillStyle = "black"
        // ctx.fillRect(0,0, canvas.width, canvas.height);   // background black.

        // drawShapes(ctx, shapes);

        //----instead of all above just use renderCanvas----
        rendercanvas(ctx, shapes);

        

    }, [shapes] )






    



    return (
        <div>

            <div>
                <span>Select tool:</span>
                <button onClick={() => setTool("rect")} className="p-2 border">Rectangle</button>
                <button onClick={() => setTool("circle")} className="p-2 border">Circle</button>
            </div>

            <canvas ref={canvasRef} width={1000} height={1000} ></canvas>
            

        </div>
    )
    
}