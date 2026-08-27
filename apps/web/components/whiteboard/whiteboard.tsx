import Canvas from "./Canvas";


type whiteboardProps = {
    roomId:string
}


export default function Whiteboard( {roomId}:whiteboardProps ){

    

    return(
        <main>
            <Canvas roomId = {roomId}/>
        </main>
    )
}