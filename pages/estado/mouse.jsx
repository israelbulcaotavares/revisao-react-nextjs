import { useState } from "react"

export default function Mouse(){

    const [x, setX] = useState(0)        
    //const arrayX = useState(0)
   // let x = arrayX[0]
    //const alterarX = arrayX[1]
    
    const [y, setY] = useState(0)
    // const arrayY = useState(0)
    // let y = arrayY[0]
    // const alterarY = arrayY[1]


 

    const estilo = {      
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center",
            backgroundColor: '#222',
            color: "#fff",
            height: '100vh' 
       
    }
    function quandoMover(ev) {
        setX(ev.clientX )
        setY(ev.clientY  )
    
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}