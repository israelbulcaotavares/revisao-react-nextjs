import { useEffect, useState } from "react"
import { mega } from '../../functions/mega'
import NumeroDisplay from "../../components/NumeroDisplay";

export default function megasena() {

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() =>{
        setNumeros(mega())
    },[])
    
    function renderNumeros(){
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />)
    }

    return(
        <div style={{
            display: "flex", 
            flexDirection: "column",
            alignItems: "center"
            
        }}>
            <h1>Mega Sena</h1>
            
            <div style={{
            display: "flex", 
              justifyContent:"center" , 
            flexWrap:"wrap",
        }} >
                {renderNumeros()}
            </div>
            <div>
                <input type="number" value={qtde} min={6} max={20}
                    onChange={e => setQtde(e.target.value)} />
                <button onClick={() => setNumeros(mega(qtde))} >Gerar aposta</button>
            </div>
        </div>
    )
}