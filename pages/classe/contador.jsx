import { Component } from "react";
import ContadorPage from "../../components/Contador";


export default class Contador extends Component {
   
    render(){
        return (
            <div>
                <ContadorPage valorInicial={100} passo={35}/>
               
            </div>
        )
    }
}