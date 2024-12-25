import { useEffect,useRef } from "react"

const board = () => {
    const canvasRef = useRef(null);
    

  return (
    <canvas ref={canvasRef}>

    </canvas>
  )
}

export default board